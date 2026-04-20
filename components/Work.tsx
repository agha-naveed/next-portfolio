"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "01",
    name: "Vextor AI",
    category: "Native AI IDE · Systems Engineering",
    year: "2026",
    stack: ["Electron.js", "React", "Rust", "Go"],
    body: "An AI-powered IDE engineered for uninterrupted code flow. It runs with support for multiple AI models. It ensure the IDE is fast & keep data secure. Features a high-performance, crash-free terminal and native local git integration.",
    accent: "#C8854A",
  },
  {
    id: "02",
    name: "EchoUp",
    category: "Social Media Platform · Full Stack",
    year: "2026",
    stack: ["Next.js", "PostgreSQL", "Redis", "Drizzle ORM", "Tailwind"],
    body: "A robust social networking ecosystem focused on real-time data persistence and scalable infrastructure. Utilizing Drizzle ORM for high-performance relational mapping and Redis for optimized session management.",
    accent: "#D9D0C0",
  },
  {
    id: "03",
    name: "Lenmi Store",
    category: "E-Commerce · Full Stack",
    year: "2024",
    stack: ["Next.js", "MongoDB", "Cloudinary", "Tailwind"],
    body: "A full-scale digital marketplace featuring optimized product discovery, secure cloud-based media management via Cloudinary, and a performant MERN-based architecture for seamless shopping experiences.",
    accent: "#D9D0C0",
  }
];

export default function Work() {
  const sec = useRef<HTMLElement>(null);

  useEffect(() => {
    const rows = sec.current?.querySelectorAll(".proj-row");
    
    if (rows && rows.length > 0) {
      rows.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { 
              trigger: el, 
              start: "top 88%",
              toggleActions: "play none none none"
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="work"
      ref={sec}
      className="layer px-6 py-[100px] md:px-[60px] md:py-[140px]"
    >
      <div className="mb-12 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="sec-label mb-4 uppercase tracking-[0.2em] text-[#C8854A]/70">02 / Selected Work</p>
          <h2 className="f-serif text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.02em] text-[#F2EDE4]">
            Projects &amp;<br />
            <em className="italic">Systems</em>
          </h2>
        </div>
        <p className="f-mono text-left text-[11px] leading-[1.7] tracking-[0.1em] text-[#D9D0C0]/30 md:text-right">
          {PROJECTS.length.toString().padStart(2, '0')} ENTRIES<br />
          FOUND
        </p>
      </div>

      <div className="rule mb-0 opacity-20" />

      {PROJECTS.map((p, i) => (
        <ProjectRow key={i} p={p} />
      ))}
    </section>
  );
}

function ProjectRow({ p }: { p: typeof PROJECTS[0] }) {
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
      className={`proj-row proj-card group border-t border-[#D9D0C0]/10 pt-9 transition-colors duration-300 hover:border-[#C8854A]/40 ${
        open ? "pb-0" : "pb-9"
      }`}
      onClick={toggle}
    >
      <div className="flex flex-col items-start gap-4 md:grid md:grid-cols-[80px_1fr_auto] md:gap-6">
        
        <div className="flex w-full justify-between md:block md:w-auto">
          <span className="idx font-mono text-[11px] text-[#C8854A] opacity-60">{p.id}</span>
          <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#D9D0C0]/25 transition-all duration-300 group-hover:border-[#C8854A]/50 md:hidden">
            <span className={`block text-[14px] leading-none text-[#D9D0C0]/50 transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}>+</span>
          </div>
        </div>

        <div className="w-full">
          <h3 className="f-serif mb-2.5 text-[clamp(1.6rem,3.2vw,3rem)] font-light leading-none text-[#F2EDE4]">
            {p.name}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="pill rounded-none border border-[#D9D0C0]/20 px-2 py-1 font-mono text-[10px] text-[#D9D0C0]/50 lowercase">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2 flex w-full flex-row items-center justify-between text-left md:mt-0 md:w-auto md:flex-col md:items-end md:justify-start md:text-right">
          <div>
            <p className="f-mono mb-1.5 text-[11px] tracking-[0.08em] text-[#D9D0C0]/35 uppercase">{p.year}</p>
            <p className="f-mono text-[11px] tracking-[0.06em] text-[#D9D0C0]/35 uppercase">{p.category}</p>
          </div>
          <div className="mt-4 hidden h-[18px] w-[18px] items-center justify-center rounded-full border border-[#D9D0C0]/25 transition-all duration-300 group-hover:border-[#C8854A]/50 md:flex">
            <span className={`block text-[14px] leading-none text-[#D9D0C0]/50 transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}>+</span>
          </div>
        </div>
      </div>

      <div ref={detail} className="h-0 overflow-hidden opacity-0">
        <div className="pb-10 pl-0 pt-6 md:pl-[104px]">
          <p className="f-sans max-w-[620px] text-[15px] leading-[1.8] text-[#D9D0C0]/60">
            {p.body}
          </p>
          <div className="mt-6 flex items-center gap-2">
            <div
              className="h-1.5 w-1.5 rounded-full shadow-[0_0_8px] shadow-current animate-pulse"
              style={{ color: p.accent, background: p.accent }}
            />
            <span className="f-mono text-[10px] font-bold uppercase tracking-[0.1em]" style={{ color: p.accent }}>
              {p.category.split("·")[0].trim()}
            </span>
          </div>
        </div>
      </div>
      <div className="rule h-[1px] w-full bg-gradient-to-r from-transparent via-[#D9D0C0]/10 to-transparent" />
    </div>
  );
}