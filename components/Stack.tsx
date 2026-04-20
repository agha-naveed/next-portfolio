"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CATS = [
  {
    label: "Frontend",
    color: "#C8854A",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend & Data",
    color: "#D9D0C0",
    items: ["Node.js", "Express", "FastAPI", "MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma ORM"],
  },
  {
    label: "AI / ML",
    color: "#8B3A1E",
    items: ["PyTorch", "llama.cpp", "NumPy", "Pandas", "Offline LLM", "Python"],
  },
  {
    label: "Infrastructure",
    color: "#5C5549",
    items: ["Electron.js", "Docker", "Git", "REST APIs", "WebSockets"],
  },
];

export default function Stack() {
  const sec = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sec.current?.querySelectorAll(".cat-block") || [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sec.current, start: "top 70%" },
      }
    );
    gsap.fromTo(
      sec.current?.querySelectorAll(".chip") || [],
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.03,
        duration: 0.4,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: sec.current, start: "top 60%" },
      }
    );
  }, []);

  return (
    <section
      id="stack"
      ref={sec}
      className="layer bg-[#F2EDE4]/[0.025] px-6 py-[100px] md:px-[60px] md:py-[140px]"
    >
      {/* Header */}
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
        <div>
          <p className="sec-label mb-4">03 / Tech Stack</p>
          <h2 className="f-serif text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.02em] text-[#F2EDE4]">
            Technical<br />
            <em>Capabilities</em>
          </h2>
        </div>
      </div>

      <div className="rule mb-[60px]" />

      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2">
        {CATS.map((cat, i) => (
          <div key={i} className="cat-block">
            <div className="mb-5 flex items-center gap-2.5">
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: cat.color,
                  boxShadow: `0 0 10px ${cat.color}60`,
                }}
              />
              <span
                className="f-mono text-[11px] uppercase tracking-[0.15em]"
                style={{ color: cat.color }}
              >
                {cat.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency bars */}
      <div className="mt-16 md:mt-[80px]">
        <p className="f-mono mb-8 text-[11px] tracking-[0.15em] text-[#D9D0C0]/30">
          DEPTH INDEX
        </p>
        <div className="grid grid-cols-1 gap-x-20 gap-y-6 md:grid-cols-2 md:gap-y-5">
          {[
            { label: "Full-Stack Dev", pct: 92, col: "#C8854A" },
            { label: "React / Next.js", pct: 90, col: "#C8854A" },
            { label: "Node.js / APIs", pct: 85, col: "#D9D0C0" },
            { label: "AI/ML Integration", pct: 78, col: "#8B3A1E" },
            { label: "Electron.js", pct: 75, col: "#8B3A1E" },
            { label: "DevOps / Docker", pct: 65, col: "#5C5549" },
          ].map((s, i) => (
            <Bar key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Bar({
  label,
  pct,
  col,
  index,
}: {
  label: string;
  pct: number;
  col: string;
  index: number;
}) {
  const fill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      fill.current,
      { width: "0%" },
      {
        width: pct + "%",
        duration: 1.2,
        delay: index * 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: fill.current, start: "top 90%" },
      }
    );
  }, [pct, index]);

  return (
    <div>
      <div className="mb-[7px] flex justify-between">
        <span className="f-sans text-[12px] font-medium text-[#D9D0C0]/55">
          {label}
        </span>
        <span className="f-mono text-[10px]" style={{ color: col }}>
          {pct}%
        </span>
      </div>
      <div className="relative h-[1px] w-full bg-[#D9D0C0]/[0.08]">
        <div
          ref={fill}
          className="absolute left-0 top-0 h-full opacity-70"
          style={{
            background: col,
            boxShadow: `0 0 6px ${col}50`,
          }}
        />
      </div>
    </div>
  );
}