"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getJobById } from "@/features/jobs/jobService";
import { applyToJob } from "@/features/applications/applicationService";

export default function ApplyPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    async function fetchJob() {
      try {
        const data = await getJobById(jobId);
        setJob(data);
      } catch (err) {
        console.error("Failed to fetch job:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchJob();
  }, [jobId]);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowed.includes(file.type)) {
      setError("Please upload a PDF, DOC, or DOCX file.");
      return;
    }
    if (file.size > maxSize) {
      setError("File size must be under 5MB.");
      return;
    }

    setError("");
    setResumeFile(file);
    setFileName(file.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!resumeFile) {
      setError("Please upload your resume.");
      return;
    }

    setSubmitting(true);
    try {
      await applyToJob({
        jobId,
        jobTitle: job?.title || "",
        name: form.name,
        email: form.email,
        resumeFile,
      });
      setSuccess(true);
    } catch (err) {
      console.error("Failed to submit application:", err);
      setError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center py-48">
          <div className="flex flex-col items-center gap-4">
            <span className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></span>
            <p className="text-on-surface-variant font-medium">Loading...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-48">
          <span className="material-symbols-outlined text-6xl text-zinc-200 mb-4">error</span>
          <h2 className="text-2xl font-extrabold text-on-surface mb-2 font-headline">Job Not Found</h2>
          <p className="text-on-surface-variant mb-6">This job posting may have been removed.</p>
          <Link
            href="/jobs"
            className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all"
          >
            Browse All Jobs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-48">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-5xl text-green-600">check_circle</span>
          </div>
          <h2 className="text-3xl font-extrabold text-on-surface mb-3 font-headline">Application Submitted!</h2>
          <p className="text-on-surface-variant text-lg mb-8 max-w-md text-center">
            Thank you for applying to <span className="font-bold text-on-surface">{job.title}</span>. We&apos;ll review your application and get back to you soon.
          </p>
          <Link
            href="/jobs"
            className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all"
          >
            Browse More Jobs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-48">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Job Info Banner */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-[2rem] border border-blue-100 p-8 lg:p-10 mb-10">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Applying for</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-on-surface font-headline mb-3">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant font-medium">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">location_on</span>
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">work</span>
                {job.jobType}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">trending_up</span>
                {job.experience}
              </span>
            </div>
          </div>

          {/* Description */}
          {job.description && (
            <div className="bg-white rounded-[2rem] border border-zinc-100 p-8 lg:p-10 mb-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-on-surface mb-4 font-headline">About the Role</h2>
              <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">{job.description}</p>
            </div>
          )}

          {/* Skills */}
          {job.skills?.length > 0 && (
            <div className="bg-white rounded-[2rem] border border-zinc-100 p-8 lg:p-10 mb-10 shadow-sm">
              <h2 className="text-lg font-extrabold text-on-surface mb-4 font-headline">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Apply Form */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(30,58,138,0.1)] border border-zinc-100 p-8 lg:p-12">
            <h2 className="text-2xl font-extrabold text-on-surface mb-8 font-headline">Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-300"
                    required
                    disabled={submitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-300"
                    required
                    disabled={submitting}
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">
                  Upload Resume <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <input
                    type="file"
                    className="hidden"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    disabled={submitting}
                  />
                  <label
                    htmlFor="resume-upload"
                    className={`flex flex-col items-center justify-center w-full min-h-[160px] border-2 border-dashed rounded-3xl transition-all cursor-pointer group ${
                      fileName
                        ? "border-primary/30 bg-primary/5"
                        : "border-zinc-200 bg-zinc-50 hover:bg-blue-50/50 hover:border-primary/30"
                    }`}
                  >
                    {fileName ? (
                      <>
                        <span className="material-symbols-outlined text-4xl text-primary mb-3">description</span>
                        <p className="text-sm font-bold text-on-surface">{fileName}</p>
                        <p className="text-xs text-primary mt-1 font-bold">Click to change file</p>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-4xl text-zinc-300 group-hover:text-primary mb-3 transition-colors">
                          cloud_upload
                        </span>
                        <p className="text-sm font-bold text-on-surface-variant group-hover:text-on-surface">
                          Click to upload your resume
                        </p>
                        <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest">PDF, DOC, DOCX (Max 5MB)</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold flex items-center gap-2 border border-red-100">
                  <span className="material-symbols-outlined text-lg">error</span>
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full lg:w-auto px-12 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl hover:bg-secondary hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {submitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <span className="material-symbols-outlined !text-white text-xl">send</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
