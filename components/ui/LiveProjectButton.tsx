"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LiveProjectButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  label?: string;
  href?: string;
}

export default function LiveProjectButton({ className, label = "Live Project", href = "#", ...props }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]",
        "font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors duration-300",
        "px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base",
        className
      )}
      {...props}
    >
      {label}
    </a>
  );
}
