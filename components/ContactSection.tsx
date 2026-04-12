"use client";
import { useState } from "react";
import RevealSection from "./RevealSection";

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
    <RevealSection id="contact" className="py-24 px-8 bg-surface">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold tracking-tighter mb-4 text-on-surface">
            Initialize Contact
          </h2>
          <p className="text-on-surface-variant">
            Ready to architect your next digital breakthrough? Leave a message below.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">
                Identity
              </label>
              <input
                className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-4 px-2 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none"
                placeholder="Your Name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={status === "loading"}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">
                Digital Address
              </label>
              <input
                className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-4 px-2 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none"
                placeholder="email@example.com"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={status === "loading"}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">
              The Brief
            </label>
            <textarea
              className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-4 px-2 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none"
              placeholder="How can we help you?"
              rows={4}
              required
              value={formData.brief}
              onChange={(e) => setFormData({...formData, brief: e.target.value})}
              disabled={status === "loading"}
            ></textarea>
          </div>
          <div className="flex flex-col items-center pt-8 gap-4">
            <button
              className="group relative px-12 py-4 bg-gradient-to-r from-primary-container to-secondary text-on-primary-container rounded-full font-headline font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,139,163,0.3)] dark:hover:shadow-[0_0_30px_rgba(0,241,253,0.3)] hover:-translate-y-1 active:scale-95 shadow-lg disabled:opacity-50"
              type="submit"
              disabled={status === "loading"}
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === "loading" ? "Transmitting..." : "Transmit Request"}
                <span className="material-symbols-outlined text-sm">send</span>
              </span>
            </button>
            {status === "success" && <p className="text-primary text-sm font-bold">Message received successfully!</p>}
            {status === "error" && <p className="text-error text-sm font-bold">Failed to transmit. Try again.</p>}
          </div>
        </form>
      </div>
    </RevealSection>
  );
}
