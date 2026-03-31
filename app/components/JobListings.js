"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getActiveJobs } from "@/features/jobs/jobService";

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const data = await getActiveJobs(5);
        setJobs(data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

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
    <section id="jobs" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 reveal">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Careers</span>
            <h2 className="font-headline text-4xl lg:text-7xl font-extrabold text-on-surface mb-6">Active Roles</h2>
            <p className="text-on-surface-variant text-xl leading-relaxed opacity-80">
              Join the team that is shaping the future of digital security and software innovation.
            </p>
          </div>
          <Link
            href="/jobs"
            className="hidden md:flex items-center gap-2 px-6 py-3 border border-zinc-200 rounded-xl font-bold text-on-surface-variant hover:border-primary hover:text-primary transition-all text-sm whitespace-nowrap"
          >
            View All Jobs
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <span className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></span>
          </div>
        ) : jobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <span className="material-symbols-outlined text-5xl text-zinc-200 mb-4">work_off</span>
            <p className="text-on-surface-variant font-medium">No open positions at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-8 lg:p-10 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="px-4 py-1.5 bg-blue-50 text-primary text-xs font-bold rounded-full uppercase tracking-widest border border-primary/10">
                    {job.jobType}
                  </span>
                  <span className="text-on-surface-variant text-sm font-medium opacity-60">
                    {formatDate(job.createdAt)}
                  </span>
                </div>
                <h4 className="text-2xl lg:text-[28px] font-extrabold mb-4 text-on-surface group-hover:text-primary transition-colors">
                  {job.title}
                </h4>
                <p className="text-on-surface-variant text-base mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl !text-primary">location_on</span>
                  {job.location}
                </p>
                <p className="text-on-surface-variant leading-relaxed text-base mb-10 flex-grow opacity-80 line-clamp-3">
                  {job.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-8 border-t border-zinc-100/50">
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
        )}

        {/* Mobile "View All" link */}
        {jobs.length > 0 && (
          <div className="flex md:hidden justify-center mt-10">
            <Link
              href="/jobs"
              className="flex items-center gap-2 px-6 py-3 border border-zinc-200 rounded-xl font-bold text-on-surface-variant hover:border-primary hover:text-primary transition-all text-sm"
            >
              View All Jobs
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
