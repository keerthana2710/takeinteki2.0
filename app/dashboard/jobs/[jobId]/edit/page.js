"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { getJobById, updateJob } from "@/features/jobs/jobService";
import { useAuth } from "@/lib/AuthContext";

const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship", "Remote"];
const EXPERIENCE_LEVELS = ["Fresher", "1-3 years", "3-5 years", "5-8 years", "8+ years"];

export default function EditJobPage() {
  const { user } = useAuth();
  const router = useRouter();
  const { jobId } = useParams();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    jobType: "",
    experience: "",
    skills: [],
    status: "active",
  });

  useEffect(() => {
    async function fetchJob() {
      try {
        const job = await getJobById(jobId);
        if (!job) {
          setError("Job not found.");
          setFetching(false);
          return;
        }
        setForm({
          title: job.title || "",
          description: job.description || "",
          location: job.location || "",
          jobType: job.jobType || "",
          experience: job.experience || "",
          skills: job.skills || [],
          status: job.status || "active",
        });
      } catch (err) {
        console.error("Failed to fetch job:", err);
        setError("Failed to load job details.");
      } finally {
        setFetching(false);
      }
    }
    fetchJob();
  }, [jobId]);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    const skill = skillInput.trim();
    if (skill && !form.skills.includes(skill)) {
      updateField("skills", [...form.skills, skill]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    updateField("skills", form.skills.filter((s) => s !== skill));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!form.title || !form.description || !form.location || !form.jobType || !form.experience) {
        setError("Please fill in all required fields.");
        setLoading(false);
        return;
      }

      await updateJob(jobId, form);
      setSuccess(true);
      setTimeout(() => router.push("/dashboard"), 1500);
    } catch (err) {
      console.error("Failed to update job:", err);
      setError("Failed to update job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="flex flex-col items-center gap-4">
          <span className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></span>
          <p className="text-on-surface-variant font-medium">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (error && !form.title) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <span className="material-symbols-outlined text-6xl text-red-300 mb-4">error</span>
        <h2 className="text-2xl font-extrabold text-on-surface mb-2 font-headline">Error</h2>
        <p className="text-on-surface-variant mb-6">{error}</p>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-5xl text-green-600">check_circle</span>
        </div>
        <h2 className="text-2xl font-extrabold text-on-surface mb-2 font-headline">Job Updated!</h2>
        <p className="text-on-surface-variant">Redirecting to dashboard...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/dashboard"
          className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-zinc-200 transition-all"
        >
          <span className="material-symbols-outlined text-xl text-on-surface-variant">arrow_back</span>
        </Link>
        <div>
          <h1 className="text-3xl font-extrabold text-on-surface font-headline">Edit Job</h1>
          <p className="text-on-surface-variant mt-1">Update the job details below</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl">
        <div className="bg-white rounded-2xl border border-zinc-100 p-8 lg:p-10 shadow-sm space-y-8">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="e.g. Senior Full-Stack Engineer"
              className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-300"
              required
              disabled={loading}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="Describe the role, responsibilities, and what you're looking for..."
              className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-300 resize-none"
              required
              disabled={loading}
            />
          </div>

          {/* Location + Job Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => updateField("location", e.target.value)}
                placeholder="e.g. Bangalore, India"
                className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-300"
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">
                Job Type <span className="text-red-500">*</span>
              </label>
              <select
                value={form.jobType}
                onChange={(e) => updateField("jobType", e.target.value)}
                className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface cursor-pointer"
                required
                disabled={loading}
              >
                <option value="">Select type</option>
                {JOB_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Experience + Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">
                Experience <span className="text-red-500">*</span>
              </label>
              <select
                value={form.experience}
                onChange={(e) => updateField("experience", e.target.value)}
                className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface cursor-pointer"
                required
                disabled={loading}
              >
                <option value="">Select level</option>
                {EXPERIENCE_LEVELS.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">Status</label>
              <select
                value={form.status}
                onChange={(e) => updateField("status", e.target.value)}
                className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface cursor-pointer"
                disabled={loading}
              >
                <option value="active">Active</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">Skills</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a skill and press Enter"
                className="flex-1 px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-300"
                disabled={loading}
              />
              <button
                type="button"
                onClick={addSkill}
                disabled={loading}
                className="px-5 py-4 bg-zinc-100 hover:bg-zinc-200 rounded-2xl transition-all font-bold text-sm text-on-surface-variant"
              >
                Add
              </button>
            </div>
            {form.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {form.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="hover:text-red-600 transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">close</span>
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold flex items-center gap-2 border border-red-100">
              <span className="material-symbols-outlined text-lg">error</span>
              {error}
            </div>
          )}

          {/* Submit */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-secondary hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Saving...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">save</span>
                  Save Changes
                </>
              )}
            </button>
            <Link
              href="/dashboard"
              className="px-8 py-4 text-on-surface-variant font-bold rounded-2xl hover:bg-zinc-100 transition-all"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
