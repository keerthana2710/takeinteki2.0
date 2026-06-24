"use client";

import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/takeinteki_careers?igsh=cmpsNDZmNzIwanVw",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/takeinteki-info-solutions/",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    { icon: "alternate_email", href: "mailto:info@takeinteki.com", name: "Email" },
    { icon: "call", href: "tel:+919597392500", name: "Call" },
  ];

  return (
    <footer className="relative bg-zinc-950 w-full pt-32 pb-16 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="col-span-1">
          <Link href="/" className="inline-block mb-12 group transition-all">
            <img
              alt="TEKI group"
              className="h-11 brightness-0 invert group-hover:scale-105 transition-transform"
              src="/navbar_logo.png"
            />
          </Link>
          <p className="text-zinc-500 text-lg leading-relaxed mb-12 max-w-sm opacity-80">
            Strategic Human Capital Partners. Elevating business growth through innovative technologies and elite recruitment precision.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-primary transition-all duration-500 hover:-translate-y-2 shadow-2xl border border-white/5"
                href={social.href}
                title={social.name}
                aria-label={social.name}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {social.svg ? social.svg : <span className="material-symbols-outlined !text-inherit text-3xl">{social.icon}</span>}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-black text-white mb-12 uppercase tracking-[0.2em] text-xs border-l-4 border-primary pl-6">Explore</h4>
          <ul className="space-y-6 text-base text-zinc-400 font-bold">
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="/"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Home</Link></li>
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="/about"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Get to Know Us</Link></li>
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="/services"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Our Expertise</Link></li>
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="/jobs"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Active Roles</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-white mb-12 uppercase tracking-[0.2em] text-xs border-l-4 border-primary pl-6">Legal</h4>
          <ul className="space-y-6 text-base text-zinc-400 font-bold">
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="#"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Privacy Protocol</Link></li>
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="#"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Engagement Terms</Link></li>
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="https://www.linkedin.com/company/takeinteki-info-solutions/" target="_blank"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Connect LinkedIn</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-white mb-12 uppercase tracking-[0.2em] text-xs border-l-4 border-primary pl-6">Global Ops</h4>
          <div className="mb-12">
            <p className="text-lg font-bold text-white mb-2">Corporate HQ</p>
            <p className="text-sm text-zinc-500 leading-relaxed font-medium opacity-80">
              11, 48th St, Sarvamangala Colony, Manthope Colony, Ashok Nagar, Chennai, Tamil Nadu 600083
            </p>
          </div>
          <div className="flex items-center gap-6 text-white group cursor-pointer p-6 bg-white/5 rounded-[2rem] hover:bg-primary transition-all duration-500 border border-white/5">
            <span className="material-symbols-outlined text-primary group-hover:text-white text-4xl transform transition-transform group-hover:scale-110">call</span>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-blue-100 mb-1">Direct Line</span>
              <a href="tel:+919597392500" className="text-xl font-black">+91 9597392500</a>
              <a href="tel:+919080223412" className="text-xl font-black">+91 90802 23412</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        <p className="text-zinc-600 text-xs leading-relaxed uppercase tracking-[0.2em] font-black text-center md:text-left">
          © 2026 Takeinteki Info Solutions. Engineered for Excellence.
        </p>
        <div className="flex gap-12 text-[10px] font-black text-zinc-600 uppercase tracking-widest">
          {['Governance', 'Encryption', 'Cookies'].map((item) => (
            <span key={item} className="hover:text-primary cursor-pointer transition-all duration-300">{item}</span>
          ))}
        </div>
      </div>
      {/* Decorative Gradient Object */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[160px] pointer-events-none opacity-40"></div>
    </footer>
  );
}
