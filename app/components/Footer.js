"use client";

import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { icon: "public", href: "#", name: "Global" },
    { icon: "alternate_email", href: "mailto:info@takeinteki.com", name: "Email" },
    { icon: "contact_phone", href: "tel:+919080223412", name: "Call" },
    { icon: "chat", href: "https://wa.me/919080223412", name: "WhatsApp" }
  ];

  return (
    <footer className="relative bg-zinc-950 w-full pt-32 pb-16 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="col-span-1">
          <Link href="/" className="inline-block mb-12 group transition-all">
            <img
              alt="Takeinteki"
              className="h-12 brightness-0 invert group-hover:scale-105 transition-transform"
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
              >
                <span className="material-symbols-outlined !text-inherit text-3xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-black text-white mb-12 uppercase tracking-[0.2em] text-xs border-l-4 border-primary pl-6">Ecosystem</h4>
          <ul className="space-y-6 text-base text-zinc-400 font-bold">
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="/"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Home</Link></li>
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="/about"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>About Our Vision</Link></li>
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="/services"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Technical Services</Link></li>
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="/jobs"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Global Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-white mb-12 uppercase tracking-[0.2em] text-xs border-l-4 border-primary pl-6">Legal</h4>
          <ul className="space-y-6 text-base text-zinc-400 font-bold">
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="#"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Privacy Protocol</Link></li>
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="#"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Engagement Terms</Link></li>
            <li><Link className="hover:text-primary transition-all flex items-center gap-3 group" href="https://linkedin.com/company/takeinteki-info-solutions/" target="_blank"><span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-primary transition-all scale-0 group-hover:scale-100 duration-300"></span>Connect LinkedIn</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-white mb-12 uppercase tracking-[0.2em] text-xs border-l-4 border-primary pl-6">Global Ops</h4>
          <div className="mb-12">
            <p className="text-lg font-bold text-white mb-2">Corporate HQ</p>
            <p className="text-sm text-zinc-500 leading-relaxed font-medium opacity-80">
              Level 12, Tech Horizon Tower, Whitefield Main Rd, Bangalore - 560066, India
            </p>
          </div>
          <div className="flex items-center gap-6 text-white group cursor-pointer p-6 bg-white/5 rounded-[2rem] hover:bg-primary transition-all duration-500 border border-white/5">
            <span className="material-symbols-outlined text-primary group-hover:text-white text-4xl transform transition-transform group-hover:scale-110">call</span>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-blue-100 mb-1">Direct Line</span>
              <a href="tel:+919080223412" className="text-xl font-black">+91 9080223412</a>
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
