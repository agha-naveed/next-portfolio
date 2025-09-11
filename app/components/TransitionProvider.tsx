// components/TransitionProvider.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { TransitionContext } from "./TransitionContext";
import gsap from "gsap";

export default function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);

  const playTransition = (navigate: () => void) => {
    const tl = gsap.timeline({
      onComplete: () => {
        navigate();
      },
    });

    tl.set(overlayRef.current, {
      scale: 0,
      opacity: 1,
    });

    tl.to(overlayRef.current, {
      scale: 22,
      duration: 0.6,
      ease: "power4.inOut",
    });
  };

  // When route changes, animate the circle away
  useEffect(() => {
    gsap.to(overlayRef.current, {
      scale: 0,
      duration: 0.6,
      ease: "power4.inOut",
      delay: 0.2,
      onComplete: () => {
        if (overlayRef.current) overlayRef.current.style.opacity = "0";
      },
    });
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ playTransition }}>
      {/* Circular overlay */}
      <div
        ref={overlayRef}
        className="fixed top-1/2 left-1/2 z-[9999999] w-[100px] h-[100px] bg-main-dark-clr rounded-full pointer-events-none opacity-0"
        style={{
          transform: "translate(-50%, -50%) scale(0)",
          transformOrigin: "center center",
        }}
      />
      {children}
    </TransitionContext.Provider>
  );
}