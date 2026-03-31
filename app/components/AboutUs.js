"use client";

export default function AboutUs() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block border-l-4 border-primary pl-4">Our Story</span>
            <h2 className="font-headline text-4xl lg:text-6xl font-extrabold text-on-surface mb-8 leading-tight">
              Get to <span className="text-primary">K N O W</span> US
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg lg:text-xl leading-relaxed opacity-90">
              <p>
                Takeinteki was founded in 2024 with a passion for technology and a commitment to digital security. 
                Our team combines creative vision with technical expertise to develop custom software tailored to your unique requirements.
              </p>
              <p>
                By adhering to industry best practices and leveraging the latest technologies, we deliver exceptional, future-ready solutions. 
                Our experts are well-versed in established security frameworks like <span className="text-primary font-bold">OWASP Top 10</span>, 
                <span className="text-primary font-bold"> SANS Top 25</span>, <span className="text-primary font-bold"> MITRE ATT&CK®</span> and more, 
                ensuring that your software is protected against all threats.
              </p>
              <p>
                Today, Takeinteki stands as a trusted partner, offering a comprehensive suite of cybersecurity and software development solutions. 
                We&apos;re dedicated to safeguarding your digital assets and delivering innovative solutions that drive business growth.
              </p>
            </div>
          </div>

          {/* Cards / Visuals */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-gradient-to-br from-[#1E3A8A] via-[#1e40af] to-[#3B82F6] p-10 rounded-[2.5rem] shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent)]"></div>
              <span className="material-symbols-outlined text-5xl text-blue-300/40 mb-6 block group-hover:scale-110 transition-transform">visibility</span>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-blue-100 text-lg leading-relaxed opacity-80">
                To empower organizations to navigate the digital landscape confidently through innovative technologies and effortless cybersecurity solutions.
              </p>
            </div>

            <div className="bg-surface-variant p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-xl group-hover:bg-primary/10 transition-all"></div>
              <span className="material-symbols-outlined text-5xl text-primary/20 mb-6 block group-hover:scale-110 transition-transform">handshake</span>
              <h3 className="text-2xl font-bold text-on-surface mb-4">Our Mission</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed opacity-80">
                We simplify the complexities of software development by bridging the gap between organizational vision and technology, delivering seamless, secure, and transformative solutions that align with business goals.
              </p>
            </div>
          </div>
        </div>

        {/* Client Trust Strip */}
        <div className="mt-24 pt-12 border-t border-zinc-100 flex flex-wrap justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <p className="w-full text-center lg:text-left lg:w-auto font-bold uppercase tracking-widest text-xs text-zinc-500">Security Excellence Frameworks</p>
           <div className="flex flex-wrap justify-center lg:justify-end gap-10 font-extrabold text-xl lg:text-2xl text-on-surface-variant">
              <span>OWASP</span>
              <span>SANS</span>
              <span>MITRE ATT&CK</span>
              <span>ISO 27001</span>
           </div>
        </div>
      </div>
    </section>
  );
}
