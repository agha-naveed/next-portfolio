"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Center the elements on the cursor coordinates
    gsap.set([dotRef.current, ringRef.current], { xPercent: -50, yPercent: -50 });

    // quickTo is highly optimized for mouse tracking
    const xMoveDot = gsap.quickTo(dotRef.current, "x", { duration: 0.1, ease: "power3.out" });
    const yMoveDot = gsap.quickTo(dotRef.current, "y", { duration: 0.1, ease: "power3.out" });

    const xMoveRing = gsap.quickTo(ringRef.current, "x", { duration: 0.3, ease: "power3.out" });
    const yMoveRing = gsap.quickTo(ringRef.current, "y", { duration: 0.3, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xMoveDot(e.clientX);
      yMoveDot(e.clientY);
      xMoveRing(e.clientX);
      yMoveRing(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999] bg-[var(--color-lime)]"
      />
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99998] border-[1.5px] border-[var(--color-lime)]/50"
      />
    </>
  );
}