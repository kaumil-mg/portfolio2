"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "../ui/LiveProjectButton";
import FadeIn from "../ui/FadeIn";

const projects = [
  {
    number: "01",
    category: "Gen AI / Python",
    title: "Gen AI Application",
    description: "A comprehensive AI application leveraging machine learning models for deep analysis, automation, and intelligent insights.",
    images: {
      leftTop: "/genai_detail1.png",
      leftBottom: "/genai_detail2.png",
      right: "/genai_main.png"
    },
    link: "https://github.com/Kaumil-mistry"
  },
  {
    number: "02",
    category: "Machine Learning",
    title: "Score Card Modelling",
    description: "Advanced predictive modelling using scorecards for accurate risk assessment, customer evaluation, and financial forecasting.",
    images: {
      leftTop: "/scorecard_detail1.png",
      leftBottom: "/scorecard_detail2.png",
      right: "/scorecard_main.png"
    },
    link: "https://github.com/Kaumil-mistry"
  },
  {
    number: "03",
    category: "Data Engineering",
    title: "Data Visualization Engine",
    description: "A highly scalable visualization engine for big data, providing real-time interactive dashboards and actionable analytics.",
    images: {
      leftTop: "/dataviz_detail1.png",
      leftBottom: "/dataviz_detail2.png",
      right: "/dataviz_main.png"
    },
    link: "https://linktr.ee/Kaumilmg"
  },
  {
    number: "04",
    category: "AI SaaS",
    title: "Image Enhancer",
    description: "A premium local-first AI platform utilizing advanced upscaling and face restoration models to dramatically improve image quality.",
    images: {
      leftTop: "/enhancer_detail1.png",
      leftBottom: "/enhancer_detail2.png",
      right: "/enhancer_main.png"
    },
    link: "/imageenhancer"
  }
];

const Card = ({ project, index, progress, range, targetScale }: any) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-screen flex items-start justify-center sticky top-10 md:top-20 w-full pt-[5vh] sm:pt-[10vh]">
      <motion.a
        href={project.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        style={{ scale, top: `calc(${index * 20}px)` }}
        className="relative flex flex-col gap-6 md:gap-10 w-full max-w-7xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top cursor-pointer group hover:border-[#D7E2EA]/50 transition-colors duration-300 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="font-black text-[#D7E2EA] text-[clamp(2rem,6vw,80px)] leading-none">{project.number}</span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">{project.category}</span>
              <h3 className="font-medium text-[#D7E2EA] text-[clamp(1.5rem,3vw,3rem)] uppercase leading-tight">{project.title}</h3>
              {project.description && (
                <p className="text-[#D7E2EA]/70 mt-2 text-sm sm:text-base max-w-xl font-light leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>
          </div>
          <span className="hidden sm:flex shrink-0 inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 text-sm group-hover:bg-[#D7E2EA]/10 transition-colors duration-300">
            Live Project
          </span>
        </div>

        {/* Bottom Row (Images Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 flex-1 h-full min-h-[30vh] md:min-h-[40vh]">
          {/* Left Column (40%) */}
          <div className="md:col-span-5 hidden sm:flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div className="relative w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden" style={{ height: "clamp(130px, 16vw, 230px)" }}>
              <Image src={project.images.leftTop} alt="Detail 1" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative w-full flex-1 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden min-h-[160px]" style={{ height: "clamp(160px, 22vw, 340px)" }}>
              <Image src={project.images.leftBottom} alt="Detail 2" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          {/* Right Column (60%) */}
          <div className="md:col-span-7 relative w-full h-[200px] sm:h-[300px] md:h-auto rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
            <Image src={project.images.right} alt="Main showcase" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
        
        <div className="sm:hidden w-full flex justify-center mt-2">
          <span className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 text-sm group-hover:bg-[#D7E2EA]/10 transition-colors duration-300">
            Live Project
          </span>
        </div>
      </motion.a>
    </div>
  );
};

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-4 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28 text-center">
        <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative w-full max-w-7xl mx-auto pb-[10vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <Card 
              key={i}
              project={project} 
              index={i} 
              progress={scrollYProgress} 
              range={[i * (1/projects.length), 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}
