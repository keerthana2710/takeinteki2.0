"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as XLSX from "xlsx";
import { getJobById } from "@/features/jobs/jobService";
import { getApplicationsByJob, getAllApplicationsByJob } from "@/features/applications/applicationService";

export default function ApplicationsPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [selectedResume, setSelectedResume] = useState(null);
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      const all = await getAllApplicationsByJob(jobId);
      const rows = all.map((app) => ({
        "Job Title": job?.title || "",
        "Job Location": job?.location || "",
        "Job Type": job?.jobType || "",
        "Experience": job?.experience || "",
        "Job Status": job?.status || "",
        "Applicant Name": app.name,
        "Email": app.email,
        "Application Status": app.status,
        "Applied Date": app.createdAt ? app.createdAt.toLocaleString("en-IN") : "",
        "Resume URL": app.resumeUrl || "",
      }));
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Applications");
      const filename = `${(job?.title || "job").replace(/\s+/g, "-")}-applications.xlsx`;
      XLSX.writeFile(wb, filename);
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setExporting(false);
    }
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [jobData, appData] = await Promise.all([
        getJobById(jobId),
        getApplicationsByJob(jobId, { pageIndex: page - 1 }),
      ]);
      setJob(jobData);
      setApplications(appData.applications);
      setTotal(appData.total);
      setTotalPages(appData.totalPages);
    } catch (err) {
      console.error("Failed to fetch applications:", err);
    } finally {
      setLoading(false);
    }
  }, [jobId, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formatDate = (date) => {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const statusColors = {
    new: "bg-blue-50 text-blue-700 border-blue-200",
    reviewed: "bg-amber-50 text-amber-700 border-amber-200",
    rejected: "bg-red-50 text-red-600 border-red-200",
  };

  const handleViewResume = (e, url) => {
    e.preventDefault();
    setSelectedResume(url);
  };

  if (loading && !job) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="flex flex-col items-center gap-4">
          <span className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></span>
          <p className="text-on-surface-variant font-medium">Loading applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-zinc-200 transition-all"
          >
            <span className="material-symbols-outlined text-xl text-on-surface-variant">arrow_back</span>
          </Link>
          <div>
            <h1 className="text-3xl font-extrabold text-on-surface font-headline">
              {job?.title || "Job"}
            </h1>
            <p className="text-on-surface-variant mt-1">
              {total} {total === 1 ? "application" : "applications"} received
            </p>
          </div>
        </div>
        <button
          onClick={handleExport}
          disabled={exporting || total === 0}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-zinc-700 bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
        >
          {exporting ? (
            <span className="w-4 h-4 border-2 border-zinc-300 border-t-zinc-700 rounded-full animate-spin"></span>
          ) : (
            <span className="material-symbols-outlined text-base">download</span>
          )}
          Export Excel
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24">
          <span className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></span>
        </div>
      ) : applications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border border-zinc-100">
          <span className="material-symbols-outlined text-6xl text-zinc-200 mb-4">inbox</span>
          <h3 className="text-xl font-bold text-on-surface mb-2">No applications yet</h3>
          <p className="text-on-surface-variant">Applications will appear here once candidates apply.</p>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-100">
                  <th className="text-left px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Name</th>
                  <th className="text-left px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Email</th>
                  <th className="text-left px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Status</th>
                  <th className="text-left px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Date</th>
                  <th className="text-right px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Resume</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-on-surface">{app.name}</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant font-medium">{app.email}</td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${statusColors[app.status] || statusColors.new}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant font-medium">{formatDate(app.createdAt)}</td>
                    <td className="px-6 py-5 text-right">
                      {app.resumeUrl ? (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={(e) => handleViewResume(e, app.resumeUrl)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10 rounded-lg transition-all border border-primary/20"
                          >
                            <span className="material-symbols-outlined text-base">visibility</span>
                            View
                          </button>
                          <a
                            href={app.resumeUrl.replace("/upload/", "/upload/fl_attachment/")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-zinc-600 hover:bg-zinc-100 rounded-lg transition-all border border-zinc-200"
                          >
                            <span className="material-symbols-outlined text-base">download</span>
                            Download
                          </a>
                        </div>
                      ) : (
                        <span className="text-sm text-zinc-400">No resume</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-bold text-on-surface text-lg">{app.name}</p>
                    <p className="text-sm text-on-surface-variant">{app.email}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${statusColors[app.status] || statusColors.new}`}>
                    {app.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100">
                  <span className="text-sm text-on-surface-variant">{formatDate(app.createdAt)}</span>
                  {app.resumeUrl ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleViewResume(e, app.resumeUrl)}
                        className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-primary hover:bg-primary/10 rounded-lg transition-all border border-primary/20"
                      >
                        <span className="material-symbols-outlined text-base">visibility</span>
                        View
                      </button>
                      <a
                        href={app.resumeUrl.replace("/upload/", "/upload/fl_attachment/")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-100 rounded-lg transition-all border border-zinc-200"
                      >
                        <span className="material-symbols-outlined text-base">download</span>
                        Download
                      </a>
                    </div>
                  ) : (
                    <span className="text-sm text-zinc-400">No resume</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-xl border border-zinc-200 hover:bg-zinc-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-base">chevron_left</span>
                Prev
              </button>
              <span className="text-sm font-bold text-on-surface-variant px-3">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-xl border border-zinc-200 hover:bg-zinc-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          )}
        </>
      )}

      {/* Resume View Modal */}
      {selectedResume && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedResume(null)}
        >
          <div 
            className="bg-white w-full max-w-5xl h-[90vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-4 border-b border-zinc-100 bg-white">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-2xl">description</span>
                <h3 className="text-lg font-extrabold text-on-surface font-headline">Resume Preview</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedResume.replace("/upload/", "/upload/fl_attachment/")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-zinc-600 hover:bg-zinc-100 rounded-xl transition-all"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  Download
                </a>
                <button
                  onClick={() => setSelectedResume(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-zinc-100 transition-all text-zinc-400 hover:text-on-surface"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
            
            {/* Modal Body (Iframe) */}
            <div className="flex-1 bg-zinc-50 relative">
              <iframe
                src={selectedResume}
                className="w-full h-full border-none"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
