"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sec = useRef<HTMLElement>(null);
  const quote = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      quote.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: quote.current, start: "top 75%" },
      }
    );
    gsap.fromTo(
      sec.current?.querySelectorAll(".ab-para") || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sec.current, start: "top 65%" },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sec}
      className="layer px-6 py-[100px] md:px-[60px] md:py-[140px]"
    >
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
        <div>
          <p className="sec-label mb-4">04 / About</p>
          <h2 className="f-serif text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.02em] text-[#F2EDE4]">
            The<br />
            <em>Engineer</em>
          </h2>
        </div>
      </div>

      <div className="rule mb-12 md:mb-20" />

      {/* Pull quote */}
      <div
        ref={quote}
        className="mb-12 border-l-2 border-[#C8854A] pl-6 md:mb-20 md:pl-10"
      >
        <p className="f-serif max-w-[700px] text-[clamp(1.4rem,2.8vw,2.6rem)] font-light italic leading-[1.35] text-[#F2EDE4]/75">
          "Build systems that respect user privacy by design, not by policy — because policy can always be changed."
        </p>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
        
        {/* Left Column: Text & Links */}
        <div className="flex flex-col gap-6">
          {[
            "Currently completing a Bachelor's in Computer Science while shipping production-grade systems. The thesis isn't just academic — it runs.",
            "My work sits at the intersection of full-stack engineering and machine learning deployment. The Vextor IDE is the clearest expression of that: an AI coding assistant that treats the cloud as optional.",
            "When I'm not building, I'm studying how large language models behave at inference time — specifically how to make them faster and leaner on consumer hardware.",
          ].map((t, i) => (
            <p
              key={i}
              className="ab-para f-sans text-[15px] leading-[1.8] text-[#D9D0C0]/55"
            >
              {t}
            </p>
          ))}

          <div className="ab-para mt-2 flex gap-3.5">
            <a
              href="https://github.com/agha-naveed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-[12px] no-underline"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/agha-naveed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-[12px] no-underline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Column: Info card */}
        <div className="border border-[#D9D0C0]/[0.07] bg-[#F2EDE4]/[0.03] p-8 md:p-10">
          <p className="f-mono mb-7 text-[11px] tracking-[0.15em] text-[#D9D0C0]/30">
            SYSTEM INFO
          </p>
          <div className="flex flex-col">
            {[
              ["Name", "Syed Naveed Abbas"],
              ["Role", "Software Engineer"],
              ["Focus", "MERN + AI Systems"],
              ["Education", "BS CS — Final Year"],
              ["Location", "Pakistan (Remote OK)"],
              ["Email", "NaveedAbs@outlook.com"],
              ["Available", "Yes — Open to work"],
            ].map(([k, v], i) => (
              <div
                key={i}
                className="flex justify-between border-b border-[#D9D0C0]/[0.05] py-[13px]"
              >
                <span className="f-mono text-[11px] uppercase tracking-[0.06em] text-[#D9D0C0]/30">
                  {k}
                </span>
                <span
                  className={`f-sans text-[12px] font-medium ${
                    v === "Yes — Open to work"
                      ? "text-[#C8854A]" // Highlight availability
                      : "text-[#F2EDE4]/65"
                  }`}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}