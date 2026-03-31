"use client";

export default function JobCard({ title, location, description, category, postedTime, salaryRange }) {
  return (
    <div className="bg-white p-8 lg:p-10 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-8">
        <span className="px-4 py-1.5 bg-blue-50 text-primary text-xs font-bold rounded-full uppercase tracking-widest border border-primary/10">
          {category}
        </span>
        <span className="text-on-surface-variant text-sm font-medium opacity-60">
          {postedTime}
        </span>
      </div>
      <h4 className="text-2xl lg:text-[28px] font-extrabold mb-4 text-on-surface group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-on-surface-variant text-base mb-8 flex items-center gap-2">
        <span className="material-symbols-outlined text-xl !text-primary">location_on</span>
        {location}
      </p>
      <p className="text-on-surface-variant leading-relaxed text-base mb-10 flex-grow opacity-80">
        {description}
      </p>
      <div className="mt-auto flex items-center justify-between pt-8 border-t border-zinc-100/50">
        <span className="font-extrabold text-2xl text-primary font-headline">
          {salaryRange} <span className="text-xs font-normal text-on-surface-variant uppercase tracking-widest block lg:inline-block">/ PA</span>
        </span>
        <a
          href="/contact"
          className="px-6 py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-secondary transition-all hover:shadow-lg active:scale-[0.98]"
        >
          Apply
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </a>
      </div>
    </div>
  );
}
