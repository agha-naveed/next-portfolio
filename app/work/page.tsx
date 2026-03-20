"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: "01", name: "Vextor IDE", type: "AI Infrastructure", stack: "Electron / PyTorch", color: "#3b82f6", slug: "vextor" },
    { id: "02", name: "Lenmi Store", type: "E-Commerce", stack: "MERN Stack", color: "#a855f7", slug: "lenmi-store" },
    { id: "03", name: "Context Bot", type: "NLP Microservice", stack: "FastAPI / React", color: "#10b981", slug: "context-bot" },
];

export default function WorkIndex() {
    const container = useRef<HTMLDivElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useGSAP(() => {
        const hasVisited = sessionStorage.getItem("work_index_visited");

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
                    sessionStorage.setItem("work_index_visited", "true");
                }
            });
            loadTl.to(".loader-counter", { innerHTML: 100, duration: 2, snap: { innerHTML: 1 } })
                .to(".loader-door-left", { xPercent: -100, duration: 1.2, ease: "expo.inOut" })
                .to(".loader-door-right", { xPercent: 100, duration: 1.2, ease: "expo.inOut" }, "<")
                .to(loaderRef.current, { display: "none" })
                .add(animatePageIn);
        }

        const lenis = new Lenis({ duration: 1.2 });
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));

        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15 });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15 });
        window.addEventListener("mousemove", (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        });

        return () => lenis.destroy();
    }, { scope: container });

    return (
        <main ref={container} className={`bg-black text-[#EAEAEA] min-h-screen font-sans selection:bg-white selection:text-black cursor-none overflow-x-hidden ${!isLoaded ? "overflow-hidden h-screen" : ""}`}>

            {/* CUSTOM CURSOR */}
            <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* APERTURE LOADER */}
            <div ref={loaderRef} className="fixed inset-0 z-[9999] flex pointer-events-none bg-black">
                <div className="loader-door-left w-1/2 h-full border-r border-neutral-900 flex justify-end items-center px-10">
                    <div className="font-mono text-5xl font-bold uppercase tracking-tighter text-white">WORK</div>
                </div>
                <div className="loader-door-right w-1/2 h-full border-l border-neutral-900 flex justify-start items-center px-10">
                    <div className="font-mono text-5xl font-bold uppercase tracking-tighter text-white"><span className="loader-counter">0</span>%</div>
                </div>
            </div>

            {/* GLOBAL GRID LINES */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="grid-line-x absolute top-20 left-0 w-full h-[1px] bg-neutral-900 origin-left"></div>
                <div className="grid-line-y absolute top-0 left-12 w-[1px] h-full bg-neutral-900 origin-top hidden md:block"></div>
                <div className="grid-line-y absolute top-0 right-12 w-[1px] h-full bg-neutral-900 origin-top hidden md:block"></div>
            </div>

            {/* NAVIGATION */}
            <nav className="fixed top-0 w-full h-20 px-12 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md">
                <a href="/" className="group hover-target flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors">
                    <FiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" /> Index
                </a>
                <div className="mask-reveal font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Total_Deployments: {projects.length}
                </div>
            </nav>

            {/* PAGE HEADER */}
            <header className="relative pt-40 pb-20 px-12 md:px-24 max-w-[120rem] mx-auto border-b border-neutral-900">
                <div className="mask-reveal font-mono text-xs uppercase tracking-[0.5em] text-neutral-600 mb-8">
          // BROWSE_ARCHIVE
                </div>
                <h1 className="mask-reveal text-[10vw] font-bold tracking-tighter uppercase leading-[0.8]">
                    All <br /> <span className="text-neutral-700">Deployments.</span>
                </h1>
            </header>

            {/* PROJECT LIST INDEX */}
            <section className="relative z-10">
                {projects.map((proj, i) => (
                    <a
                        key={proj.id}
                        href={`/work/${proj.slug}`}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group block border-b border-neutral-900 hover:bg-white transition-colors duration-500 overflow-hidden relative"
                    >
                        <div className="max-w-[120rem] mx-auto grid grid-cols-1 md:grid-cols-12 items-center py-16 px-12 md:px-24 relative z-10 mix-blend-difference text-white">
                            <div className="md:col-span-1 font-mono text-sm opacity-40">{proj.id}</div>
                            <div className="md:col-span-6">
                                <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter group-hover:italic transition-all duration-500">
                                    {proj.name}
                                </h2>
                            </div>
                            <div className="md:col-span-3 flex flex-col gap-1">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{proj.type}</span>
                                <span className="text-sm font-medium uppercase">{proj.stack}</span>
                            </div>
                            <div className="md:col-span-2 flex justify-end">
                                <FiArrowUpRight className="text-4xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all" />
                            </div>
                        </div>

                        {/* Dynamic Background Image Reveal on Hover */}
                        <div
                            className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ${hoveredIndex === i ? 'opacity-20' : 'opacity-0'}`}
                            style={{ backgroundColor: proj.color }}
                        >
                            {/* Replace with <img src="..." /> for actual project visuals */}
                            <div className="w-full h-full flex items-center justify-center font-mono text-[15vw] font-black opacity-10">
                                {proj.name.split(" ")[0].toUpperCase()}
                            </div>
                        </div>
                    </a>
                ))}
            </section>

            {/* FOOTER */}
            <footer className="py-24 px-12 text-center border-t border-neutral-900">
                <a href="mailto:NaveedAbs31@gmail.com" className="hover-target group flex flex-col items-center">
                    <span className="font-mono text-xs uppercase tracking-[0.5em] text-neutral-600 mb-6 block">Ready for integration?</span>
                    <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-white hover:text-neutral-500 transition-colors">
                        Start A Project
                    </h2>
                </a>
            </footer>

            <div className="py-10 px-12 border-t border-neutral-900 flex justify-between font-mono text-[10px] text-neutral-800 uppercase tracking-widest">
                <span>© 2026 Syed Naveed Abbas</span>
                <span>Operational // Remote</span>
            </div>
        </main>
    );
}