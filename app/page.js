import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesList from './components/ServicesList';
import JobListings from './components/JobListings';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      <Navbar />
      
      <main>
        {/* Sections Wrapper for Smooth Scroll */}
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <AboutUs />
        </section>

        <section id="services">
          <ServicesList />
        </section>

        {/* Why Choose Us */}
        <section className="py-32 bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[140px] -z-10"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center reveal">
            <div className="relative">
              <div className="relative z-10 group">
                <img
                  alt="diverse team of professionals collaborating"
                  className="rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(30,58,138,0.2)] grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-[1.02]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY6mVX-twgUabd1dvrYIWGqFm1sLN3leEUEopbeiIeUV6oUcRVubCflolo1bg-CNbrqQ8gfCAc5CtX-wvTv0wOmnPWNFslb8NAQSkZMrsofPwObNflbqwaJzi_Jnb8_6pYZEAWCv9ivPaSFSA7IjVlEiXIb_g2GKjw05wMx7_r0gApIackry3yzTXdUQWIDOpw2hZVHSjTQA3uM4KIMHpaxM-GTkIO_QnHi1oHxhlget3_8l4EXaYY8Z6VvkdPU3bGFo5K5UV_LzOg"
                />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-[2.5rem] -z-10 border border-primary/10 animate-pulse"></div>
              </div>
            </div>
            <div className="relative lg:pl-12">
              <h2 className="font-headline text-4xl lg:text-7xl font-extrabold text-on-surface mb-10 leading-tight">The <span className="text-primary italic">Takeinteki</span> Edge</h2>
              <p className="text-xl lg:text-2xl text-on-surface-variant mb-16 max-w-xl leading-relaxed font-medium opacity-80">
                Delivering reliable, efficient, and scalable workforce solutions that give your business a <span className="text-primary font-black">competitive advantage</span>.
              </p>
              <div className="flex flex-col gap-14">
                {[
                  { icon: "speed", title: "Fast Hiring", desc: "Accelerating hiring through structured sourcing and rigorous screening protocols." },
                  { icon: "verified_user", title: "Verified Experts", desc: "Our multi-level evaluation ensures every professional is vetted for both technical skill and professional excellence." },
                  { icon: "star", title: "Specialized Depth", desc: "Deep expertise across recruitment, staffing, BPO services, and workforce solutions." }
                ].map((item, idx) => (
                  <div key={idx} className="group flex gap-8">
                    <div className="flex-shrink-0 w-20 h-20 rounded-[1.5rem] bg-blue-50 flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-xl shadow-blue-900/5">
                      <span className="material-symbols-outlined text-4xl group-hover:text-white transition-colors">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-2xl lg:text-3xl font-black text-on-surface mb-4 group-hover:text-primary transition-colors tracking-tight">{item.title}</h4>
                      <p className="text-base lg:text-lg text-on-surface-variant leading-relaxed font-medium opacity-70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="jobs">
          <JobListings />
        </section>

        {/* Final Call to Action */}
        <section className="py-48 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 reveal">
            <div className="relative overflow-hidden rounded-[3rem] lg:rounded-[4rem] bg-gradient-to-br from-zinc-950 via-[#1E3A8A] to-primary p-8 sm:p-12 lg:p-20 shadow-[0_80px_160px_-40px_rgba(30,58,138,0.5)] border border-white/10 group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.2),_transparent)] transition-all group-hover:opacity-100 opacity-60"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
                <div className="w-full lg:flex-1 lg:min-w-0 text-center lg:text-left">
                  <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black mb-10 text-white leading-[0.95] tracking-tighter uppercase italic">
                    Ready to Grow Your <span className="text-blue-300">Business?</span>
                  </h2>
                  <p className="text-blue-100/60 text-xl lg:text-2xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    From talent acquisition and staffing to BPO services and workforce management, we help organizations build high-performing teams and achieve sustainable growth. Partner with us to find the right talent at the right time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                     <a href="tel:+919597392500" className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-3xl border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/20 transition-all">
                        <span className="material-symbols-outlined text-3xl text-blue-300">call</span>
                        <span className="text-white font-black text-lg lg:text-xl whitespace-nowrap">+91 9597392500</span>
                     </a>
                     <a href="https://wa.me/919597392500" className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-3xl border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/20 transition-all">
                        <span className="material-symbols-outlined text-3xl text-green-400">chat</span>
                        <span className="text-white font-black text-lg lg:text-xl whitespace-nowrap">WhatsApp Chat</span>
                     </a>
                  </div>
                </div>
                <div className="w-full lg:w-[360px] lg:flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 hover:border-white/40 transition-all hover:bg-white/10 group/card relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                    <h4 className="text-2xl lg:text-3xl font-black mb-5 text-white uppercase italic tracking-tight">Hire With Confidence</h4>
                    <p className="text-blue-200/70 text-base lg:text-lg mb-8 leading-relaxed font-medium">Access a network of qualified professionals and recruitment experts dedicated to helping your business succeed.</p>
                    <a href="/contact" className="w-full bg-white text-primary font-black py-5 px-6 rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap">
                       Connect With Us <span className="material-symbols-outlined !text-primary text-2xl">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
