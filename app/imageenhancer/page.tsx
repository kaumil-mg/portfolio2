import React from "react";
import FadeIn from "@/components/ui/FadeIn";
import BeforeAfterSlider from "@/components/imageenhancer/BeforeAfterSlider";
import UploadZone from "@/components/imageenhancer/UploadZone";

export default function ImageEnhancerPage() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-hidden pt-20 sm:pt-28 pb-32">
      
      {/* Navigation - simple back button */}
      <nav className="absolute top-0 w-full p-6 md:p-10 z-50">
        <a href="/" className="inline-flex items-center gap-2 text-[#D7E2EA]/60 hover:text-white transition-colors uppercase tracking-widest text-xs font-medium">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Portfolio
        </a>
      </nav>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mt-10 md:mt-16 mb-24">
          <FadeIn delay={0.1} y={30} className="max-w-4xl mx-auto">
            <h1 className="font-black hero-heading uppercase tracking-tight leading-[0.9] text-[clamp(2.5rem,8vw,100px)] mb-6">
              Enhance Images to Stunning 4K Quality
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} y={30} className="max-w-2xl mx-auto">
            <p className="text-[#D7E2EA]/60 text-lg md:text-xl font-light leading-relaxed mb-10">
              AI-powered image enhancement running locally. Preserve realistic textures, 
              restore faces, and upscale any product photo up to 4x resolution.
            </p>
          </FadeIn>
        </section>

        {/* Upload Zone */}
        <section className="mb-32 relative z-20">
          <FadeIn delay={0.3} y={20}>
            <UploadZone />
          </FadeIn>
        </section>

        {/* Before / After Showcase */}
        <section className="mb-32">
          <FadeIn delay={0.1} y={30} className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Interactive Preview</h2>
            <p className="text-[#D7E2EA]/50 mt-4 max-w-xl mx-auto">See the difference our local AI models can make. Drag the slider to compare.</p>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            {/* We use Unsplash placeholders for the demo slider until user provides their own */}
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1024&auto=format&fit=crop&blur=10"
              afterImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1024&auto=format&fit=crop"
            />
          </FadeIn>
        </section>

        {/* Features Grid */}
        <section className="mb-32 border-t border-[#D7E2EA]/10 pt-24">
          <FadeIn delay={0.1} y={30} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-center">Platform Capabilities</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.2} y={20} className="p-8 rounded-[30px] bg-[#1A1A1A] border border-[#D7E2EA]/5 hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">high_quality</span>
              <h3 className="text-xl font-bold mb-3">4x Upscaling</h3>
              <p className="text-[#D7E2EA]/60 leading-relaxed">Boost image resolution drastically while preventing blocky artifacts using ESRGAN.</p>
            </FadeIn>
            <FadeIn delay={0.3} y={20} className="p-8 rounded-[30px] bg-[#1A1A1A] border border-[#D7E2EA]/5 hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">face</span>
              <h3 className="text-xl font-bold mb-3">Face Restoration</h3>
              <p className="text-[#D7E2EA]/60 leading-relaxed">Recover blurred facial details seamlessly with optimized GFPGAN integration.</p>
            </FadeIn>
            <FadeIn delay={0.4} y={20} className="p-8 rounded-[30px] bg-[#1A1A1A] border border-[#D7E2EA]/5 hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">lock</span>
              <h3 className="text-xl font-bold mb-3">Local Privacy</h3>
              <p className="text-[#D7E2EA]/60 leading-relaxed">Zero third-party APIs. Your images are processed securely on your local compute.</p>
            </FadeIn>
          </div>
        </section>

      </div>
    </main>
  );
}
