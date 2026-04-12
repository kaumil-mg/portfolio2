import RevealSection from "./RevealSection";

export default function HeroSection() {
  return (
    <RevealSection id="home" className="relative min-h-screen flex items-center px-8 pt-20 celestial-mesh overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-primary/20 text-primary text-xs font-headline uppercase tracking-widest hover:border-primary/50 hover:bg-primary/10 transition-colors duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for New Opportunities
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface leading-[0.9]">
            Kaumil <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary">Mistry</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Data Scientist with over 6+ years of experience in data analysis, machine learning, and web development. Specializing in AI, predictive analytics, and end-to-end data pipelines.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary-container to-secondary text-on-primary-container font-headline font-bold text-lg hover:shadow-[0_0_30px_rgba(0,241,253,0.3)] transition-all duration-300 active:scale-95 text-center">
              Contact Me
            </a>
            <a href="#projects" className="inline-block px-8 py-4 rounded-full border border-primary/30 text-primary font-headline font-bold text-lg hover:bg-primary/5 transition-all duration-300 active:scale-95 text-center">
              View Work
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative hidden lg:block">
          {/* Abstract Data Viz Decoration */}
          <div className="absolute -inset-20 bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="relative grid grid-cols-2 gap-4 p-8 bg-surface-container-low/40 backdrop-blur-md rounded-2xl border border-outline-variant/10">
            <div className="h-32 bg-surface-container-high rounded-xl flex flex-col justify-end p-4 border-t border-primary/20">
              <div className="h-2/3 w-full bg-primary/20 rounded-t-sm"></div>
              <div className="text-[10px] text-primary mt-2 font-headline uppercase">Data Science</div>
            </div>
            <div className="h-32 bg-surface-container-high rounded-xl flex flex-col justify-end p-4 border-t border-tertiary/20">
              <div className="h-1/2 w-full bg-tertiary/20 rounded-t-sm"></div>
              <div className="text-[10px] text-tertiary mt-2 font-headline uppercase">Machine Learning</div>
            </div>
            <div className="col-span-2 h-20 bg-surface-container-highest/50 rounded-xl flex items-center justify-between px-4 border-t border-secondary/20">
              <div className="flex gap-1 items-end h-8">
                <div className="w-1 bg-secondary h-4"></div>
                <div className="w-1 bg-secondary h-6"></div>
                <div className="w-1 bg-secondary h-3"></div>
                <div className="w-1 bg-secondary h-8"></div>
                <div className="w-1 bg-secondary h-5"></div>
              </div>
              <div className="text-right">
                <div className="text-xs text-on-surface-variant font-label">Analytics Model</div>
                <div className="text-lg font-headline font-bold text-secondary">99.9%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
