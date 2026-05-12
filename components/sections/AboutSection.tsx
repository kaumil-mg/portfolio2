"use client";

import React from "react";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import AnimatedText from "../ui/AnimatedText";
import ContactButton from "../ui/ContactButton";

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      
      {/* Decorative Corners */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] hidden sm:block">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon" width={210} height={210} unoptimized />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] hidden sm:block">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D object" width={180} height={180} unoptimized />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] hidden sm:block">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego" width={210} height={210} unoptimized />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] hidden sm:block">
        <Image src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" width={220} height={220} unoptimized />
      </FadeIn>

      <div className="flex flex-col items-center text-center z-10 max-w-4xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-14 md:mb-16">
            About me
          </h2>
        </FadeIn>

        <div className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] mb-16 sm:mb-20 md:mb-24 justify-center">
          <AnimatedText text="With more than six years of experience in data science, I focus on predictive analytics, machine learning, and end-to-end data pipelines. I truly enjoy building intelligent solutions that help businesses optimize operations and present their best insights. Let's build something incredible together!" />
        </div>

        <FadeIn delay={0.2} y={30}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
