"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".hero-left", {
            x: -60,
            opacity: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "power4.out",
        });

        gsap.from(".hero-right", {
            x: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
        });

        gsap.to(".floating-orb", {
            y: -18,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, { scope: containerRef });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = document.getElementById("hero-zone")?.getBoundingClientRect();

            if (!rect) return;

            setMousePos({
                x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
                y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen bg-[var(--color-bg)] overflow-hidden"
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[45%] h-full bg-white/[0.015] border-l border-[var(--color-border)]" />

                <div className="absolute top-[8%] left-[8%] w-[320px] h-[320px] rounded-full bg-[var(--color-lime)]/10 blur-[120px]" />
                <div className="absolute bottom-[5%] right-[8%] w-[300px] h-[300px] rounded-full bg-[var(--color-purple)]/10 blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)
                        `,
                        backgroundSize: "72px 72px",
                    }}
                />
            </div>

            <div
                id="hero-zone"
                className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-screen grid lg:grid-cols-[0.95fr_1.05fr] items-center"
            >
                {/* LEFT SIDE */}
                <div className="py-24 lg:pr-12">
                    {/* Label */}
                    <div className="hero-left inline-flex items-center gap-3 mb-8">
                        <div className="w-10 h-[1px] bg-[var(--color-lime)]" />
                        <span className="font-mono text-xs tracking-[0.35em] uppercase text-[var(--color-muted)]">
                            FULL STACK ENGINEER
                        </span>
                    </div>

                    {/* Main Title */}
                    <div className="mb-8">
                        <h1 className="hero-left text-[clamp(3.2rem,8vw,7.2rem)] font-bold leading-[0.9] tracking-[-0.05em]">
                            <span className="block text-white">SYED</span>
                            <span className="block text-white">NAVEED</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-lime)] to-white">
                                ABBAS
                            </span>
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="hero-left max-w-xl text-base md:text-lg leading-relaxed text-[var(--color-muted)] mb-10">
                        I design and build high-performance web platforms,
                        scalable backend systems, AI-powered products, and
                        premium user experiences that feel futuristic.
                    </p>

                    {/* Expertise Tags */}
                    <div className="hero-left flex flex-wrap gap-3 mb-12">
                        {[
                            "Frontend",
                            "Backend",
                            "AI Systems",
                            "Mobile Apps"
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white/[0.02] text-sm text-[var(--color-muted)] hover:border-[var(--color-lime)] hover:text-white transition-all"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hero-left flex flex-wrap gap-4 mb-14">
                        <a
                            href="#projects"
                            className="group px-8 py-4 rounded-2xl bg-[var(--color-lime)] text-black font-semibold text-sm tracking-[0.18em] flex items-center gap-3 hover:scale-[1.03] transition-all"
                        >
                            VIEW PROJECTS
                            <span className="group-hover:translate-x-1 transition-transform">
                                →
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-2xl border border-[var(--color-border)] text-white text-sm tracking-[0.18em] hover:border-[var(--color-lime)] hover:text-[var(--color-lime)] transition-all"
                        >
                            CONTACT ME
                        </a>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="relative h-full min-h-screen flex items-center justify-center">
                    {/* Profile Main Card */}
                    <div className="hero-right relative z-20 w-[340px] md:w-[420px]">
                        {/* Outer Glass */}
                        <div className="relative hover:scale-102 transition-all rounded-[2.8rem] border border-white/10 bg-white/3 backdrop-blur-2xl p-4 shadow-[0_25px_100px_rgba(0,0,0,0.55)]">
                            {/* Top Bar */}
                            <div className="flex items-center justify-between mb-4 px-2">
                                <span className="text-[10px] font-mono tracking-[0.35em] text-[var(--color-muted)]">
                                    DIGITAL IDENTITY
                                </span>

                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
                                </div>
                            </div>

                            <div className="relative rounded-[2.2rem] overflow-hidden aspect-4/5 bg-black">
                                <Image
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="/dp.png"
                                    src="/dp.png"
                                    alt="Syed Naveed"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover object-top"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <div className="text-xl font-semibold text-white">
                                        Syed Naveed
                                    </div>
                                    <div className="text-sm text-[var(--color-muted)]">
                                        Full Stack Developer
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Orb */}
                        <div className="floating-orb absolute -top-8 -right-8 w-24 h-24 rounded-full border border-[var(--color-lime)]/30 bg-[var(--color-lime)]/10 backdrop-blur-xl flex items-center justify-center">
                            <div className="text-xs font-mono text-[var(--color-lime)] tracking-[0.2em]">
                                OPEN
                            </div>
                        </div>
                    </div>

                    {/* Side Cards */}
                    <div className="hero-right absolute left-8 top-[18%] hidden xl:block">
                        <div className="rounded-2xl border border-[var(--color-border)] bg-[#111]/80 backdrop-blur-md p-4">
                            <div className="text-[10px] font-mono tracking-[0.25em] text-[var(--color-muted)] mb-2">
                                SPECIALIZED IN
                            </div>
                            <div className="space-y-2 text-sm">
                                <div>• Modern Web Apps</div>
                                <div>• AI Integration</div>
                                <div>• Backend Systems</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-right absolute right-8 bottom-[18%] hidden xl:block">
                        <div className="rounded-2xl border border-[var(--color-border)] bg-[#111]/80 backdrop-blur-md p-4">
                            <div className="text-[10px] font-mono tracking-[0.25em] text-[var(--color-muted)] mb-2">
                                CURRENT STATUS
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[var(--color-lime)]" />
                                <span className="text-sm">Available for work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}