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
          <ServicesList exclude={["Hiring Partners"]} />
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
                  { icon: "speed", title: "Fast Hiring", desc: "Accelerating technical hiring through structured sourcing and deep-security screening protocols." },
                  { icon: "verified_user", title: "Verified Experts", desc: "Our multi-level evaluation ensures every professional is vetted for both technical skill and security mindset." },
                  { icon: "star", title: "Specialized Depth", desc: "Deep expertise across Cybersecurity, Cloud Infrastructure, and advanced software architecture." }
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

        {/* Life @ Takeinteki Section */}
        <section className="py-32 bg-gradient-to-b from-surface-variant to-white overflow-hidden relative">
           <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05),_transparent)] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 reveal relative z-10">
            <div className="flex flex-col items-center text-center mb-24">
              <h2 className="font-headline text-4xl lg:text-8xl font-black text-on-surface tracking-tighter uppercase mb-6">Life @ Takeinteki</h2>
              <p className="text-xl lg:text-3xl font-bold text-on-surface-variant max-w-4xl leading-relaxed opacity-60 italic">
                Building a workplace that values ironclad security, creative innovation, and human growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 h-auto lg:min-h-[800px]">
              <div className="lg:col-span-7 relative group rounded-[3.5rem] overflow-hidden shadow-2xl bg-zinc-200">
                <img
                  alt="Collaborative Culture"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1)"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl8JvbE0XhKePD_jiFKW36TMK8Pq6gDEnSD4RwePMArxVyk1FzJ3HiqBorHUTtqQWlmTqpayuzfqujiSAephvWAl_Sauwu4059Pp4D1b2beRFFECyXNW2AynXOC1rOgGHQukbU0yUBQtK23YT0oP6vHkxHqBVfWQuR5mCVYtQRdMNnokvwlk8dYqs7mvrOv6Jrp40T6CO-rlwe3ZgLe-b1p54k0W0_JqTO1s56AqZLIBR0f-ELhITrawss0mySo7lixy4MslMpx3Mv"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-full p-16 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent">
                  <p className="text-white text-4xl lg:text-5xl font-black tracking-tighter uppercase italic">Collaborative Culture</p>
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-rows-3 gap-10">
                {[
                  { title: "Team Synergy", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlunjNQsPEAw-uB7WbUyLiyYEf1vkvE4l5x6gAKqfcoFQacXVRrMw4njZXfHjJYCPeSRc34uu9cCCYvO-Zc2MXRPd_fpMLmyyaKkQ2VIWq4FasQf3iCIBwrsfjucN1d1XoggLZ1mgzFhTs6ANs8Smh_Jw3Y_544u0RPFte5n-mf1xP8LhEdHMKHqxbYG8oHqr6g7G9YfUvrRLpGKOdbvnVw9zI-7Nbki4VCEhRKPsg46_sbAMdzy2jn6B3o6f_rJ18uB_XnFw-VgZj" },
                  { title: "R&D Excellence", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg1RqiB94YLh8lxe1hcz9SpebR2omN5FNWgAcb3IKDXUlVu7G37x7D4vWoI3oky5jOjU3atjp1eTReqBGCZQm1RN0DmTOccC0ju5NlUKot_p8Pp1Xp3qY3q69Jxbu2gDof5DPXUKsH2AZqSj9eaAtsrHifqQQei4pvpyUsSuccayWd33kMttS2vBH0R24fqGaRW67AgxHpFhQKqMEh7910BGb-JpnB9aovID1vzTgVoogIO5VsF1cVH0ELerE21CHEdYFc0FK8rb43" },
                  { title: "Secure Future", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9F2_H85gSiZA7DStRAS6Kj0xajIRzvDUj5guTPSA-cp_A6o35KjGiWb-ZQOILjXqDItihpvtD0McRdyMl8ULqo2DGD8vo77jwZtOjRX8DBfRjhyFT6JgF2EU-Ztf1tqJrbLCsW-wz7mMA1aL8wnS0zl-I54KKD-DnT0_2WJJTIcLWF6lyCgW1lKARFD6xiqRZRRM0ztJ27yzKzs--sdmWSk41GuT3EYypme3cqPRnmfJJZQVSm344tm9LjayFmfJpbc7jSiU44sMU" }
                ].map((item, id) => (
                  <div key={id} className="relative group rounded-[2.5rem] overflow-hidden shadow-xl bg-zinc-200 min-h-[220px]">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1)"
                      src={item.img}
                    />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-all duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-primary/90 to-transparent">
                      <p className="text-white text-2xl font-black uppercase tracking-tight italic">{item.title}</p>
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
            <div className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-zinc-950 via-[#1E3A8A] to-primary p-16 lg:p-32 shadow-[0_80px_160px_-40px_rgba(30,58,138,0.5)] border border-white/10 group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.2),_transparent)] transition-all group-hover:opacity-100 opacity-60"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-24">
                <div className="max-w-4xl text-center lg:text-left">
                  <h2 className="font-headline text-5xl lg:text-9xl font-black mb-12 text-white leading-[0.95] tracking-tighter uppercase italic">
                    Ready to <span className="text-blue-300">Scale?</span>
                  </h2>
                  <p className="text-blue-100/60 text-2xl lg:text-3xl mb-16 font-medium leading-relaxed max-w-2xl">
                    Whether you are architecting a global core or seeking your next breakthrough, we are your strategic operational partner.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 mb-12">
                     <a href="tel:+919080223412" className="flex items-center gap-4 bg-white/10 backdrop-blur-3xl border border-white/20 px-8 py-4 rounded-2xl group/btn hover:bg-white/20 transition-all">
                        <span className="material-symbols-outlined text-3xl text-blue-300">call</span>
                        <span className="text-white font-black text-xl">+91 9080223412</span>
                     </a>
                     <a href="https://wa.me/919080223412" className="flex items-center gap-4 bg-white/10 backdrop-blur-3xl border border-white/20 px-8 py-4 rounded-2xl group/btn hover:bg-white/20 transition-all">
                        <span className="material-symbols-outlined text-3xl text-green-400">chat</span>
                        <span className="text-white font-black text-xl">WhatsApp Chat</span>
                     </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-10 w-full lg:w-[450px]">
                  <div className="bg-white/5 backdrop-blur-2xl p-12 rounded-[3.5rem] border border-white/10 hover:border-white/40 transition-all hover:bg-white/10 group/card relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                    <h4 className="text-3xl font-black mb-6 text-white uppercase italic tracking-tight">Looking to Hire?</h4>
                    <p className="text-blue-200/60 text-lg mb-10 leading-relaxed font-medium">Scale your technical workforce with high-performing talent curated by security experts.</p>
                    <a href="/contact" className="w-full bg-white text-primary font-black py-6 rounded-[2rem] flex items-center justify-center gap-4 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all group-hover/card:-translate-y-2">
                       Connect Now <span className="material-symbols-outlined !text-primary text-2xl">arrow_forward</span>
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
