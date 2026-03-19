"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Initial Hero Load
    const tl = gsap.timeline();
    tl.to(".reveal-text", {
      y: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2,
    }).to(".fade-in", { opacity: 1, duration: 1, ease: "power2.out" }, "-=0.5");

    // 2. The Zoom-in Scroll Effect (Pinned)
    const zoomTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".zoom-section",
        start: "top top",
        end: "+=150%", // Pins for 1.5x the viewport height
        scrub: 0.5, // Smooth scrubbing
        pin: true,
      },
    });

    zoomTimeline
      .to(".zoom-text", { scale: 15, opacity: 0, duration: 1 })
      .to(".zoom-bg", { backgroundColor: "#ffffff", duration: 1 }, "<")
      .to(".zoom-subtext", { opacity: 0, duration: 0.3 }, "<");

    // 3. Project Parallax & Zoom (Image scales inside container on scroll)
    const projects = gsap.utils.toArray<HTMLElement>(".project-container");
    projects.forEach((project) => {
      const image = project.querySelector(".project-image");
      const text = project.querySelector(".project-info");

      // Image subtle zoom on scroll
      gsap.fromTo(
        image,
        { scale: 1 },
        {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Text reveal on scroll
      gsap.from(text, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: project,
          start: "top 75%",
        },
      });
    });

    // 4. Marquee Infinite Scroll
    gsap.to(".marquee-inner", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }, { scope: container });

  return (
    <main ref={container} className="bg-black text-neutral-200 min-h-screen font-sans overflow-x-hidden selection:bg-white selection:text-black">

      {/* Minimal Navbar */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference text-white">
        <div className="text-sm font-bold tracking-widest uppercase">S. N. A.</div>
        <div className="text-sm font-medium tracking-widest uppercase flex gap-8">
          <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-between p-6 md:p-10 pt-32">
        <div className="fade-in opacity-0 text-sm md:text-base font-mono uppercase tracking-widest text-neutral-500 max-w-sm">
          Full Stack Engineer & AI Explorer based in Pakistan.
        </div>

        <div className="mb-20">
          <div className="overflow-hidden">
            <h1 className="reveal-text translate-y-[110%] text-[12vw] leading-[0.85] tracking-tighter font-bold uppercase">
              Syed Naveed
            </h1>
          </div>
          <div className="overflow-hidden flex justify-end">
            <h1 className="reveal-text translate-y-[110%] text-[12vw] leading-[0.85] tracking-tighter font-bold uppercase text-neutral-400">
              Abbas.
            </h1>
          </div>
        </div>
      </section>

      {/* Pinned Zoom Transition Section */}
      <section className="zoom-section zoom-bg h-screen w-full flex items-center justify-center relative overflow-hidden bg-black text-white">
        <div className="text-center z-10 relative pointer-events-none">
          <h2 className="zoom-text text-4xl md:text-7xl font-bold tracking-tighter uppercase whitespace-nowrap">
            Dive Into My World
          </h2>
          <p className="zoom-subtext mt-4 text-neutral-400 font-mono text-sm uppercase tracking-widest">
            Scroll to magnify
          </p>
        </div>
      </section>

      {/* Work Section (Now with white background from the transition) */}
      <section id="work" className="bg-white text-black py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24 border-b border-black pb-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Selected Work</h2>
            <span className="font-mono text-sm uppercase tracking-widest hidden md:block">(03) Featured Projects</span>
          </div>

          <div className="flex flex-col gap-32">

            {/* Project 1 */}
            <div className="project-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 h-[50vh] md:h-[70vh] w-full overflow-hidden relative rounded-sm bg-neutral-100">
                {/* Replace background color with actual images: <img src="..." className="project-image w-full h-full object-cover" /> */}
                <div className="project-image w-full h-full bg-neutral-900 flex items-center justify-center text-white">
                  <span className="font-mono opacity-50">[ Vextor AI Visual ]</span>
                </div>
              </div>
              <div className="project-info lg:col-span-5 lg:pl-12 flex flex-col justify-center">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">01 — AI / Electron / React</span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Vextor AI IDE</h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  An AI-powered Integrated Development Environment leveraging offline PyTorch models and llama.cpp for intelligent, localized coding assistance.
                </p>
                <a href="#" className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                  View Case Study
                  <span className="block w-8 h-[1px] bg-black group-hover:w-16 transition-all duration-300"></span>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 lg:pr-12 flex flex-col justify-center order-2 lg:order-1">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">02 — Full Stack E-commerce</span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Lenmi Store</h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  A high-performance e-commerce platform built with Next.js and MongoDB. Engineered for seamless inventory management and secure user flows.
                </p>
                <a href="#" className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                  View Case Study
                  <span className="block w-8 h-[1px] bg-black group-hover:w-16 transition-all duration-300"></span>
                </a>
              </div>
              <div className="lg:col-span-7 h-[50vh] md:h-[70vh] w-full overflow-hidden relative rounded-sm bg-neutral-100 order-1 lg:order-2">
                <div className="project-image w-full h-full bg-neutral-800 flex items-center justify-center text-white">
                  <span className="font-mono opacity-50">[ Lenmi Store Visual ]</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 h-[50vh] md:h-[70vh] w-full overflow-hidden relative rounded-sm bg-neutral-100">
                <div className="project-image w-full h-full bg-neutral-900 flex items-center justify-center text-white">
                  <span className="font-mono opacity-50">[ AI Chatbot Visual ]</span>
                </div>
              </div>
              <div className="project-info lg:col-span-5 lg:pl-12 flex flex-col justify-center">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">03 — Node.js / Python / NLP</span>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">AI Chatbot</h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  A 24/7 digital assistant utilizing advanced natural language processing to deliver real-time, context-aware support within a sleek UI.
                </p>
                <a href="#" className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                  View Case Study
                  <span className="block w-8 h-[1px] bg-black group-hover:w-16 transition-all duration-300"></span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee Skills Section */}
      <section className="bg-black text-white py-24 overflow-hidden border-t border-neutral-900 border-b">
        <div className="marquee-container whitespace-nowrap flex w-[200%]">
          <div className="marquee-inner flex text-6xl md:text-9xl font-bold uppercase tracking-tighter opacity-20">
            <span className="px-8">React</span> — <span className="px-8">Next.js</span> — <span className="px-8">TypeScript</span> — <span className="px-8">Node.js</span> — <span className="px-8">MongoDB</span> — <span className="px-8">Python</span> — <span className="px-8">PyTorch</span> —
            {/* Duplicated for seamless loop */}
            <span className="px-8">React</span> — <span className="px-8">Next.js</span> — <span className="px-8">TypeScript</span> — <span className="px-8">Node.js</span> — <span className="px-8">MongoDB</span> — <span className="px-8">Python</span> — <span className="px-8">PyTorch</span> —
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-black text-white py-32 px-6 md:px-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-[10vw] font-bold tracking-tighter leading-none uppercase mb-8 hover:text-neutral-500 transition-colors cursor-pointer">
          Let's Talk.
        </h2>
        <a href="mailto:NaveedAbs31@gmail.com" className="font-mono text-lg uppercase tracking-widest border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all">
          NaveedAbs31@gmail.com
        </a>
        <div className="mt-32 text-xs font-mono uppercase tracking-widest text-neutral-600 flex gap-8">
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}