"use client";

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 lg:p-10 rounded-3xl border border-zinc-100 shadow-sm service-card-hover hover:-translate-y-2 group flex flex-col h-full transition-all duration-500">
      <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-300">
        <span className="material-symbols-outlined text-4xl group-hover:text-white transition-colors">
          {icon}
        </span>
      </div>
      <h3 className="font-headline text-2xl lg:text-3xl font-extrabold mb-6 text-on-surface group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed text-lg mb-10 flex-grow">
        {description}
      </p>
      <div className="mt-auto">
        <a className="text-primary font-bold flex items-center gap-2 group/link text-lg hover:text-secondary transition-colors" href="/contact">
          Get Started
          <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}
