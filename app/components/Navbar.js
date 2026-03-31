"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Jobs", href: "/jobs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || pathname !== "/"
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-zinc-100 py-3"
        : "bg-transparent py-6"
        }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center group">
          <img
            alt="Takeinteki"
            className={`h-14 w-auto object-contain transition-all duration-300 ${isScrolled || pathname !== "/" ? "" : ""}`}
            src="/navbar_logo.png"
          />
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden lg:flex items-center gap-10 font-bold uppercase tracking-widest text-xs ${isScrolled || pathname !== "/" ? "text-on-surface-variant" : "text-white"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-all relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className={`hidden sm:inline-flex px-8 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all active:scale-[0.98] ${isScrolled || pathname !== "/"
              ? "bg-primary text-white hover:bg-secondary shadow-xl shadow-primary/20"
              : "bg-white text-primary hover:bg-white/90 shadow-2xl"
              }`}
          >
            Login
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-xl transition-all focus:outline-none ${isScrolled || pathname !== "/" ? "text-on-surface hover:bg-zinc-100" : "text-white hover:bg-white/10"}`}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-zinc-950 transform transition-all duration-500 ease-[cubic-bezier(0.9,0,0.1,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full pt-32 px-10 gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black text-white hover:text-primary transition-all flex items-center justify-between group transform ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
              <span className="material-symbols-outlined text-5xl transform group-hover:translate-x-4 transition-transform text-white/20 group-hover:text-primary">
                arrow_forward
              </span>
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="mt-10 w-full py-6 text-xl font-black uppercase tracking-widest text-center text-zinc-950 bg-white rounded-2xl shadow-2xl active:scale-[0.95] transition-all"
          >
            Agent Portal
          </Link>
        </div>
      </div>
    </header>
  );
}
