"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const render = () => {
      // Easing function for smooth professional delay
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${currentX - 20}px, ${currentY - 20}px, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${targetX - 4}px, ${targetY - 4}px, 0)`;
      }
      if (bgGlowRef.current) {
        bgGlowRef.current.style.transform = `translate3d(${currentX - 400}px, ${currentY - 400}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const updatePosition = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient Moving Antigravity Background */}
      <div
        ref={bgGlowRef}
        className="fixed top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none z-[-1] opacity-40 dark:opacity-20 blur-[120px] transition-opacity duration-1000 will-change-transform mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(0,241,253,0.3) 0%, rgba(172,137,255,0.1) 40%, rgba(0,0,0,0) 70%)"
        }}
      />
      
      {/* Outer Ring */}
      <div
        ref={outerRef}
        className={`hidden md:block fixed top-0 left-0 w-10 h-10 border-2 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out will-change-transform shadow-[0_0_15px_rgba(0,139,163,0.3)] dark:shadow-[0_0_15px_rgba(0,241,253,0.2)] ${
          isHovering
            ? "scale-150 border-primary/30 bg-primary/10 backdrop-blur-[2px]"
            : "scale-100 border-primary/50"
        }`}
      />
      
      {/* Inner Dot */}
      <div
        ref={innerRef}
        className={`hidden md:block fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] transition-all duration-150 ease-out will-change-transform ${
          isHovering ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      />
    </>
  );
}
