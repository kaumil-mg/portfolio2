"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, className }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={className || "relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-[40px] overflow-hidden cursor-ew-resize select-none border border-[#D7E2EA]/20 bg-[#1A1A1A]"}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={beforeImage} 
          alt="Before Enhancement" 
          fill 
          className="object-contain"
          unoptimized
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white/80 text-xs uppercase tracking-widest font-medium z-10">
          Original
        </div>
      </div>

      {/* After Image (Foreground/Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src={afterImage} 
          alt="After Enhancement" 
          fill 
          className="object-contain"
          unoptimized
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <div className="absolute top-4 right-4 bg-[#7621B0]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#D7E2EA]/30 text-white text-xs uppercase tracking-widest font-medium z-10">
          Enhanced (4x)
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center transition-all duration-100"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.4)] text-black">
          <MoveHorizontal className="w-4 h-4 md:w-5 md:h-5" />
        </div>
      </div>
    </div>
  );
}
