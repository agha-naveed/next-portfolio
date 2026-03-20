"use client";

import { useRef, use } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FiArrowUpRight, FiArrowLeft, FiTerminal, FiCpu, FiMonitor, FiCode, FiZap } from "react-icons/fi";
import { notFound } from "next/navigation";
import { projectsData } from "../../lib/data";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = use(params);

    const project = projectsData.find((p) => p.slug === slug);
    if (!project) notFound();

    const container = useRef<HTMLElement>(null);
    const horizontalSection = useRef<HTMLDivElement>(null);
    const horizontalTrigger = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set(".page-content", { autoAlpha: 1 });
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3.out" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3.out" });

        const moveCursor = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };
        window.addEventListener("mousemove", moveCursor);

        const interactives = document.querySelectorAll("a, button, .hover-target");
        interactives.forEach((el) => {
            el.addEventListener("mouseenter", () => gsap.to(cursorRef.current, { scale: 3.5, duration: 0.3 }));
            el.addEventListener("mouseleave", () => gsap.to(cursorRef.current, { scale: 1, duration: 0.3 }));
        });

        const tl = gsap.timeline();
        tl.fromTo(".grid-line-x", { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.1 })
            .fromTo(".grid-line-y", { scaleY: 0 }, { scaleY: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.1 }, "-=1.5")
            .fromTo(".mask-reveal",
                { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 20 },
                { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0, duration: 1, ease: "power3.out", stagger: 0.1 },
                "-=0.8"
            )
            .from(".fade-up", { opacity: 0, y: 30, duration: 1, stagger: 0.1, ease: "power2.out" }, "-=0.5");

        gsap.to(".parallax-img", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-container",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        const panels = gsap.utils.toArray(".horizontal-panel");
        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontalTrigger.current,
                pin: true,
                scrub: 1,
                end: () => `+=${horizontalSection.current?.offsetWidth}`,
                invalidateOnRefresh: true,
            }
        });

        const scrollBlocks = gsap.utils.toArray<HTMLElement>(".scroll-block");
        scrollBlocks.forEach((block) => {
            gsap.from(block, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: block, start: "top 85%" }
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
            className="bg-black text-[#EAEAEA] min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden cursor-none"
        >
            <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"></div>

            <div className="page-content invisible">
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="grid-line-x absolute top-20 left-0 w-full h-px bg-neutral-900 origin-left"></div>
                    <div className="grid-line-y absolute top-0 left-6 md:left-12 w-px h-full bg-neutral-900 origin-top hidden md:block"></div>
                    <div className="grid-line-y absolute top-0 right-6 md:right-12 w-px h-full bg-neutral-900 origin-top hidden md:block"></div>
                </div>

                <nav className="fixed top-0 w-full h-20 px-6 md:px-12 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md">
                    <a href="/" className="hover-target flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors cursor-none">
                        <FiArrowLeft className="text-base" /> Return to Index
                    </a>
                    <div className="flex gap-8 font-mono text-xs uppercase tracking-[0.2em]">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover-target text-white flex items-center gap-2 hover:text-blue-500 transition-colors cursor-none"
                        >
                            Launch System <FiArrowUpRight className="text-lg" />
                        </a>
                    </div>
                </nav>

                <header className="relative z-10 pt-32 px-6 md:px-12 max-w-480 mx-auto pb-12">
                    <div className="flex flex-col justify-end pt-[10vh] pb-12">
                        <div className="font-mono text-sm uppercase tracking-widest text-neutral-500 mb-8 mask-reveal flex items-center gap-3">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            Deployment Logs
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="mask-reveal text-[13vw] lg:text-[11vw] font-bold tracking-tighter leading-[0.85] uppercase text-white">
                                {project.title.split(" ")[0]}
                            </h1>
                        </div>
                        <div className="overflow-hidden text-right">
                            <h1 className="mask-reveal text-[13vw] lg:text-[11vw] font-bold tracking-tighter leading-[0.85] uppercase text-neutral-800">
                                {project.title.split(" ").slice(1).join(" ") || "System."}
                            </h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 border-y border-neutral-900 py-8 font-mono text-xs uppercase tracking-widest gap-8 mt-12">
                        <div className="fade-up flex flex-col gap-2">
                            <span className="text-neutral-600">Context</span>
                            <span className="text-white font-medium">{project.type}</span>
                        </div>
                        <div className="fade-up flex flex-col gap-2">
                            <span className="text-neutral-600">Role</span>
                            <span className="text-white font-medium">{project.role}</span>
                        </div>
                        <div className="fade-up flex flex-col gap-2">
                            <span className="text-neutral-600">Timeline</span>
                            <span className="text-white font-medium">{project.timeline}</span>
                        </div>
                        <div className="fade-up flex flex-col gap-2 md:text-right">
                            <span className="text-neutral-600">Core Stack</span>
                            <span className="text-white font-medium">{project.stack[0]} + {project.stack[1]}</span>
                        </div>
                    </div>

                    <div className="fade-up mt-12 flex">
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover-target flex items-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-colors cursor-none"
                        >
                            Execute Live Environment <FiArrowUpRight className="text-lg" />
                        </Link>
                    </div>
                </header>

                <section className="parallax-container relative z-10 w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-neutral-900 bg-neutral-950">
                    <div className="absolute inset-[-20%] w-[140%] h-[140%]">
                        <div className="parallax-img w-full h-full flex items-center justify-center relative bg-neutral-900">
                            {/* ADD YOUR COVER VIDEO HERE:
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
                                <source src={`/videos/${project.slug}-hero.mp4`} type="video/mp4" />
                            </video>
                            */}
                            <div className="absolute inset-0 bg-black/20 z-10"></div>
                            <span className="absolute bottom-10 right-10 font-mono text-xs text-neutral-500 border border-neutral-800 px-4 py-2 bg-black/50 backdrop-blur z-20 uppercase tracking-widest">
                                {project.slug.toUpperCase()}_ENV_VIEW.MP4
                            </span>
                        </div>
                    </div>
                </section>

                <section ref={horizontalTrigger} className="relative z-10 overflow-hidden bg-[#0a0a0a]">
                    <div ref={horizontalSection} className="flex h-screen w-[300vw]">

                        <div className="horizontal-panel w-screen h-full flex items-center justify-center p-6 md:p-24 border-r border-neutral-900">
                            <div className="w-full h-full bg-black border border-neutral-800 rounded-sm flex flex-col relative overflow-hidden group">
                                {/* ADD DIAGRAM IMAGE HERE:
                                <img src={`/images/${project.slug}-schema.jpg`} className="w-full h-full object-contain opacity-40" />
                                */}
                                <div className="m-auto flex flex-col items-center gap-6">
                                    <FiTerminal className="text-7xl text-neutral-800" />
                                    <span className="font-mono text-xs text-neutral-600 uppercase tracking-[1em]">Architecture_Schema</span>
                                </div>
                                <div className="absolute bottom-10 left-10 text-left pointer-events-none">
                                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2 block">Phase 01</span>
                                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">The Challenge</h2>
                                </div>
                            </div>
                        </div>

                        <div className="horizontal-panel w-screen h-full flex items-center justify-center p-6 md:p-24 border-r border-neutral-900">
                            <div className="w-full h-full bg-black border border-neutral-800 rounded-sm flex items-center justify-center relative overflow-hidden">
                                {/* ADD SCREEN RECORDING VIDEO HERE:
                                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
                                    <source src={`/videos/${project.slug}-demo.mp4`} type="video/mp4" />
                                </video>
                                */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <FiMonitor className="text-white/5 text-[20vw]" />
                                    <span className="absolute font-mono text-[10px] text-white/30 uppercase tracking-[1em]">Runtime_Execution</span>
                                </div>
                                <div className="absolute bottom-10 left-10 text-left pointer-events-none">
                                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2 block">Phase 02</span>
                                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">System Logic</h2>
                                </div>
                            </div>
                        </div>

                        <div className="horizontal-panel w-screen h-full flex flex-col justify-center px-6 md:px-24">
                            <FiCode className="text-6xl mb-8 text-neutral-500" />
                            <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 mb-4 block">Phase 03</span>
                            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 text-white leading-none">The<br />Solution</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-neutral-900 pt-12">
                                <p className="text-xl text-neutral-400 font-light leading-relaxed">
                                    {project.solution}
                                </p>
                                <div className="flex flex-wrap gap-2 h-fit">
                                    {project.stack.map((t, index) => (
                                        <span key={`${t}-${index}`} className="px-4 py-2 border border-neutral-800 font-mono text-[10px] uppercase text-white">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative z-10 px-6 md:px-12 max-w-480 mx-auto py-32 border-b border-neutral-900">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                        <div className="md:col-span-4 scroll-block">
                            <h2 className="font-mono text-sm uppercase tracking-widest text-neutral-600 border-b border-neutral-900 pb-4 mb-6">Abstract</h2>
                        </div>
                        <div className="md:col-span-8 scroll-block">
                            <p className="text-3xl md:text-5xl font-light leading-tight text-white hover-target cursor-none mb-12">
                                {project.overview}
                            </p>
                            <div className="p-8 border border-neutral-900 bg-neutral-950/50">
                                <h4 className="font-mono text-xs text-neutral-500 uppercase mb-4">Challenge Summary</h4>
                                <p className="text-lg text-neutral-400 leading-relaxed">{project.challenge}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-480 mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-700 mb-8 block">Proceed to Next System</span>
                    <a href={`/work/${project.nextProject}`} className="hover-target group flex flex-col items-center cursor-none">
                        <h2 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none uppercase text-white group-hover:text-neutral-600 transition-colors duration-700">
                            {project.nextProjectName}
                        </h2>
                        <div className="mt-12 flex items-center gap-4 text-2xl font-mono uppercase tracking-widest text-neutral-600 group-hover:text-white transition-colors">
                            Deploy <FiArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </div>
                    </a>
                </footer>

                <div className="py-12 border-t border-neutral-900 px-6 md:px-12 flex justify-between font-mono text-[10px] text-neutral-800 uppercase tracking-[0.5em]">
                    <span>© 2026 Syed Naveed Abbas</span>
                    <span>Karachi // Pakistan</span>
                </div>
            </div>
        </main>
    );
}