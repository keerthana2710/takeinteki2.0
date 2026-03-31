import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getCountFromServer,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const JOBS_COLLECTION = "jobs";
const PAGE_SIZE = 9;

export async function createJob(jobData, userId) {
  const docRef = await addDoc(collection(db, JOBS_COLLECTION), {
    ...jobData,
    createdBy: userId,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getJobs({ status, search, page = 1, lastDoc = null } = {}) {
  let q;
  const constraints = [orderBy("createdAt", "desc")];

  if (status) {
    constraints.unshift(where("status", "==", status));
  }

  if (lastDoc) {
    constraints.push(startAfter(lastDoc));
  }

  constraints.push(limit(PAGE_SIZE));

  q = query(collection(db, JOBS_COLLECTION), ...constraints);

  const snapshot = await getDocs(q);
  const jobs = snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
    createdAt: d.data().createdAt?.toDate?.() || null,
  }));

  // Get total count for pagination
  const countConstraints = [];
  if (status) {
    countConstraints.push(where("status", "==", status));
  }
  const countQuery = query(collection(db, JOBS_COLLECTION), ...countConstraints);
  const countSnapshot = await getCountFromServer(countQuery);
  const total = countSnapshot.data().count;

  return {
    jobs,
    lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
    total,
    totalPages: Math.ceil(total / PAGE_SIZE),
    hasMore: jobs.length === PAGE_SIZE,
  };
}

export async function getJobById(jobId) {
  const docSnap = await getDoc(doc(db, JOBS_COLLECTION, jobId));
  if (!docSnap.exists()) return null;
  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    createdAt: data.createdAt?.toDate?.() || null,
  };
}

export async function updateJob(jobId, jobData) {
  const jobRef = doc(db, JOBS_COLLECTION, jobId);
  await updateDoc(jobRef, {
    ...jobData,
    updatedAt: serverTimestamp(),
  });
}

export async function getActiveJobs(maxCount) {
  const q = query(
    collection(db, JOBS_COLLECTION),
    where("status", "==", "active"),
    orderBy("createdAt", "desc"),
    ...(maxCount ? [limit(maxCount)] : [])
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
    createdAt: d.data().createdAt?.toDate?.() || null,
  }));
}
