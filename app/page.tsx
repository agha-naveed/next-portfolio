"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiTerminal, FiDatabase, FiLayout, FiCpu, FiGitBranch } from "react-icons/fi";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    const hasVisited = sessionStorage.getItem("clinical_visited");

    const animatePageIn = () => {
      const tl = gsap.timeline();

      tl.fromTo(".grid-line-x", { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.1 })
        .fromTo(".grid-line-y", { scaleY: 0 }, { scaleY: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.1 }, "-=1.5")
        .fromTo(".mask-reveal",
          { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 20 },
          { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0, duration: 1, ease: "power3.out", stagger: 0.1 },
          "-=0.8"
        );
    };

    if (hasVisited) {
      setIsLoaded(true);
      gsap.set(loaderRef.current, { display: "none" });
      animatePageIn();
    } else {
      const loadTl = gsap.timeline({
        onComplete: () => {
          setIsLoaded(true);
          sessionStorage.setItem("clinical_visited", "true");
        }
      });

      loadTl.to(".loader-counter", {
        innerHTML: 100,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: "power2.inOut",
      })
        .to(".loader-text", { opacity: 0, duration: 0.3 }, "-=0.2")
        .to(".loader-door-left", { xPercent: -100, duration: 1.2, ease: "expo.inOut" })
        .to(".loader-door-right", { xPercent: 100, duration: 1.2, ease: "expo.inOut" }, "<")
        .to(loaderRef.current, { display: "none", duration: 0 }, ">")
        .add(animatePageIn, "-=1");
    }

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3.out" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll("a, button, .hover-target");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", () => gsap.to(cursorRef.current, { scale: 3.5, duration: 0.3 }));
      el.addEventListener("mouseleave", () => gsap.to(cursorRef.current, { scale: 1, duration: 0.3 }));
    });

    const dataRows = gsap.utils.toArray<HTMLElement>(".data-row");
    dataRows.forEach((row) => {
      gsap.fromTo(row,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
          }
        }
      );
    });

    gsap.from(".spec-item", {
      opacity: 0,
      x: -20,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".specs-container",
        start: "top 80%",
      }
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, { scope: container });

  return (
    <main
      ref={container}
      className={`bg-black text-[#EAEAEA] min-h-screen font-sans selection:bg-white selection:text-black cursor-none ${!isLoaded ? "overflow-hidden h-screen" : ""}`}
    >

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      ></div>

      <div ref={loaderRef} className="fixed inset-0 z-9999 flex pointer-events-none">
        <div className="loader-door-left w-1/2 h-full bg-[#050505] border-r border-neutral-800 flex justify-end items-center relative">
          <div className="loader-text font-mono text-[8vw] md:text-[6vw] font-black text-white mr-4 tracking-tighter">LOADING</div>
        </div>
        <div className="loader-door-right w-1/2 h-full bg-[#050505] border-l border-neutral-800 flex justify-start items-center relative">
          <div className="loader-text font-mono text-[8vw] md:text-[6vw] font-black text-white ml-4 tracking-tighter"><span className="loader-counter">0</span>%</div>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="grid-line-x absolute top-20 left-0 w-full h-px bg-neutral-900 origin-left"></div>
        <div className="grid-line-y absolute top-0 left-6 md:left-12 w-px h-full bg-neutral-900 origin-top hidden md:block"></div>
        <div className="grid-line-y absolute top-0 right-6 md:right-12 w-px h-full bg-neutral-900 origin-top hidden md:block"></div>
      </div>

      <nav className="fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md">
        <div className="mask-reveal font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
          Syed Naveed Abbas <span className="text-white ml-2">v2.0.26</span>
        </div>
        <div className="mask-reveal flex gap-8 font-mono text-xs uppercase tracking-[0.2em]">
          <Link href="work" className="hover-target hover:text-white text-neutral-500 transition-colors cursor-none">Work</Link>
          <Link href="about" className="hover-target hover:text-white text-neutral-500 transition-colors cursor-none">About</Link>
          <Link href="mailto:NaveedAbs31@gmail.com" className="hover-target hover:text-white text-neutral-500 transition-colors cursor-none">Contact</Link>
        </div>
      </nav>

      <section className="relative z-10 pt-20 px-6 md:px-12 max-w-480 mx-auto min-h-screen flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-neutral-900 py-6 font-mono text-xs uppercase tracking-widest text-neutral-500 gap-6">
          <div className="mask-reveal flex flex-col gap-1">
            <span className="text-neutral-700">Role</span>
            <span className="text-neutral-300">Software Engineer</span>
          </div>
          <div className="mask-reveal flex flex-col gap-1">
            <span className="text-neutral-700">Specialization</span>
            <span className="text-neutral-300">MERN Stack & AI Systems</span>
          </div>
          <div className="mask-reveal flex flex-col gap-1">
            <span className="text-neutral-700">Status</span>
            <span className="flex items-center gap-2 text-white">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              BS CS Final Year
            </span>
          </div>
          <div className="mask-reveal flex flex-col gap-1 md:text-right">
            <span className="text-neutral-700">Location</span>
            <span className="text-neutral-300">Pakistan</span>
          </div>
        </div>

        <div className="grow flex flex-col justify-center py-20">
          <h1 className="text-[12vw] lg:text-[10vw] font-medium tracking-tighter leading-[0.85] uppercase mb-8">
            <div className="mask-reveal">SYED</div>
            <div className="mask-reveal text-neutral-600">NAVEED ABBAS.</div>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-neutral-900 pt-12">
            <div className="md:col-span-4 mask-reveal">
              <FiTerminal className="text-3xl text-neutral-500 mb-6" />
              <p className="font-mono text-sm uppercase tracking-widest text-neutral-400 leading-relaxed">
                I do not just build web interfaces. I architect complete systems that bridge robust web infrastructure with offline, localized machine learning environments.
              </p>
            </div>
            <div className="md:col-span-8 mask-reveal">
              <p className="text-xl md:text-3xl font-light leading-tight text-neutral-300 max-w-4xl">
                Currently finalizing my BS CS degree and developing standalone applications that execute complex AI tasks natively, bypassing traditional cloud dependencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="index" className="relative z-10 px-6 md:px-12 max-w-480 mx-auto py-32">
        <div className="border-b border-neutral-200 pb-6 mb-12 flex justify-between items-end">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase text-white">Project Index</h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 hidden md:block">03 Entries Found</span>
        </div>

        <div className="flex flex-col">
          <div className="hidden lg:grid grid-cols-12 gap-8 font-mono text-xs uppercase tracking-widest text-neutral-600 border-b border-neutral-900 pb-4 mb-4">
            <div className="col-span-1">ID</div>
            <div className="col-span-3">System Name</div>
            <div className="col-span-3">Core Stack</div>
            <div className="col-span-4">Architecture Summary</div>
            <div className="col-span-1 text-right">Action</div>
          </div>

          <div className="data-row hover-target group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 items-start py-12 border-b border-neutral-900 hover:bg-neutral-900/20 transition-colors cursor-none">
            <div className="col-span-1 font-mono text-sm text-neutral-500">01</div>
            <div className="col-span-3">
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 group-hover:text-white transition-colors">Vextor IDE</h3>
              <span className="inline-block font-mono text-[10px] uppercase tracking-widest border border-neutral-800 px-2 py-1 text-neutral-400">Capstone Project</span>
            </div>
            <div className="col-span-3 flex flex-wrap gap-2 h-fit">
              {["Electron.js", "React 18", "PyTorch", "C++", "llama.cpp"].map(tech => (
                <span key={tech} className="font-mono text-xs text-neutral-300 bg-neutral-900 px-2 py-1">{tech}</span>
              ))}
            </div>
            <div className="col-span-4">
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                A localized Integrated Development Environment. Bypasses cloud APIs by natively mounting offline PyTorch models directly on the user's machine for privacy-first, zero-latency coding assistance.
              </p>
            </div>
            <div className="col-span-1 lg:text-right">
              <Link href="/work/vextor-ai-ide" className="inline-flex items-center justify-center w-12 h-12 border border-neutral-800 hover:bg-white hover:text-black transition-colors cursor-none">
                <FiArrowUpRight className="text-xl" />
              </Link>
            </div>
          </div>

          <div className="data-row hover-target group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 items-start py-12 border-b border-neutral-900 hover:bg-neutral-900/20 transition-colors cursor-none">
            <div className="col-span-1 font-mono text-sm text-neutral-500">02</div>
            <div className="col-span-3">
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 group-hover:text-white transition-colors">Lenmi Store</h3>
              <span className="inline-block font-mono text-[10px] uppercase tracking-widest border border-neutral-800 px-2 py-1 text-neutral-400">E-Commerce Architecture</span>
            </div>
            <div className="col-span-3 flex flex-wrap gap-2 h-fit">
              {["Next.js", "MongoDB", "Node.js", "Tailwind CSS"].map(tech => (
                <span key={tech} className="font-mono text-xs text-neutral-300 bg-neutral-900 px-2 py-1">{tech}</span>
              ))}
            </div>
            <div className="col-span-4">
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                A highly scalable marketplace infrastructure. Features complex state management protocols to synchronize real-time inventory, secure authentication flows, and high-conversion checkout pipelines.
              </p>
            </div>
            <div className="col-span-1 lg:text-right">
              <Link href="/work/lenmi-store" className="inline-flex items-center justify-center w-12 h-12 border border-neutral-800 hover:bg-white hover:text-black transition-colors cursor-none">
                <FiArrowUpRight className="text-xl" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section id="specs" className="specs-container relative z-10 px-6 md:px-12 max-w-[120rem] mx-auto py-32 border-t border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-medium tracking-tighter uppercase text-white mb-6">Technical<br />Specifications</h2>
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest leading-relaxed">
              System architecture capabilities and deployed toolsets.
            </p>
          </div>

          <div className="lg:col-span-1 flex flex-col border border-neutral-900 p-8">
            <div className="flex items-center gap-4 mb-8 text-neutral-400">
              <FiLayout className="text-2xl" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-white">Frontend Core</h3>
            </div>
            <ul className="flex flex-col gap-4 font-mono text-sm text-neutral-400">
              {["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Bootstrap"].map(item => (
                <li key={item} className="spec-item flex justify-between border-b border-neutral-900 pb-2 hover:text-white transition-colors cursor-default">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 flex flex-col border border-neutral-900 p-8">
            <div className="flex items-center gap-4 mb-8 text-neutral-400">
              <FiDatabase className="text-2xl" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-white">Backend & Database</h3>
            </div>
            <ul className="flex flex-col gap-4 font-mono text-sm text-neutral-400">
              {["Node.js + Express.js", "FastAPI", "Redis", "MongoDB", "PostgreSQL / MySQL", "Prisma ORM"].map(item => (
                <li key={item} className="spec-item flex justify-between border-b border-neutral-900 pb-2 hover:text-white transition-colors cursor-default">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 flex flex-col border border-neutral-900 p-8">
            <div className="flex items-center gap-4 mb-8 text-neutral-400">
              <FiCpu className="text-2xl" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-white">Other Tech Stacks</h3>
            </div>
            <ul className="flex flex-col gap-4 font-mono text-sm text-neutral-400">
              {["Python", "Numpy / Pandas", "Docker", "Git", "Electron.js"].map(item => (
                <li key={item} className="spec-item flex justify-between border-b border-neutral-900 pb-2 hover:text-white transition-colors cursor-default">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 md:px-12 max-w-480 mx-auto pt-32 pb-12 border-t border-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">System Awaiting Input</span>
            <a href="mailto:NaveedAbs31@gmail.com" className="hover-target group flex items-center gap-6 text-4xl md:text-6xl font-medium tracking-tighter uppercase text-white hover:text-neutral-400 transition-colors cursor-none">
              Execute Contact <FiArrowUpRight className="text-5xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
            <p className="font-mono text-sm text-neutral-500 mt-4">NaveedAbs31@gmail.com</p>
          </div>

          <div className="flex flex-col md:items-end gap-6 font-mono text-xs uppercase tracking-widest">
            <div className="flex gap-8">
              <a href="https://github.com/agha-naveed" className="hover-target flex items-center gap-2 hover:text-white text-neutral-400 transition-colors cursor-none"><FiGitBranch /> GitHub</a>
              <a href="https://github.com/in/agha-naveed" className="hover-target flex items-center gap-2 hover:text-white text-neutral-400 transition-colors cursor-none"><FiArrowUpRight /> LinkedIn</a>
            </div>
            <span className="text-neutral-600">© {new Date().getFullYear()} Syed Naveed Abbas. All Rights Reserved.</span>
          </div>
        </div>
      </footer>

    </main>
  );
}