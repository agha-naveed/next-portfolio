"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FiArrowLeft, FiTerminal, FiCpu, FiCode, FiBookOpen, FiDownload, FiLayout } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function DeveloperBio() {
    const container = useRef<HTMLDivElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useGSAP(() => {
        const hasVisited = sessionStorage.getItem("dev_bio_visited");

        const animatePageIn = () => {
            const tl = gsap.timeline();
            tl.fromTo(".grid-line-x", { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.1 })
                .fromTo(".grid-line-y", { scaleY: 0 }, { scaleY: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.1 }, "-=1.5")
                .from(".bio-reveal", { y: 60, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power4.out" }, "-=0.8");
        };

        if (hasVisited) {
            setIsLoaded(true);
            gsap.set(loaderRef.current, { display: "none" });
            animatePageIn();
        } else {
            const loadTl = gsap.timeline({
                onComplete: () => {
                    setIsLoaded(true);
                    sessionStorage.setItem("dev_bio_visited", "true");
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

        const reveals = gsap.utils.toArray<HTMLElement>(".scroll-reveal");
        reveals.forEach((el) => {
            gsap.from(el, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 85%" }
            });
        });

        return () => lenis.destroy();
    }, { scope: container });

    return (
        <main ref={container} className={`bg-black text-[#EAEAEA] min-h-screen font-sans selection:bg-white selection:text-black cursor-none overflow-x-hidden ${!isLoaded ? "overflow-hidden h-screen" : ""}`}>

            <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"></div>

            <div ref={loaderRef} className="fixed inset-0 z-[9999] flex pointer-events-none bg-black">
                <div className="loader-door-left w-1/2 h-full border-r border-neutral-900 flex justify-end items-center px-10">
                    <div className="font-mono text-5xl font-bold uppercase tracking-tighter text-white">ARCHITECT</div>
                </div>
                <div className="loader-door-right w-1/2 h-full border-l border-neutral-900 flex justify-start items-center px-10">
                    <div className="font-mono text-5xl font-bold uppercase tracking-tighter text-white"><span className="loader-counter">0</span>%</div>
                </div>
            </div>

            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="grid-line-x absolute top-20 left-0 w-full h-[1px] bg-neutral-900 origin-left"></div>
                <div className="grid-line-y absolute top-0 left-12 w-[1px] h-full bg-neutral-900 origin-top hidden md:block"></div>
                <div className="grid-line-y absolute top-0 right-12 w-[1px] h-full bg-neutral-900 origin-top hidden md:block"></div>
            </div>

            <nav className="fixed top-0 w-full h-20 px-12 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md">
                <a href="/" className="group hover-target flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors">
                    <FiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" /> Index
                </a>
                <div className="hidden md:block font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                    SYST_USR: SYED_NAVEED_ABBAS // PRV_LEVEL: ADMIN
                </div>
            </nav>

            {/* --- HEADER --- */}
            <header className="relative pt-48 pb-20 px-12 md:px-24 max-w-[120rem] mx-auto border-b border-neutral-900">
                <div className="bio-reveal font-mono text-xs uppercase tracking-[0.5em] text-blue-500 mb-8">
          // PERSONNEL_RECORD_026
                </div>
                <h1 className="bio-reveal text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12">
                    The <br /> <span className="text-neutral-700 font-normal italic">Developer.</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                    <p className="bio-reveal text-2xl md:text-4xl font-light leading-tight text-white max-w-xl">
                        I engineer digital environments where <span className="font-medium">mathematical precision</span> meets <span className="font-medium italic">intuitive logic.</span>
                    </p>
                    <div className="bio-reveal flex flex-col justify-end md:items-end gap-6">
                        <button className="hover-target group flex items-center gap-4 px-8 py-4 border border-neutral-800 hover:bg-white hover:text-black transition-all font-mono text-xs uppercase tracking-widest">
                            Download CV <FiDownload className="text-lg group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </header>

            {/* --- CORE LOGS SECTION --- */}
            <section className="relative px-12 md:px-24 max-w-[120rem] mx-auto py-32">

                {/* LOG 01: Education */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40 scroll-reveal">
                    <div className="lg:col-span-4">
                        <span className="font-mono text-xs text-neutral-600 uppercase tracking-[0.3em]">Entry_01</span>
                        <h2 className="text-4xl font-bold uppercase tracking-tighter mt-4">Academic Path</h2>
                    </div>
                    <div className="lg:col-span-8 border-l border-neutral-900 pl-12">
                        <h3 className="text-2xl font-medium mb-4 uppercase tracking-tight text-blue-500">BS Computer Science</h3>
                        <p className="font-mono text-sm text-neutral-500 mb-8">Final Year Focus // University Level</p>
                        <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                            Specializing in Artificial Intelligence and System Architecture. My academic career is defined by pushing the limits of the standard curriculum, focusing heavily on how high-level web frameworks can interface with low-level C++ engines for localized machine learning.
                        </p>
                    </div>
                </div>

                {/* LOG 02: Teaching */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40 scroll-reveal">
                    <div className="lg:col-span-4">
                        <span className="font-mono text-xs text-neutral-600 uppercase tracking-[0.3em]">Entry_02</span>
                        <h2 className="text-4xl font-bold uppercase tracking-tighter mt-4">Knowledge <br /> Transfer</h2>
                    </div>
                    <div className="lg:col-span-8 border-l border-neutral-900 pl-12">
                        <div className="flex items-center gap-4 mb-4">
                            <FiBookOpen className="text-2xl text-blue-500" />
                            <h3 className="text-2xl font-medium uppercase tracking-tight text-white">Technical Instructor</h3>
                        </div>
                        <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                            I actively bridge the gap for aspiring developers by instructing on the MERN stack and modern JavaScript ecosystems. Teaching has refined my ability to explain complex architectural concepts with clinical clarity—a skill I bring to every engineering meeting.
                        </p>
                    </div>
                </div>

                {/* LOG 03: System Loadout (Visual Stack) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-reveal">
                    <div className="lg:col-span-4">
                        <span className="font-mono text-xs text-neutral-600 uppercase tracking-[0.3em]">Entry_03</span>
                        <h2 className="text-4xl font-bold uppercase tracking-tighter mt-4">System <br /> Loadout</h2>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border border-neutral-900 bg-neutral-950/50 hover-target transition-colors">
                            <FiCpu className="text-3xl text-blue-500 mb-6" />
                            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">Inference & Logic</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed uppercase tracking-tighter">
                                Python // PyTorch // Llama.cpp // C++ // Node.js // MongoDB
                            </p>
                        </div>
                        <div className="p-8 border border-neutral-900 bg-neutral-950/50 hover-target transition-colors">
                            <FiLayout className="text-3xl text-blue-500 mb-6" />
                            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">Interface & Flow</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed uppercase tracking-tighter">
                                Next.js // React // TypeScript // Electron // GSAP // Framer
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            {/* --- FOOTER CTA --- */}
            <footer className="relative py-32 border-t border-neutral-900 bg-black text-center">
                <a href="mailto:NaveedAbs31@gmail.com" className="hover-target group flex flex-col items-center">
                    <span className="font-mono text-xs uppercase tracking-[0.5em] text-neutral-600 mb-8 block">Open for collaboration</span>
                    <h2 className="text-7xl md:text-[10vw] font-bold uppercase tracking-tighter text-white hover:text-blue-500 transition-colors">
                        Connect.
                    </h2>
                </a>
            </footer>

            <div className="py-10 px-12 border-t border-neutral-900 flex justify-between font-mono text-[10px] text-neutral-800 uppercase tracking-widest">
                <span>© 2026 Syed Naveed Abbas</span>
                <span>Developer_Bio_Final_v1.0</span>
            </div>
        </main>
    );
}