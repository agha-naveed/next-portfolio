"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FiArrowUpRight, FiArrowLeft, FiTerminal, FiCpu, FiMonitor } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
    const container = useRef<HTMLElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // ==========================================
        // 1. SMOOTH SCROLLING ENGINE (Lenis)
        // ==========================================
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        // ==========================================
        // 2. CUSTOM CURSOR TRACKING
        // ==========================================
        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3.out" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3.out" });

        const moveCursor = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };
        window.addEventListener("mousemove", moveCursor);

        const interactiveElements = document.querySelectorAll("a, button, .hover-target");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                gsap.to(cursorRef.current, { scale: 3.5, duration: 0.3, ease: "power2.out" });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });

        // ==========================================
        // 3. PAGE ENTRANCE & PARALLAX ANIMATIONS
        // ==========================================
        const tl = gsap.timeline();

        // Grid Lines Reveal
        tl.fromTo(".grid-line-x", { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.1 })
            .fromTo(".grid-line-y", { scaleY: 0 }, { scaleY: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.1 }, "-=1.5")
            // Mask Reveal for Headers
            .fromTo(".mask-reveal",
                { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 20 },
                { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0, duration: 1, ease: "power3.out", stagger: 0.1 },
                "-=0.8"
            )
            .from(".fade-up", { opacity: 0, y: 30, duration: 1, stagger: 0.1, ease: "power2.out" }, "-=0.5");

        // Main Image Parallax Effect
        gsap.to(".parallax-img", {
            yPercent: 20, // Moves the image slower than the scroll speed
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-container",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        // Reveal Content Blocks on Scroll
        const scrollBlocks = gsap.utils.toArray<HTMLElement>(".scroll-block");
        scrollBlocks.forEach((block) => {
            gsap.from(block, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: block,
                    start: "top 85%",
                }
            });
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            lenis.destroy();
        };
    }, { scope: container });

    return (
        <main
            ref={container}
            style={{
                "--bg": "#050505",
                "--text": "#EAEAEA",
                "--border": "rgba(255,255,255,0.1)",
                "--muted": "rgba(255,255,255,0.5)",
                "--surface": "rgba(255,255,255,0.03)",
                backgroundColor: "var(--bg)",
                color: "var(--text)"
            } as React.CSSProperties}
            className="min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden cursor-none"
        >

            {/* CUSTOM CURSOR */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
            ></div>

            {/* GLOBAL GRID LINES */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="grid-line-x absolute top-20 left-0 w-full h-[1px] bg-[var(--border)] origin-left"></div>
                <div className="grid-line-y absolute top-0 left-6 md:left-12 w-[1px] h-full bg-[var(--border)] origin-top hidden md:block"></div>
                <div className="grid-line-y absolute top-0 right-6 md:right-12 w-[1px] h-full bg-[var(--border)] origin-top hidden md:block"></div>
            </div>

            {/* NAVIGATION (Return to Index) */}
            <nav className="fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-md">
                <a href="/" className="hover-target flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--text)] transition-colors cursor-none">
                    <FiArrowLeft className="text-base" /> Return to Index
                </a>
                <div className="flex gap-8 font-mono text-xs uppercase tracking-[0.2em]">
                    <a href="#" className="hover-target hover:text-white text-[var(--text)] flex items-center gap-2 transition-colors cursor-none">
                        Source Code <FiArrowUpRight />
                    </a>
                </div>
            </nav>

            {/* ========================================
        PROJECT HERO (Metadata & Title)
        ========================================
      */}
            <header className="relative z-10 pt-32 px-6 md:px-12 max-w-[120rem] mx-auto pb-12">

                {/* Massive Project Title */}
                <div className="flex flex-col justify-end pt-[10vh] pb-12">
                    <div className="font-mono text-sm uppercase tracking-widest text-blue-500 mb-8 mask-reveal flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        System Deployment 01
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="mask-reveal text-[13vw] lg:text-[11vw] font-black tracking-tighter leading-[0.85] uppercase text-[var(--text)]">
                            Vextor
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="mask-reveal text-[13vw] lg:text-[11vw] font-black tracking-tighter leading-[0.85] uppercase text-[var(--muted)]">
                            IDE.
                        </h1>
                    </div>
                </div>

                {/* Project Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-y border-[var(--border)] py-8 font-mono text-xs uppercase tracking-widest gap-8 mt-12">
                    <div className="fade-up flex flex-col gap-2">
                        <span className="text-[var(--muted)]">Client / Context</span>
                        <span className="text-[var(--text)] font-medium">BS CS Capstone Project</span>
                    </div>
                    <div className="fade-up flex flex-col gap-2">
                        <span className="text-[var(--muted)]">Role</span>
                        <span className="text-[var(--text)] font-medium">Sole Architect</span>
                    </div>
                    <div className="fade-up flex flex-col gap-2">
                        <span className="text-[var(--muted)]">Timeline</span>
                        <span className="text-[var(--text)] font-medium">2025 — Present</span>
                    </div>
                    <div className="fade-up flex flex-col gap-2 md:text-right">
                        <span className="text-[var(--muted)]">Status</span>
                        <span className="text-[var(--text)] font-medium">In Development</span>
                    </div>
                </div>
            </header>

            {/* ========================================
        HERO PARALLAX MEDIA
        ========================================
      */}
            <section className="parallax-container relative z-10 w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-[var(--border)]">
                <div className="absolute inset-[-20%] w-[140%] h-[140%]">
                    <div className="parallax-img w-full h-full bg-[#0a0a0a] flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-blue-900/10"></div>
                        {/* Replace this div with an actual <img src="..." className="w-full h-full object-cover" /> */}
                        <FiMonitor className="text-[10rem] text-[var(--muted)] opacity-20" />
                        <span className="absolute bottom-10 right-10 font-mono text-xs text-[var(--muted)] border border-[var(--border)] px-4 py-2 bg-[#050505]/50 backdrop-blur">VEXTOR_WORKSPACE_RENDER.PNG</span>
                    </div>
                </div>
            </section>

            {/* ========================================
        THE BRIEF (Abstract)
        ========================================
      */}
            <section className="relative z-10 px-6 md:px-12 max-w-[120rem] mx-auto py-32 border-b border-[var(--border)]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    <div className="md:col-span-4 scroll-block">
                        <h2 className="font-mono text-sm uppercase tracking-widest text-[var(--muted)] border-b border-[var(--border)] pb-4 mb-6">The Abstract</h2>
                    </div>
                    <div className="md:col-span-8 scroll-block">
                        <p className="text-3xl md:text-5xl font-light leading-tight text-[var(--text)] hover-target cursor-none mb-10">
                            Modern coding assistants rely entirely on cloud APIs, exposing proprietary codebases to third-party servers and introducing latency. Vextor IDE solves this by bringing the intelligence offline.
                        </p>
                        <p className="text-xl text-[var(--muted)] leading-relaxed max-w-3xl">
                            Engineered as a standalone desktop application, Vextor natively mounts PyTorch models and utilizes llama.cpp for local inference. It acts as a privacy-first, zero-latency coding assistant that runs entirely on the developer's hardware, redefining the boundaries of localized software engineering.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========================================
        TECHNICAL ARCHITECTURE (Sticky Layout)
        ========================================
      */}
            <section className="relative z-10 px-6 md:px-12 max-w-[120rem] mx-auto py-32 border-b border-[var(--border)]">

                {/* Architecture Block 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-32">
                    <div className="lg:col-span-4 sticky top-32 scroll-block">
                        <FiTerminal className="text-4xl text-blue-500 mb-6" />
                        <h2 className="text-4xl font-medium tracking-tighter uppercase text-[var(--text)] mb-4">Application<br />Shell</h2>
                        <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] leading-relaxed">
                            Electron.js & React 18 Architecture
                        </p>
                    </div>
                    <div className="lg:col-span-8 flex flex-col gap-12 scroll-block">
                        <div className="w-full h-[40vh] bg-[#0a0a0a] border border-[var(--border)] flex items-center justify-center">
                            <span className="font-mono text-sm text-[var(--muted)]">[ React Virtual DOM Diagram ]</span>
                        </div>
                        <p className="text-lg text-[var(--muted)] leading-relaxed">
                            The core shell is built using Electron.js to achieve deep operating system access necessary for local file system manipulation and process management. The presentation layer utilizes React 18, leveraging its concurrent rendering features to ensure the UI remains entirely unblocked and at 60fps, even when the underlying C++ engine is processing heavy LLM inference tasks.
                        </p>
                    </div>
                </div>

                {/* Architecture Block 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-4 sticky top-32 scroll-block">
                        <FiCpu className="text-4xl text-emerald-500 mb-6" />
                        <h2 className="text-4xl font-medium tracking-tighter uppercase text-[var(--text)] mb-4">Inference<br />Engine</h2>
                        <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] leading-relaxed">
                            PyTorch & llama.cpp Integration
                        </p>
                    </div>
                    <div className="lg:col-span-8 flex flex-col gap-12 scroll-block">
                        <div className="w-full h-[40vh] bg-[#0a0a0a] border border-[var(--border)] flex items-center justify-center">
                            <span className="font-mono text-sm text-[var(--muted)]">[ C++ Bindings Diagram ]</span>
                        </div>
                        <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
                            The critical innovation of Vextor IDE is its absolute independence from the cloud. Instead of sending HTTP requests to an OpenAI or Anthropic endpoint, the IDE spawns a background C++ process running highly optimized quantized GGUF models via llama.cpp.
                        </p>
                        <p className="text-lg text-[var(--muted)] leading-relaxed">
                            This engine communicates with the Electron main process via Inter-Process Communication (IPC) streams, delivering real-time autocomplete suggestions and code refactoring logic directly to the Monaco Editor instance without a single byte of code leaving the local machine.
                        </p>

                        {/* Tech Stack Tags specific to this section */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            {["C++", "PyTorch", "GGUF Formats", "Node IPC", "Monaco Editor"].map(tech => (
                                <span key={tech} className="px-4 py-2 border border-[var(--border)] font-mono text-xs text-[var(--text)]">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* ========================================
        NEXT PROJECT (Footer CTA)
        ========================================
      */}
            <section className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-[120rem] mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-8 block">Proceed to Next Deployment</span>
                <a href="/work/lenmi-store" className="hover-target group flex flex-col items-center cursor-none">
                    <h2 className="text-[10vw] md:text-[8vw] font-black tracking-tighter leading-none uppercase text-[var(--text)] group-hover:text-purple-500 transition-colors duration-500">
                        Lenmi Store
                    </h2>
                    <div className="mt-12 flex items-center gap-4 text-2xl md:text-4xl font-medium tracking-tighter uppercase text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
                        Initiate Link <FiArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </div>
                </a>
            </section>

        </main>
    );
}