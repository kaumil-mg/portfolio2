"use client";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial state from local storage or document
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const isNowDark = html.classList.contains("dark");
    setIsDark(isNowDark);
    localStorage.setItem("theme", isNowDark ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-primary/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,242,254,0.05)] transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-8 h-16 w-full">
        <div className="text-xl font-bold tracking-tighter text-secondary font-headline hover:tracking-wide transition-all duration-500 cursor-default">
          KAUMIL<span className="text-primary">.MG</span>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight text-sm uppercase">
          <a className="text-primary border-b-2 border-primary pb-1" href="#home">
            Home
          </a>
          <a className="text-on-surface/70 hover:text-primary transition-all duration-300 hover:-translate-y-0.5" href="#skills">
            Skills
          </a>
          <a className="text-on-surface/70 hover:text-primary transition-all duration-300 hover:-translate-y-0.5" href="#experience">
            Experience
          </a>
          <a className="text-on-surface/70 hover:text-primary transition-all duration-300 hover:-translate-y-0.5" href="#about">
            About
          </a>
          <a className="text-on-surface/70 hover:text-primary transition-all duration-300 hover:-translate-y-0.5" href="#projects">
            Projects
          </a>
        </div>
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            aria-label="Toggle dark mode"
            className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant hover:text-primary focus:outline-none"
            onClick={toggleTheme}
          >
            {isDark ? (
              <span className="material-symbols-outlined block">light_mode</span>
            ) : (
              <span className="material-symbols-outlined block">dark_mode</span>
            )}
          </button>
          <a href="#contact" className="inline-block bg-gradient-to-r from-primary-container to-secondary text-on-primary-container px-6 py-2 rounded-full font-headline text-sm font-bold tracking-tight hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all duration-300 active:scale-95">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
