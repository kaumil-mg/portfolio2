"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] flex">
          {word.split("").map((char, j) => {
            // Estimate overall character index
            const start = (i * 5 + j) / (text.length || 1);
            const end = start + 1 / (text.length || 1);
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

            return (
              <span key={j} className="relative">
                <span className="invisible">{char}</span>
                <motion.span className="absolute left-0 top-0" style={{ opacity }}>
                  {char}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}
