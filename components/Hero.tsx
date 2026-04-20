"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic sequential fade-in animations assumed based on original GSAP usage
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(nameRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(descRef.current?.children || [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(linksRef.current?.children || [],
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  return (
    <section 
      ref={container} 
      className="layer relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-[120px] pb-20 md:px-[60px] md:pb-[80px]"
    >
      
      {/* Name and Role - Large Centered Typography */}
      <div className="mb-12 text-center md:mb-[60px]">
        <h1 
          ref={nameRef} 
          className="f-serif mb-4 text-[clamp(3.5rem,10vw,10rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#F2EDE4]"
        >
          Syed Naveed Abbas.
        </h1>
        <p className="f-sans text-[11px] uppercase tracking-[0.3em] text-[#D9D0C0]/60 md:text-[13px]">
          Software Engineer & AI Architect
        </p>
      </div>

      {/* Description - Unique layout with specific emphasis */}
      <div ref={descRef} className="mb-12 max-w-[900px] text-center md:mb-[60px]">
        <p className="f-sans mb-[30px] text-[14px] leading-[1.8] text-[#D9D0C0]/80 md:text-[16px]">
          I engineer localized machine learning systems and complete systems that treat the cloud as optional, ensuring true zero-latency and absolute data privacy. My work sits at the intersection of full-stack infrastructure and innovative on-device AI.
        </p>
      </div>

      {/* Unique Link Presentation - Prominent buttons and clean horizontal lines */}
      <div 
        ref={linksRef} 
        className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-6"
      >
        <button
          className="btn-amber w-full rounded-[4px] px-[28px] py-[14px] text-[12px] uppercase tracking-[0.15em] md:w-auto"
          onClick={() => document.querySelector("#work")?.scrollIntoView({behavior:"smooth"})}
        >
          View Systems
        </button>
        
        <div className="flex items-center gap-6 md:gap-[32px]">
          <a 
            href="https://github.com/agha-naveed" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ul-line f-mono text-[11px] uppercase tracking-[0.15em] text-[#D9D0C0]/50 no-underline"
          >
            GitHub ↗
          </a>
          <a 
            href="https://linkedin.com/in/agha-naveed" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ul-line f-mono text-[11px] uppercase tracking-[0.15em] text-[#D9D0C0]/50 no-underline"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

    </section>
  );
}