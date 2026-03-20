"use client";
import my from "../../public/c0fa56f3-01f6-471f-828c-2d21a79f5181.png"
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FiArrowLeft, FiCpu, FiActivity, FiLayout } from "react-icons/fi";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function DeveloperBio() {
    const container = useRef<HTMLDivElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useGSAP(() => {
        const hasVisited = sessionStorage.getItem("dev_cmd_visited");

        const animatePageIn = () => {
            const tl = gsap.timeline();
            tl.fromTo(".grid-line-x", { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.1 })
                .fromTo(".grid-line-y", { scaleY: 0 }, { scaleY: 1, duration: 1.5, ease: "expo.inOut", stagger: 0.1 }, "-=1.5")
                .from(".cmd-reveal", { y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power4.out" }, "-=0.5");
        };

        if (hasVisited) {
            setIsLoaded(true);
            gsap.set(loaderRef.current, { display: "none" });
            animatePageIn();
        } else {
            const loadTl = gsap.timeline({
                onComplete: () => {
                    setIsLoaded(true);
                    sessionStorage.setItem("dev_cmd_visited", "true");
                }
            });
            loadTl.to(".loader-counter", { innerHTML: 100, duration: 2, snap: { innerHTML: 1 } })
                .to(".loader-door-left", { xPercent: -100, duration: 1.2, ease: "expo.inOut" })
                .to(".loader-door-right", { xPercent: 100, duration: 1.2, ease: "expo.inOut" }, "<")
                .to(loaderRef.current, { display: "none" })
                .add(animatePageIn);
        }

        const interactives = document.querySelectorAll("a, button, .hover-target");
        interactives.forEach(el => {
            el.addEventListener("mouseenter", () => gsap.to(cursorRef.current, { scale: 3.5, duration: 0.3 }));
            el.addEventListener("mouseleave", () => gsap.to(cursorRef.current, { scale: 1, duration: 0.3 }));
        });

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
        <main ref={container} className={`bg-[#050505] text-[#FAFAFA] min-h-screen font-sans selection:bg-blue-600 selection:text-white cursor-none ${!isLoaded ? "overflow-hidden h-screen" : ""}`}>

            {/* CUSTOM CURSOR */}
            <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* APERTURE LOADER */}
            <div ref={loaderRef} className="fixed inset-0 z-9999 flex pointer-events-none bg-black">
                <div className="loader-door-left w-1/2 h-full border-r border-neutral-800 flex justify-end items-center px-10">
                    <div className="font-mono text-5xl font-black uppercase tracking-tighter text-white">CORE</div>
                </div>
                <div className="loader-door-right w-1/2 h-full border-l border-neutral-800 flex justify-start items-center px-10">
                    <div className="font-mono text-5xl font-black uppercase tracking-tighter text-white"><span className="loader-counter">0</span>%</div>
                </div>
            </div>

            {/* GRID INFRASTRUCTURE */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="grid-line-x absolute top-20 left-0 w-full h-px bg-neutral-900 origin-left"></div>
                <div className="grid-line-y absolute top-0 left-[50%] w-px h-full bg-neutral-900 origin-top hidden lg:block"></div>
            </div>

            <nav className="fixed top-0 w-full h-20 px-8 flex justify-between items-center z-50 mix-blend-difference">
                <Link href="/" className="hover-target flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors">
                    <FiArrowLeft className="text-lg" /> TERMINAL_EXIT
                </Link>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600 hidden md:block">
                    USR: NAVEED_ABS // PK_026
                </div>
            </nav>

            <section className="flex flex-col lg:flex-row min-h-screen">

                <div className="w-full lg:w-1/2 h-[70vh] lg:h-screen lg:sticky lg:top-0 p-8 flex flex-col justify-end border-b lg:border-b-0 border-neutral-900 overflow-hidden group">

                    <div className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 transition-all duration-1000">
                        <Image
                            src={my}
                            className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                            alt="Syed Naveed Abbas"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
                    </div>

                    <div className="relative z-10 pb-12">
                        <span className="cmd-reveal font-mono text-xs uppercase tracking-[0.5em] text-blue-500 mb-4 block">// PERSONNEL_V_026</span>
                        <h1 className="cmd-reveal text-[12vw] lg:text-[7vw] font-bold tracking-tighter uppercase leading-[0.8] mb-4">
                            Naveed <br /> <span className="text-neutral-600">Abbas.</span>
                        </h1>
                        <div className="cmd-reveal flex items-center gap-4 mt-8">
                            <button className="hover-target px-6 py-3 border border-neutral-800 font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                Download_CV.pdf
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: SCROLLABLE DATA */}
                <div className="w-full lg:w-1/2 p-8 lg:p-24 lg:pt-48 flex flex-col gap-32">

                    {/* Section 01: The Bio */}
                    <div className="cmd-reveal space-y-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-600 border-b border-neutral-900 pb-4 w-fit">01 // The Architect</h2>
                        <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-white">
                            Currently finalizing my <span className="italic text-neutral-400">BS Computer Science</span> degree, specializing in localized AI infrastructure.
                        </p>
                        <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                            I am focused on the "Severance Strategy"—developing standalone applications that execute heavy-duty AI tasks natively. By integrating llama.cpp and PyTorch into Electron environments, I bridge the gap between high-level web interfaces and low-level system performance.
                        </p>
                    </div>

                    {/* Section 02: Technical Loadout */}
                    <div className="cmd-reveal space-y-12">
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-600 border-b border-neutral-900 pb-4 w-fit">02 // System Loadout</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-8 bg-neutral-900/30 border border-neutral-900 hover:border-blue-900 transition-colors">
                                <FiCpu className="text-2xl text-blue-500 mb-6" />
                                <h4 className="font-bold uppercase tracking-tighter text-lg mb-2">Back-End Logic</h4>
                                <p className="text-xs text-neutral-500 font-mono uppercase">Node.js // Python // C++ // MongoDB // llama.cpp</p>
                            </div>
                            <div className="p-8 bg-neutral-900/30 border border-neutral-900 hover:border-blue-900 transition-colors">
                                <FiLayout className="text-2xl text-blue-500 mb-6" />
                                <h4 className="font-bold uppercase tracking-tighter text-lg mb-2">Front-End Frame</h4>
                                <p className="text-xs text-neutral-500 font-mono uppercase">Next.js // React // Electron // Tailwind // GSAP</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 03: Career Logs */}
                    <div className="cmd-reveal space-y-8">
                        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-neutral-600 border-b border-neutral-900 pb-4 w-fit">03 // Deployment Logs</h2>

                        <div className="group flex flex-col gap-2 py-8 border-b border-neutral-900">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-bold uppercase group-hover:text-blue-500 transition-colors">Technical Instructor</h3>
                                <span className="font-mono text-[10px] text-neutral-600">2024 — 2026</span>
                            </div>
                            <p className="text-sm text-neutral-500 leading-relaxed max-w-lg">
                                Instructing students on full-stack MERN architectures and modern system design principles.
                            </p>
                        </div>

                        <div className="group flex flex-col gap-2 py-8 border-b border-neutral-900">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-bold uppercase group-hover:text-blue-500 transition-colors">Software Engineer</h3>
                                <span className="font-mono text-[10px] text-neutral-600">2023 — Present</span>
                            </div>
                            <p className="text-sm text-neutral-500 leading-relaxed max-w-lg">
                                Engineering scalable e-commerce infrastructures and localized NLP microservices.
                            </p>
                        </div>
                    </div>

                    {/* FOOTER AREA */}
                    <footer className="py-24 border-t border-neutral-900 flex flex-col items-start gap-8">
                        <div className="flex items-center gap-4 text-neutral-500 font-mono text-[10px] uppercase">
                            <FiActivity className="text-blue-500 animate-pulse" /> Finalizing Connection Sequence
                        </div>
                        <a href="mailto:NaveedAbs31@gmail.com" className="hover-target text-[6vw] lg:text-[4vw] font-black uppercase tracking-tighter leading-none hover:text-blue-500 transition-colors">
                            Initialize <br /> Contact.
                        </a>
                        <div className="flex gap-8 mt-12 font-mono text-[10px] text-neutral-700 uppercase tracking-widest">
                            <span>© 2026 Karachi, PK</span>
                            <a href="#" className="hover:text-white transition-colors">Github</a>
                            <a href="#" className="hover:text-white transition-colors">Linkedin</a>
                        </div>
                    </footer>

                </div>
            </section>

        </main>
    );
}