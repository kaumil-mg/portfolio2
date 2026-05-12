"use client";

import React, { useState } from "react";
import FadeIn from "../ui/FadeIn";
import ContactButton from "../ui/ContactButton";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', brief: '' });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', brief: '' });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#0C0C0C] relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn delay={0} y={30} className="w-full text-center mb-16 sm:mb-20">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,120px)] leading-none tracking-tight mb-4">
            Initialize Contact
          </h2>
          <p className="text-[#D7E2EA]/60 font-light text-[clamp(1rem,1.5vw,1.2rem)] max-w-xl mx-auto">
            Ready to architect your next digital breakthrough? Leave a message below.
          </p>
        </FadeIn>

        <form className="w-full space-y-8 sm:space-y-12" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <FadeIn delay={0.1} y={20} className="w-full">
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60 ml-2">
                  Identity
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-[#D7E2EA]/20 focus:border-[#D7E2EA] transition-colors duration-300 py-3 sm:py-4 px-2 text-[#D7E2EA] text-lg sm:text-xl placeholder:text-[#D7E2EA]/20 focus:outline-none focus:ring-0 rounded-none"
                  placeholder="Your Name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={status === "loading"}
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={20} className="w-full">
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60 ml-2">
                  Digital Address
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-[#D7E2EA]/20 focus:border-[#D7E2EA] transition-colors duration-300 py-3 sm:py-4 px-2 text-[#D7E2EA] text-lg sm:text-xl placeholder:text-[#D7E2EA]/20 focus:outline-none focus:ring-0 rounded-none"
                  placeholder="email@example.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={status === "loading"}
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} y={20} className="w-full">
            <div className="space-y-3">
              <label className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60 ml-2">
                The Brief
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b-2 border-[#D7E2EA]/20 focus:border-[#D7E2EA] transition-colors duration-300 py-3 sm:py-4 px-2 text-[#D7E2EA] text-lg sm:text-xl placeholder:text-[#D7E2EA]/20 focus:outline-none focus:ring-0 rounded-none resize-none"
                placeholder="How can we help you?"
                rows={4}
                required
                value={formData.brief}
                onChange={(e) => setFormData({...formData, brief: e.target.value})}
                disabled={status === "loading"}
              ></textarea>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={20} className="flex flex-col items-center pt-4 sm:pt-8 gap-4 w-full">
            <ContactButton 
              type="submit" 
              disabled={status === "loading"} 
              label={status === "loading" ? "Transmitting..." : "Transmit Request"}
              className={status === "loading" ? "opacity-50 cursor-not-allowed" : ""}
            />
            {status === "success" && <p className="text-green-400 text-sm font-bold mt-4">Message received successfully!</p>}
            {status === "error" && <p className="text-red-400 text-sm font-bold mt-4">Failed to transmit. Try again.</p>}
          </FadeIn>
        </form>

        {/* Footer & Social Links */}
        <FadeIn delay={0.5} y={20} className="w-full mt-24 sm:mt-32 border-t border-[#D7E2EA]/10 pt-8 sm:pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#D7E2EA]/40 text-xs sm:text-sm uppercase tracking-widest">
            © {new Date().getFullYear()} Kaumil Mistry.
          </div>
          <div className="flex gap-6 sm:gap-10">
            <a href="mailto:hi@kaumil.com" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-xs sm:text-sm uppercase tracking-widest transition-colors duration-300">Email</a>
            <a href="https://github.com/Kaumilmg" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-xs sm:text-sm uppercase tracking-widest transition-colors duration-300">GitHub</a>
            <a href="https://www.linkedin.com/in/kaumilmg/" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] text-xs sm:text-sm uppercase tracking-widest transition-colors duration-300">LinkedIn</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
