"use client";

import React from "react";
import FadeIn from "../ui/FadeIn";

const services = [
  {
    title: "Data Science & Analytics",
    description: "Comprehensive data analysis, interactive dashboards with Power BI/Tableau, and uncovering hidden patterns to drive strategic business decisions."
  },
  {
    title: "Machine Learning",
    description: "Developing robust predictive models, clustering algorithms, and risk assessment systems using Scikit-learn, XGBoost, and Python."
  },
  {
    title: "Generative AI",
    description: "Building scalable AI applications leveraging large language models via Ollama, Gemini API, and OpenAI with advanced RAG workflows."
  },
  {
    title: "Data Engineering",
    description: "Designing and optimizing robust ETL/ELT pipelines, data lakes, and warehouses using AWS Glue, Databricks, and Snowflake."
  },
  {
    title: "Web Development",
    description: "Creating clean, modern, and highly interactive data visualization interfaces and dashboards using React, Next.js, and modern CSS."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 -mt-10 sm:-mt-12 md:-mt-14">
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30} className="w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-0 gap-6 md:gap-12 lg:gap-24 text-[#0C0C0C]">
              <div className="font-black text-[clamp(3rem,10vw,140px)] leading-none shrink-0 w-24 sm:w-32 md:w-48">
                0{i + 1}
              </div>
              <div className="flex flex-col gap-2 md:gap-4 flex-1">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] tracking-wide leading-tight">
                  {service.title}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
