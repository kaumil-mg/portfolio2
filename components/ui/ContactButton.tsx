"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
}

export default function ContactButton({ className, label = "Contact Me", href, ...props }: ContactButtonProps) {
  const commonClasses = cn(
    "rounded-full text-white font-medium uppercase tracking-widest outline-none inline-flex items-center justify-center text-center",
    "px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base",
    "transition-transform hover:scale-105 active:scale-95 duration-300",
    className
  );
  
  const commonStyles = {
    background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
    boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
    border: "2px solid white",
    outlineOffset: "-3px"
  };

  if (href) {
    return (
      <a href={href} className={commonClasses} style={commonStyles}>
        {label}
      </a>
    );
  }

  return (
    <button className={commonClasses} style={commonStyles} {...props}>
      {label}
    </button>
  );
}
