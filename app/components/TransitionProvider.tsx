"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { TransitionContext } from "./TransitionContext";
import gsap from "gsap";

export default function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const leftPanel = useRef<HTMLDivElement>(null);
  const rightPanel = useRef<HTMLDivElement>(null);

  // Trigger transition when navigation is triggered
  const playTransition = (navigate: () => void) => {
    const tl = gsap.timeline({
      onComplete: () => {
        navigate();
      },
    });

    // Prepare panels for fade + slide in
    tl.set([leftPanel.current, rightPanel.current], {
      x: (i) => (i === 0 ? "-100%" : "100%"),
      opacity: 0,
      display: "block",
    });

    // Animate panels sliding in + fading in (opacity)
    tl.to(
      [leftPanel.current, rightPanel.current],
      {
        x: "0%",
        opacity: 1,
        duration: 0.7,
        ease: "power4.inOut",
        stagger: 0.1,
      },
      0
    );
  };

  // When pathname changes, animate panels sliding + fading out
  useEffect(() => {
    if (!leftPanel.current || !rightPanel.current) return;

    const tl = gsap.timeline();

    tl.to(
      [leftPanel.current],
      {
        x: "-100%",
        opacity: 0,
        duration: 0.7,
        ease: "power4.inOut",
        display: "block",
      },
      0
    );

    tl.to(
      [rightPanel.current],
      {
        x: "100%",
        opacity: 0,
        duration: 0.7,
        ease: "power4.inOut",
        display: "block",
      },
      0
    );
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ playTransition }}>
      {/* Left panel */}
      <div
        ref={leftPanel}
        className="fixed top-0 left-0 w-1/2 h-full bg-main-dark-clr z-[99999999] pointer-events-none"
        style={{ display: "none" }}
      />

      {/* Right panel */}
      <div
        ref={rightPanel}
        className="fixed top-0 right-0 w-1/2 h-full bg-main-dark-clr z-[99999999] pointer-events-none"
        style={{ display: "none" }}
      />

      {children}
    </TransitionContext.Provider>
  );
}
