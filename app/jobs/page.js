"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getJobs } from "@/features/jobs/jobService";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
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
        status: "active",
        lastDoc: lastDocsRef.current[page] || null,
      });
      setJobs(result.jobs);
      setTotalPages(result.totalPages);
      setTotal(result.total);

      if (result.lastDoc) {
        setLastDocs((prev) => ({ ...prev, [page + 1]: result.lastDoc }));
      }
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  // Client-side search
  const filteredJobs = search
    ? jobs.filter(
        (job) =>
          job.title?.toLowerCase().includes(search.toLowerCase()) ||
          job.location?.toLowerCase().includes(search.toLowerCase()) ||
          job.jobType?.toLowerCase().includes(search.toLowerCase()) ||
          job.skills?.some((s) => s.toLowerCase().includes(search.toLowerCase()))
      )
    : jobs;

  const formatDate = (date) => {
    if (!date) return "";
    const now = new Date();
    const diff = Math.floor((now - new Date(date)) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "Today";
    if (diff === 1) return "Yesterday";
    if (diff < 7) return `${diff} days ago`;
    return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col mb-16 items-center lg:items-start text-center lg:text-left reveal">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Careers</span>
            <h1 className="font-headline text-4xl lg:text-7xl font-extrabold text-on-surface mb-6">
              Open Positions
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-3xl opacity-80">
              Join the team that is shaping the future of digital security and software innovation.
            </p>
          </div>

          {/* Search */}
          <div className="mb-10">
            <div className="relative max-w-xl">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 text-xl">
                search
              </span>
              <input
                type="text"
                placeholder="Search by title, location, skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-400"
              />
            </div>
          </div>

          {/* Jobs */}
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="flex flex-col items-center gap-4">
                <span className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></span>
                <p className="text-on-surface-variant font-medium">Loading jobs...</p>
              </div>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24">
              <span className="material-symbols-outlined text-6xl text-zinc-200 mb-4">work_off</span>
              <h3 className="text-xl font-bold text-on-surface mb-2">No open positions</h3>
              <p className="text-on-surface-variant">
                {search ? "Try a different search term." : "Check back soon for new opportunities."}
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white p-8 lg:p-10 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-4 py-1.5 bg-blue-50 text-primary text-xs font-bold rounded-full uppercase tracking-widest border border-primary/10">
                        {job.jobType}
                      </span>
                      <span className="text-on-surface-variant text-sm font-medium opacity-60">
                        {formatDate(job.createdAt)}
                      </span>
                    </div>
                    <h4 className="text-2xl lg:text-[28px] font-extrabold mb-3 text-on-surface group-hover:text-primary transition-colors">
                      {job.title}
                    </h4>
                    <p className="text-on-surface-variant text-base mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-xl !text-primary">location_on</span>
                      {job.location}
                    </p>
                    <p className="text-on-surface-variant leading-relaxed text-base mb-6 flex-grow opacity-80 line-clamp-3">
                      {job.description}
                    </p>
                    {job.skills?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {job.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-zinc-100 text-on-surface-variant text-xs font-bold rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 4 && (
                          <span className="px-3 py-1 text-on-surface-variant text-xs font-bold">
                            +{job.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    )}
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-100/50">
                      <span className="text-sm font-bold text-on-surface-variant flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base text-primary">trending_up</span>
                        {job.experience}
                      </span>
                      <Link
                        href={`/jobs/${job.id}/apply`}
                        className="px-6 py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-secondary transition-all hover:shadow-lg active:scale-[0.98]"
                      >
                        Apply
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-12">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex items-center gap-1 px-5 py-3 text-sm font-bold rounded-xl border border-zinc-200 hover:bg-zinc-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="material-symbols-outlined text-base">chevron_left</span>
                    Previous
                  </button>
                  <span className="text-sm font-bold text-on-surface-variant px-4">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="flex items-center gap-1 px-5 py-3 text-sm font-bold rounded-xl border border-zinc-200 hover:bg-zinc-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
