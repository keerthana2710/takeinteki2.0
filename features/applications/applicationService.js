import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";


const APPLICATIONS_COLLECTION = "applications";
const PAGE_SIZE = 10;

export async function applyToJob({ jobId, jobTitle, name, email, resumeFile }) {
  let resumeUrl = null;

  if (resumeFile) {
    const formData = new FormData();
    formData.append("file", resumeFile);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error || "Resume upload failed");
    }
    const data = await res.json();
    resumeUrl = data.url;
  }

  const docRef = await addDoc(collection(db, APPLICATIONS_COLLECTION), {
    jobId,
    jobTitle,
    name,
    email,
    resumeUrl,
    status: "new",
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getApplicationsByJob(jobId, { pageIndex = 0 } = {}) {
  // Fetch all applications for this job (no orderBy = no composite index needed)
  // and sort + paginate client-side.
  const q = query(
    collection(db, APPLICATIONS_COLLECTION),
    where("jobId", "==", jobId)
  );
  const snapshot = await getDocs(q);

  const all = snapshot.docs
    .map((d) => ({
      id: d.id,
      ...d.data(),
      createdAt: d.data().createdAt?.toDate?.() || null,
    }))
    .sort((a, b) => {
      const ta = a.createdAt ? a.createdAt.getTime() : 0;
      const tb = b.createdAt ? b.createdAt.getTime() : 0;
      return tb - ta; // newest first
    });

  const total = all.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const start = pageIndex * PAGE_SIZE;
  const applications = all.slice(start, start + PAGE_SIZE);

  return {
    applications,
    total,
    totalPages,
    hasMore: start + PAGE_SIZE < total,
  };
}

export async function getAllApplicationsByJob(jobId) {
  const q = query(
    collection(db, APPLICATIONS_COLLECTION),
    where("jobId", "==", jobId)
  );
  const snapshot = await getDocs(q);

  return snapshot.docs
    .map((d) => ({
      id: d.id,
      ...d.data(),
      createdAt: d.data().createdAt?.toDate?.() || null,
    }))
    .sort((a, b) => {
      const ta = a.createdAt ? a.createdAt.getTime() : 0;
      const tb = b.createdAt ? b.createdAt.getTime() : 0;
      return tb - ta;
    });
}

export async function getApplicationCountForJob(jobId) {
  const q = query(
    collection(db, APPLICATIONS_COLLECTION),
    where("jobId", "==", jobId)
  );
  const snapshot = await getDocs(q);
  return snapshot.size;
}

export async function getApplicationCountsForJobs(jobIds) {
  const counts = {};
  await Promise.all(
    jobIds.map(async (jobId) => {
      counts[jobId] = await getApplicationCountForJob(jobId);
    })
  );
  return counts;
}
