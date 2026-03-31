"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 reveal">
          <div className="flex flex-col mb-20 items-center lg:items-start text-center lg:text-left">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h1 className="font-headline text-5xl lg:text-[80px] font-extrabold text-on-surface mb-8 leading-tight">
              Let&apos;s Build the <span className="text-primary">Future</span> Together
            </h1>
            <p className="text-on-surface-variant text-xl lg:text-2xl leading-relaxed max-w-3xl opacity-80">
              Whether you are looking for your next career move or seeking elite talent, we are here to help you scale and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(30,58,138,0.1)] border border-zinc-100 p-8 lg:p-14 relative z-10">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-300"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    rows="6"
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-on-surface placeholder:text-zinc-300 resize-none"
                  ></textarea>
                </div>

                <button className="w-full lg:w-auto px-12 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl hover:bg-secondary hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  Send Message
                  <span className="material-symbols-outlined !text-white text-xl">send</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 lg:pl-10 space-y-12">
              <div>
                <h3 className="text-3xl font-extrabold text-on-surface mb-10 font-headline">Contact Information</h3>
                <div className="space-y-10">
                  <div className="flex gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl group-hover:text-white transition-colors">location_on</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest mb-2">Our Office</h4>
                      <p className="text-lg font-bold text-on-surface leading-snug">
                        Level 12, Tech Horizon Tower, Whitefield Main Rd, Bangalore - 560066, India
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl group-hover:text-white transition-colors">mail</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest mb-2">Email Us</h4>
                      <p className="text-lg font-bold text-on-surface leading-snug">info@takeinteki.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl group-hover:text-white transition-colors">call</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest mb-2">Call Us</h4>
                      <p className="text-lg font-bold text-on-surface leading-snug">+91 9080223412</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recruitment Policy Note */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-[2.5rem] border border-blue-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-all"></div>
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 tracking-tight">
                  <span className="material-symbols-outlined text-xl">info</span> Recruitment Policy
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed font-medium opacity-80 italic">
                  Takeinteki follows a strict inclusive recruitment policy. We do not charge candidates any fees for recruitment or placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
