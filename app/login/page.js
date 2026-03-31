"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "keerthi@takeinteki.com" && password === "keer1298") {
      alert("Login successful!");
      window.location.href = "/";
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(30,58,138,0.15)] border border-zinc-100 p-10 lg:p-12 relative z-10 transition-all hover:shadow-2xl">
          <div className="flex flex-col items-center mb-10">
            <Link href="/" className="mb-8 hover:scale-105 transition-transform">
              <img
                alt="Takeintaki"
                className="h-12 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/ADBb0uj3ytTOPvzXy9XoYw7PY0xvEw9qBjNrq99Rge3k4nO3EBJNZS7-spgOtj7EA8X67TDCqK2JSfKJ82m3JGgTDEO7THz85OfsJkV4k6u-nOOIP_e2Y4uONqv-GbhvEMjpiQSp4CI9t7UdiBiw6RiQjOekL1foRMrFeDeCLMLYN3p-_e-FzSrZQEoKcRArP6TUyWsiwbW0XxpUwQ4fUjPPy7Mbp43Quro8n80sdlXByTNP1NJlf3Jx99A6Sx00rhhiD-3Beut4EBjQwc0"
              />
            </Link>
            <h1 className="text-3xl font-extrabold text-on-surface mb-2 font-headline">Welcome Back</h1>
            <p className="text-on-surface-variant text-center opacity-70">Please enter your credentials to login</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface tracking-wide uppercase ml-1 opacity-70">Email Address</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-primary transition-colors">
                  mail
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@takeinteki.com"
                  className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-on-surface tracking-wide uppercase opacity-70">Password</label>
                <Link href="#" className="text-xs font-bold text-primary hover:text-secondary transition-colors uppercase tracking-widest">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-primary transition-colors">
                  lock
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold flex items-center gap-2 border border-red-100 animate-shake">
                <span className="material-symbols-outlined text-lg">error</span>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-secondary hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              Log In
              <span className="material-symbols-outlined !text-white text-lg">arrow_forward</span>
            </button>
          </form>


        </div>
      </div>
    </div>
  );
}
