"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "01",
    name: "Vextor IDE",
    category: "Capstone · Desktop Application",
    year: "2024",
    stack: ["Electron.js", "React 18", "PyTorch", "C++", "llama.cpp"],
    body: "A localized Integrated Development Environment that mounts offline PyTorch models directly on the user's machine. Zero cloud dependency, zero latency, zero data exposure. AI coding assistance as it should be — private by architecture.",
    accent: "#C8854A",
  },
  {
    id: "02",
    name: "Lenmi Store",
    category: "E-Commerce · Full Stack",
    year: "2024",
    stack: ["Next.js", "MongoDB", "Node.js", "Tailwind"],
    body: "Highly scalable marketplace infrastructure. Complex state management protocols synchronize real-time inventory across thousands of SKUs, secure authentication flows, and optimized checkout pipelines built to convert.",
    accent: "#D9D0C0",
  },
  {
    id: "03",
    name: "Offline ML Runtime",
    category: "AI Systems · Infrastructure",
    year: "2025",
    stack: ["Python", "FastAPI", "NumPy", "Docker", "Electron.js"],
    body: "Standalone execution environment for complex AI tasks, natively on-device. Designed for enterprise-grade privacy requirements where not a single token of user data touches an external server.",
    accent: "#8B3A1E",
  },
];

export default function Work() {
  const sec = useRef<HTMLElement>(null);

  useEffect(() => {
    sec.current?.querySelectorAll(".proj-row").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      id="work"
      ref={sec}
      className="layer px-6 py-[100px] md:px-[60px] md:py-[140px]"
    >
      {/* Header */}
      <div className="mb-12 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="sec-label mb-4">02 / Selected Work</p>
          <h2 className="f-serif text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.02em] text-[#F2EDE4]">
            Projects &amp;<br />
            <em>Systems</em>
          </h2>
        </div>
        <p className="f-mono text-left text-[11px] leading-[1.7] tracking-[0.1em] text-[#D9D0C0]/30 md:text-right">
          03 ENTRIES<br />
          FOUND
        </p>
      </div>

      <div className="rule mb-0" />

      {/* Project rows */}
      {PROJECTS.map((p, i) => (
        <ProjectRow key={i} p={p} />
      ))}
    </section>
  );
}

function ProjectRow({ p }: { p: typeof PROJECTS[0] }) {
  const row = useRef<HTMLDivElement>(null);
  const detail = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((o) => !o);
    if (!open) {
      gsap.fromTo(
        detail.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(detail.current, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
      });
    }
  };

  return (
    <div
      ref={row}
      className={`proj-row proj-card cursor-none pt-9 ${
        open ? "pb-0" : "pb-9"
      }`}
      onClick={toggle}
    >
      <div className="flex flex-col items-start gap-4 md:grid md:grid-cols-[80px_1fr_auto] md:gap-6">
        
        {/* Index & Mobile Toggle */}
        <div className="flex w-full justify-between md:block md:w-auto">
          <span className="idx pt-1">{p.id}</span>
          {/* Mobile only toggle button icon */}
          <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#D9D0C0]/25 transition-colors duration-200 md:hidden">
            <span
              className={`block text-[14px] leading-none text-[#D9D0C0]/50 transition-transform duration-300 ${
                open ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </div>
        </div>

        {/* Name + stack */}
        <div className="w-full">
          <h3 className="f-serif mb-2.5 text-[clamp(1.6rem,3.2vw,3rem)] font-light leading-none text-[#F2EDE4]">
            {p.name}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="pill">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Category + year (Desktop right alignment) */}
        <div className="mt-2 flex w-full flex-row items-center justify-between text-left md:mt-0 md:w-auto md:flex-col md:items-end md:justify-start md:text-right">
          <div>
            <p className="f-mono mb-1.5 text-[11px] tracking-[0.08em] text-[#D9D0C0]/35">
              {p.year}
            </p>
            <p className="f-mono text-[11px] tracking-[0.06em] text-[#D9D0C0]/35">
              {p.category}
            </p>
          </div>
          {/* Desktop only toggle button icon */}
          <div className="mt-4 hidden h-[18px] w-[18px] items-center justify-center rounded-full border border-[#D9D0C0]/25 transition-colors duration-200 md:flex">
            <span
              className={`block text-[14px] leading-none text-[#D9D0C0]/50 transition-transform duration-300 ${
                open ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </div>
        </div>
      </div>

      {/* Expandable detail */}
      <div ref={detail} className="h-0 overflow-hidden opacity-0">
        <div className="pb-10 pl-0 pt-6 md:pl-[104px]">
          <p className="f-sans max-w-[620px] text-[15px] leading-[1.8] text-[#D9D0C0]/60">
            {p.body}
          </p>
          <div className="mt-6 flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{ background: p.accent }}
            />
            <span
              className="f-mono text-[11px] uppercase tracking-[0.08em] opacity-80"
              style={{ color: p.accent }}
            >
              {p.category.split("·")[0].trim()}
            </span>
          </div>
        </div>
      </div>

      <div className="rule" />
    </div>
  );
}