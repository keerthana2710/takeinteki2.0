"use client";

export default function AboutUs() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 reveal">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block border-l-4 border-primary pl-4">Our Story</span>
            <h2 className="font-headline text-4xl lg:text-6xl font-extrabold text-on-surface leading-tight">
              Get to <span className="text-primary">K N O W</span> US
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-6 text-on-surface-variant text-lg lg:text-xl leading-relaxed opacity-90">
              <p>
                Takeinteki Info Solutions Pvt Ltd was founded in 2024 as a recruitment consultancy and hiring partner with the goal of connecting talented professionals with leading organizations. Over time, the company expanded its services to include staffing solutions, talent acquisition, and BPO services, helping businesses improve workforce efficiency and operational performance.
              </p>
              <p>
                As part of the larger <span className="text-primary font-bold">TEKIgroup</span> vision, the organization has diversified into multiple business sectors. This includes <span className="text-primary font-bold">Tekis Interior &amp; Construction</span>, a company focused on construction, interior design, and infrastructure solutions.
              </p>
              <p>
                TEKIgroup is also investing in technology-driven innovation through products currently under development:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold leading-relaxed">•</span>
                  <span><span className="font-bold text-on-surface">Yutko</span> – A Customer Relationship Management (CRM) platform designed to streamline business operations and customer engagement.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold leading-relaxed">•</span>
                  <span><span className="font-bold text-on-surface">JobXT</span> – A next-generation job and career platform inspired by leading recruitment and professional networking platforms, connecting employers with job seekers.</span>
                </li>
              </ul>
              <p>
                Today, Takeinteki Info Solutions Pvt Ltd continues to grow as a trusted recruitment, staffing, and BPO partner while contributing to the broader vision of TEKIgroup across recruitment, construction, and technology sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision & Our Mission */}
        <div className="mt-20 lg:mt-28">
          <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Our Purpose</span>
            <h3 className="font-headline text-3xl lg:text-5xl font-extrabold text-on-surface">Vision &amp; Mission</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#1E3A8A] via-[#1e40af] to-[#3B82F6] p-10 lg:p-12 rounded-[2.5rem] shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent)]"></div>
              <span className="material-symbols-outlined text-5xl text-blue-300/50 mb-6 block group-hover:scale-110 transition-transform">visibility</span>
              <h4 className="text-2xl lg:text-3xl font-bold text-white mb-5">Our Vision</h4>
              <p className="text-blue-100 text-lg lg:text-xl leading-relaxed opacity-90">
                To build TEKIgroup into a trusted and diversified business ecosystem that empowers organizations and individuals through recruitment, BPO services, construction solutions, and innovative technology products.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-surface-variant p-10 lg:p-12 rounded-[2.5rem] border border-zinc-100 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-all"></div>
              <span className="material-symbols-outlined text-5xl text-primary/30 mb-6 block group-hover:scale-110 transition-transform">handshake</span>
              <h4 className="text-2xl lg:text-3xl font-bold text-on-surface mb-5">Our Mission</h4>
              <ul className="text-on-surface-variant text-base lg:text-lg leading-relaxed opacity-90 space-y-4">
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span><span>Deliver reliable recruitment, staffing, and BPO solutions to businesses.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span><span>Connect talented professionals with meaningful career opportunities.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span><span>Provide quality construction and interior solutions through Tekis Interior &amp; Construction.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span><span>Develop innovative technology products that simplify business operations and talent acquisition.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span><span>Create long-term value for clients, employees, partners, and communities through excellence, integrity, and continuous innovation.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
