"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

export default function DashboardLayout({ children }) {
  const { user, loading, isAdmin, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.replace("/login");
    }
  }, [loading, user, isAdmin, router]);

  if (loading || !user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="flex flex-col items-center gap-4">
          <span className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></span>
          <p className="text-on-surface-variant font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
    { label: "Create Job", href: "/dashboard/create-job", icon: "add_circle" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-zinc-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <img
                alt="Takeinteki"
                className="h-8 w-auto object-contain"
                src="/hero_banner.png"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface-variant hover:bg-zinc-100"
                    }`}
                >
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-on-surface-variant font-medium hidden sm:block">
              {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-50 rounded-xl transition-all"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="md:hidden bg-white border-b border-zinc-100 px-4 py-2 flex gap-2 sticky top-16 z-30">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold flex-1 justify-center transition-all ${pathname === item.href
              ? "bg-primary/10 text-primary"
              : "text-on-surface-variant hover:bg-zinc-100"
              }`}
          >
            <span className="material-symbols-outlined text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        {children}
      </main>
    </div>
  );
}
