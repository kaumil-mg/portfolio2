"use client";

import React from "react";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import Magnet from "../ui/Magnet";
import ContactButton from "../ui/ContactButton";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip pt-6 md:pt-8 px-6 md:px-10">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="flex justify-between items-center w-full uppercase tracking-wider font-medium text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
          <a href="#services" className="hover:opacity-70 transition-opacity duration-200">Services</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center items-center w-full mt-6 sm:mt-4 md:-mt-5 z-20 relative pointer-events-none px-4">
        <FadeIn delay={0.15} y={40} className="w-full text-center flex justify-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[11.5vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] py-2">
            hi, i&apos;m kaumil
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait (Absolute) */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <Magnet padding={150} strength={3}>
          <div className="relative w-full aspect-square">
            <Image
              src="/happy_boy_transparent.png"
              alt="Happy Hero Portrait"
              fill
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 440px, 520px"
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)]">
            a data scientist driven by crafting striking and unforgettable AI projects
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
