"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1e40af] to-[#3B82F6] py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-blue-400/20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[5%] left-[0%] w-[50%] h-[60%] bg-blue-900/40 rounded-full blur-[120px]"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 reveal">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-headline text-5xl lg:text-7xl xl:text-[88px] font-extrabold tracking-tight text-white leading-tight mb-8">
            Empowering <span className="text-blue-300 italic ring-offset-4 ring-offset-[#1E3A8A] ring-2 ring-white/20 px-2 rounded-xl">Talent</span> For Your Success
          </h1>
          <p className="text-lg lg:text-2xl text-blue-100 max-w-xl mb-12 leading-relaxed font-light">
            Connecting world-class organizations with elite professionals through high-precision recruitment solutions.
          </p>
          <div className="flex flex-wrap gap-6 mt-2 items-center">
            <button className="bg-white text-[#1E3A8A] px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-50 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center gap-3">
              Get Started
              <span className="material-symbols-outlined text-xl !text-primary">arrow_forward</span>
            </button>
            <button className="bg-transparent text-white border-2 border-white/30 backdrop-blur-sm px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all active:scale-[0.98]">
              Explore Services
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative animate-hero-logo flex items-center justify-center scale-90 lg:scale-100">
            <div className="absolute inset-0 bg-blue-400/20 blur-[120px] rounded-full scale-150"></div>
            <img
              alt="Takeintaki Logo"
              className="w-full max-w-lg h-auto object-contain logo-halo drop-shadow-[0_35px_60px_rgba(0,0,0,0.4)] brightness-110"
              src="/hero_banner.png"
            />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/20 blur-3xl rounded-[100%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
