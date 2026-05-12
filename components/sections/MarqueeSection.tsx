"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const images = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const row1 = [...images.slice(0, 11), ...images.slice(0, 11), ...images.slice(0, 11)];
const row2 = [...images.slice(11), ...images.slice(11), ...images.slice(11)];

export default function MarqueeSection() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate offset based on scroll position relative to the viewport
      const newOffset = (window.innerHeight - rect.top) * 0.3;
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT */}
        <div 
          className="flex gap-3"
          style={{ 
            transform: `translate3d(${offset - 400}px, 0, 0)`,
            willChange: "transform"
          }}
        >
          {row1.map((src, idx) => (
            <div key={`r1-${idx}`} className="relative w-[300px] h-[200px] sm:w-[360px] sm:h-[230px] md:w-[420px] md:h-[270px] shrink-0 rounded-2xl overflow-hidden">
              <Image src={src} alt={`Work ${idx}`} fill sizes="(max-width: 768px) 300px, 420px" className="object-cover" unoptimized loading="lazy" />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT */}
        <div 
          className="flex gap-3"
          style={{ 
            transform: `translate3d(${-(offset - 200)}px, 0, 0)`,
            willChange: "transform"
          }}
        >
          {row2.map((src, idx) => (
            <div key={`r2-${idx}`} className="relative w-[300px] h-[200px] sm:w-[360px] sm:h-[230px] md:w-[420px] md:h-[270px] shrink-0 rounded-2xl overflow-hidden">
              <Image src={src} alt={`Work ${idx}`} fill className="object-cover" unoptimized loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
