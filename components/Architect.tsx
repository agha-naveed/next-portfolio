"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Architect() {
  const container = useRef<HTMLElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  // 1. Gather targets and filter out anything that isn't a valid DOM node
  const backgroundTargets = [
    ...(leftCol.current?.children ? Array.from(leftCol.current.children) : []),
    ...(rightCol.current?.children ? Array.from(rightCol.current.children) : [])
  ];

  const centerTargets = centerRef.current?.children 
    ? Array.from(centerRef.current.children) 
    : [];

  const metaTargets = metaRef.current?.children 
    ? Array.from(metaRef.current.children) 
    : [];

  // 2. Only run the timeline if we actually have elements to animate
  if (backgroundTargets.length === 0 && centerTargets.length === 0) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // 3. PILLARS
  tl.fromTo(
    backgroundTargets,
    { opacity: 0, y: 100 },
    { 
      opacity: 0.05, 
      y: 0, 
      duration: 1.5, 
      stagger: 0.1,
      delay: 0.5 
    }
  )

  // 4. IDENTITY
  .fromTo(
    centerTargets,
    { opacity: 0, y: 60 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1.2, 
      stagger: 0.2 
    },
    "-=1"
  )

  // 5. META
  .fromTo(
    metaTargets,
    { opacity: 0 },
    { opacity: 1, duration: 1, stagger: 0.1 },
    "-=0.5"
  );

  // Cleanup: Kill the timeline if the component unmounts
  return () => {
    tl.kill();
  };
}, []);

  return (
    <section
      ref={container}
      className="layer relative flex min-h-screen pt-10 flex-col items-center justify-center overflow-hidden px-6"
    >
      <div 
        ref={metaRef}
        className="absolute top-20 left-6 right-6 flex justify-between md:px-[40px]"
      >
        <div className="flex flex-col gap-1">
          <span className="f-mono text-[9px] text-[#C8854A] tracking-[0.2em] uppercase">Status: Online</span>
          <span className="f-mono text-[9px] text-[#D9D0C0]/20 uppercase">Registry: 24.0.1_PK</span>
        </div>
        <div className="text-right flex flex-col gap-1">
          <span className="f-mono text-[9px] text-[#D9D0C0]/20 uppercase">System Architect</span>
          <span className="f-mono text-[9px] text-[#D9D0C0]/20 uppercase">Skardu, PK</span>
        </div>
      </div>

      <div className="relative z-10 justify-center flex w-full max-w-[1400px] flex-col items-center md:flex-row">
    

        <div 
          ref={centerRef}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6 h-[1px] w-12 bg-[#C8854A]" />
          <h1 className="f-serif mb-6 text-[clamp(3.5rem,8vw,9rem)] font-normal leading-none tracking-tighter text-[#F2EDE4]">
            Syed Naveed Abbas
          </h1>
          <p className="f-sans max-w-[450px] text-[14px] leading-[1.8] text-[#D9D0C0]/50 md:text-[16px]">
            Engineering high-performance full-stack systems and localized AI architectures. 
            Lead Developer of Vextor AI.
          </p>
          <button 
            onClick={() => document.querySelector("#work")?.scrollIntoView({behavior:"smooth"})}
            className="btn-amber mt-10 rounded-full px-10 py-4 text-[11px] tracking-[0.2em]"
          >
            Explore Systems
          </button>
        </div>

      </div>

    </section>
  );
}