"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* ── FLAT 3D ISOMETRIC ROOM (Unchanged) ── */
function IsoRoom({ mouseX, mouseY }: { mouseX: number, mouseY: number }) {
    // ... Keep your existing IsoRoom component code exactly as it is ...
    const rotX = (mouseY - 0.5) * 12;
    const rotY = (mouseX - 0.5) * -16;

    return (
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '900px' }}>
            <div className="absolute w-[300px] h-[300px] border border-[var(--color-purple)]/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-50 border-dashed" />
            <div className="absolute top-[18%] left-[12%] z-10 w-3 h-3 rounded-full bg-[var(--color-lime)] orbit-1" />
            <div className="absolute bottom-[22%] right-[10%] z-10 w-2 h-2 rounded-sm bg-[var(--color-lime)] rotate-45 orbit-2" />

            <div className="float-anim z-20" style={{ transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`, transition: 'transform 0.08s linear', transformStyle: 'preserve-3d' }}>
                <svg width="380" height="360" viewBox="0 0 380 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="190,200 320,270 190,340 60,270" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1" />
                    {[0, 1, 2, 3].map(i => [0, 1, 2, 3].map(j => {
                        const cx = 190 + (i - j) * 32; const cy = 270 + (i + j) * 17;
                        return <polygon key={`${i}-${j}`} points={`${cx},${cy - 17} ${cx + 32},${cy} ${cx},${cy + 17} ${cx - 32},${cy}`} fill="none" stroke="#222" strokeWidth="0.5" />;
                    }))}
                    <polygon points="60,130 190,60 190,200 60,270" fill="#141414" stroke="#2a2a2a" strokeWidth="1" />
                    <polygon points="190,60 320,130 320,270 190,200" fill="#111111" stroke="#2a2a2a" strokeWidth="1" />
                    <polygon points="60,130 190,60 320,130 190,200" fill="#0e0e0e" stroke="#2a2a2a" strokeWidth="1" />
                    <polygon points="130,235 220,282 220,245 130,200" fill="#1f1208" stroke="#3a2510" strokeWidth="1" />
                    <polygon points="130,200 220,245 270,218 180,173" fill="#2a1a0a" stroke="#3a2510" strokeWidth="1" />
                    <rect x="163" y="148" width="70" height="50" rx="3" fill="#090909" stroke="#333" strokeWidth="1.5" />
                    <rect x="166" y="151" width="64" height="44" rx="2" fill="#0d0d14" />
                    <text x="172" y="165" fontFamily="var(--font-mono)" fontSize="6" fill="var(--color-lime)">&lt;/&gt;</text>
                    <line x1="190" y1="60" x2="190" y2="200" stroke="var(--color-lime)" strokeWidth="1.5" />
                    <circle cx="190" cy="60" r="3" fill="var(--color-lime)" />
                </svg>
            </div>
        </div>
    );
}

/* ── HERO SECTION ── */
export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
    const containerRef = useRef<HTMLElement>(null);

    // GSAP Entry Animations
    useGSAP(() => {
        gsap.from(".gsap-stagger", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });

        gsap.from(".gsap-fade", {
            y: 20,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.8
        });
    }, { scope: containerRef });

    // 3D Room Mouse Tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = document.getElementById('hero-zone')?.getBoundingClientRect();
            if (rect) {
                setMousePos({
                    x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
                    y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" ref={containerRef} className="min-h-screen pt-20 relative overflow-hidden bg-[var(--color-bg)]">
            <div
                id="hero-zone"
                className="max-w-7xl mx-auto px-8 h-full min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 items-center gap-10"
            >
                {/* Left Content */}
                <div className="z-10 relative">
                    <div className="gsap-stagger flex items-center gap-3 mb-6">
                        <span className="font-mono text-sm text-[var(--color-muted)] tracking-widest">Hi, I'm Aman</span>
                        <span className="text-xl">👋</span>
                    </div>

                    <h1 className="font-sans font-bold leading-tight mb-6 text-5xl md:text-[clamp(2.8rem,5vw,4.2rem)]">
                        <div className="gsap-stagger text-white">I craft digital</div>
                        <div className="gsap-stagger text-white">experiences</div>
                        <div className="gsap-stagger text-[var(--color-lime)]">people love.</div>
                    </h1>

                    <p className="gsap-stagger text-sm text-[var(--color-muted)] leading-relaxed max-w-[420px] mb-10 font-light">
                        Frontend Developer focused on building modern, fast and interactive websites with clean code and great UX.
                    </p>

                    <div className="gsap-stagger flex items-center gap-4">
                        <a href="#projects" className="btn-lime inline-flex items-center gap-3 px-6 py-3 rounded-lg text-sm tracking-[0.05em]">
                            VIEW MY WORK
                            <div className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center">→</div>
                        </a>
                        <a href="#" className="btn-outline inline-flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-medium tracking-[0.05em]">
                            DOWNLOAD CV
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M7 1v8m0 0L4 6m3 3l3-3M1 11h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="gsap-fade flex items-center gap-4 mt-12">
                        <div className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)]" />
                        </div>
                        <span className="scroll-text text-[0.6rem] text-[#444] tracking-[0.2em] font-mono">
                            SCROLL TO EXPLORE
                        </span>
                    </div>
                </div>

                {/* Right 3D Room */}
                <div className="h-[500px] relative z-10 gsap-fade">
                    <IsoRoom mouseX={mousePos.x} mouseY={mousePos.y} />

                    {/* Social Links Desktop */}
                    <div className="hidden md:flex absolute right-[-10px] top-1/2 -translate-y-1/2 flex-col gap-3">
                        {['GH', 'LI', 'TW'].map((s) => (
                            <a key={s} href="#" className="w-9 h-9 rounded-full border border-[var(--color-border)] bg-white/5 flex items-center justify-center text-[var(--color-muted)] text-[0.6rem] font-mono hover:text-white hover:border-[var(--color-lime)] transition-colors">
                                {s}
                            </a>
                        ))}
                    </div>

                    {/* Availability Badge */}
                    <div className="absolute bottom-5 right-10 px-3.5 py-2 rounded-lg bg-[#111]/95 border border-[var(--color-border)] flex flex-col gap-1 shadow-lg">
                        <span className="font-mono text-[0.6rem] text-[var(--color-muted)] tracking-widest">Available for</span>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-lime)] shadow-[0_0_6px_var(--color-lime)]" />
                            <span className="text-xs text-white font-medium">Freelance</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}