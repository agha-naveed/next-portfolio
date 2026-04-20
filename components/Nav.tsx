"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Nav() {
  const ref = useRef<HTMLElement>(null);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2.8, ease: "power3.out" }
    );
    
    const handleScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 py-5 md:px-[60px] md:py-[22px] transition-all duration-400 border-b ${
        solid
          ? "bg-[#0A0805]/85 border-[#D9D0C0]/[0.07] backdrop-blur-[16px]"
          : "bg-transparent border-transparent backdrop-blur-none"
      }`}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="f-sans text-[13px] font-bold tracking-[0.12em] text-[#F2EDE4] bg-transparent border-none cursor-none uppercase"
      >
        SNA
      </button>

      {/* Right Side Container */}
      <div className="flex items-center gap-4 md:gap-[40px]">
        
        {/* Nav Links - Hidden on mobile, visible on md and up */}
        <div className="hidden md:flex items-center gap-[40px]">
          {[
            ["Work", "#work"],
            ["Stack", "#stack"],
            ["About", "#about"],
          ].map(([label, href]) => (
            <button
              key={label}
              onClick={() => go(href)}
              className="f-sans text-[12px] font-medium tracking-[0.1em] text-[#F2EDE4]/45 bg-transparent border-none cursor-none uppercase transition-colors duration-200 hover:text-[#F2EDE4]"
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:NaveedAbs31@gmail.com"
          className="f-sans text-[12px] font-medium tracking-[0.1em] text-[#0A0805] bg-[#C8854A] px-[18px] py-[8px] md:px-[22px] md:py-[9px] no-underline uppercase transition-colors duration-200 hover:bg-[#d9935a]"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}