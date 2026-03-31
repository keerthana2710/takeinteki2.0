"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { getJobs } from "@/features/jobs/jobService";
import { getApplicationCountsForJobs } from "@/features/applications/applicationService";

export default function DashboardPage() {
  const [jobs, setJobs] = useState([]);
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [lastDocs, setLastDocs] = useState({ 1: null });
  const lastDocsRef = useRef(lastDocs);
  lastDocsRef.current = lastDocs;
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getJobs({
        status: statusFilter || undefined,
        lastDoc: lastDocsRef.current[page] || null,
      });
      setJobs(result.jobs);
      setTotalPages(result.totalPages);
      setTotal(result.total);

      // Store the lastDoc for the next page
      if (result.lastDoc) {
        setLastDocs((prev) => ({ ...prev, [page + 1]: result.lastDoc }));
      }

      // Fetch application counts
      if (result.jobs.length > 0) {
        const jobIds = result.jobs.map((j) => j.id);
        const appCounts = await getApplicationCountsForJobs(jobIds);
        setCounts(appCounts);
      }
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
    } finally {
      setLoading(false);
    }
  }, [statusFilter, page]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  // Reset pagination when filter changes
  useEffect(() => {
    setPage(1);
    setLastDocs({ 1: null });
  }, [statusFilter]);

  // Client-side search filter
  const filteredJobs = search
    ? jobs.filter(
        (job) =>
          job.title?.toLowerCase().includes(search.toLowerCase()) ||
          job.location?.toLowerCase().includes(search.toLowerCase()) ||
          job.jobType?.toLowerCase().includes(search.toLowerCase())
      )
    : jobs;

  const formatDate = (date) => {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-on-surface font-headline">Job Dashboard</h1>
          <p className="text-on-surface-variant mt-1">
            {total} {total === 1 ? "job" : "jobs"} total
          </p>
        </div>
        <Link
          href="/dashboard/create-job"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Create Job
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xl">
            search
          </span>
          <input
            type="text"
            placeholder="Search jobs by title, location, type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-medium"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-bold text-on-surface-variant cursor-pointer"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {/* Jobs Table */}
      {loading ? (
        <div className="flex items-center justify-center py-24">
          <div className="flex flex-col items-center gap-4">
            <span className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></span>
            <p className="text-on-surface-variant font-medium">Loading jobs...</p>
          </div>
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border border-zinc-100">
          <span className="material-symbols-outlined text-6xl text-zinc-200 mb-4">work_off</span>
          <h3 className="text-xl font-bold text-on-surface mb-2">No jobs found</h3>
          <p className="text-on-surface-variant mb-6">
            {search || statusFilter ? "Try adjusting your filters." : "Create your first job posting to get started."}
          </p>
          {!search && !statusFilter && (
            <Link
              href="/dashboard/create-job"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              Create Job
            </Link>
          )}
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-100">
                  <th className="text-left px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Title</th>
                  <th className="text-left px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Location</th>
                  <th className="text-left px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Status</th>
                  <th className="text-left px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Date</th>
                  <th className="text-center px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Applications</th>
                  <th className="text-right px-6 py-4 text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job) => (
                  <tr key={job.id} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-5">
                      <p className="font-bold text-on-surface">{job.title}</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">{job.jobType}</p>
                    </td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant font-medium">{job.location}</td>
                    <td className="px-6 py-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          job.status === "active"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-zinc-100 text-zinc-500 border border-zinc-200"
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant font-medium">{formatDate(job.createdAt)}</td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-flex items-center justify-center w-9 h-9 bg-primary/10 text-primary font-bold text-sm rounded-full">
                        {counts[job.id] ?? "—"}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <Link
                        href={`/dashboard/jobs/${job.id}/edit`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/10 rounded-lg transition-all"
                      >
                        <span className="material-symbols-outlined text-base">edit</span>
                        Edit
                      </Link>
                      <Link
                        href={`/dashboard/jobs/${job.id}/applications`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/10 rounded-lg transition-all"
                      >
                        <span className="material-symbols-outlined text-base">visibility</span>
                        Applications
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl border border-zinc-100 p-5 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-on-surface text-lg">{job.title}</p>
                    <p className="text-sm text-on-surface-variant">{job.location}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      job.status === "active"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-zinc-100 text-zinc-500 border border-zinc-200"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-4 text-sm text-on-surface-variant">
                    <span>{formatDate(job.createdAt)}</span>
                    <span className="flex items-center gap-1 font-bold text-primary">
                      <span className="material-symbols-outlined text-base">people</span>
                      {counts[job.id] ?? 0}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/jobs/${job.id}/edit`}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-primary hover:bg-primary/10 rounded-lg transition-all"
                    >
                      <span className="material-symbols-outlined text-base">edit</span>
                      Edit
                    </Link>
                    <Link
                      href={`/dashboard/jobs/${job.id}/applications`}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-primary hover:bg-primary/10 rounded-lg transition-all"
                    >
                      View
                      <span className="material-symbols-outlined text-base">chevron_right</span>
                    </Link>
                  </div>
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
    </div>
  );
}
