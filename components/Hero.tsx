"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    
    // Decrypt Effect State
    const roles = [
        "Web Developer", 
        "Software Developer", 
        "App Developer", 
        "AI Engineer"
    ];
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayChars, setDisplayChars] = useState<{ char: string; isReal: boolean }[]>([]);

    // Cipher / Decrypt Logic
    useEffect(() => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\\\/[]{}—=+*^?#_";
        const targetWord = roles[roleIndex];
        let iteration = 0;
        let intervalId: NodeJS.Timeout;

        const startDecrypt = () => {
            clearInterval(intervalId);
            
            intervalId = setInterval(() => {
                setDisplayChars(
                    targetWord
                        .split("")
                        // THIS LINE fixes the length issue! 
                        // It limits the visible characters to stay just ahead of the locked letters
                        .slice(0, Math.ceil(iteration + 2)) 
                        .map((letter, index) => {
                            // Lock in the real letter
                            if (index < iteration) {
                                return { char: targetWord[index], isReal: true };
                            }
                            // Keep spaces as spaces to prevent word shifting
                            if (targetWord[index] === " ") {
                                return { char: " ", isReal: true };
                            }
                            
                            // Otherwise, show a random chaotic character
                            return { 
                                char: characters[Math.floor(Math.random() * characters.length)], 
                                isReal: false 
                            };
                        })
                );

                if (iteration >= targetWord.length) {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        setRoleIndex((prev) => (prev + 1) % roles.length);
                    }, 3000); // Pause for 3 seconds
                }

                iteration += 1 / 3; 
            }, 30);
        };

        startDecrypt();

        return () => clearInterval(intervalId);
    }, [roleIndex]);

    // Grammar check for "a" vs "an"
    const currentRole = roles[roleIndex];
    const article = /^[AEIOU]/i.test(currentRole) ? "an" : "a";

    useGSAP(() => {
        // FIXED INITIAL FLASH: Using fromTo overrides the initial CSS state seamlessly
        gsap.fromTo(".hero-reveal", 
            { 
                y: 50, 
                opacity: 0 
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                delay: 0.2
            }
        );

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            containerRef.current.style.setProperty('--mouse-x', `${x}px`);
            containerRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, { scope: containerRef });

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center"
            style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
        >
            {/* --- INTERACTIVE BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-lime)]/5 blur-[120px] rounded-full pointer-events-none" />
                
                <div 
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"
                    style={{
                        maskImage: `radial-gradient(circle 600px at var(--mouse-x) var(--mouse-y), black 0%, transparent 80%)`,
                        WebkitMaskImage: `radial-gradient(circle 600px at var(--mouse-x) var(--mouse-y), black 0%, transparent 80%)`,
                    }}
                />
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center text-center mt-16">
                
                {/* Note: Added "opacity-0" to all hero-reveal elements to prevent the loading flash */}
                
                {/* Availability Pill */}
                <div className="hero-reveal opacity-0 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 md:mb-12">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-lime)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-lime)]"></span>
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)]">
                        Online
                    </span>
                </div>

                {/* Massive Typography */}
                <div className="hero-reveal opacity-0 mb-4 w-full">
                    <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.85] tracking-[-0.04em] text-white">
                        SYED NAVEED.
                    </h1>
                </div>

                {/* Dynamic Decrypt Role */}
                <div className="hero-reveal opacity-0 h-10 md:h-14 mb-6">
                    <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white flex items-center justify-center gap-2">
                        I am {article}
                        <span className="font-mono ml-2 flex items-center">
                            {displayChars.map((item, i) => (
                                <span 
                                    key={i} 
                                    className={`transition-colors duration-100 ${
                                        item.isReal ? "text-[var(--color-lime)]" : "text-white opacity-90"
                                    }`}
                                >
                                    {item.char === " " ? "\u00A0" : item.char}
                                </span>
                            ))}
                        </span>
                    </h2>
                </div>

                {/* Subtitle */}
                <p className="hero-reveal opacity-0 text-sm md:text-lg text-[var(--color-muted)] max-w-2xl mb-12 leading-relaxed font-light">
                    Architecting scalable full-stack infrastructure and building intelligent ecosystems from the ground up.
                </p>

                {/* Call to Actions */}
                <div className="hero-reveal opacity-0 flex flex-col sm:flex-row items-center gap-5">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 rounded-2xl bg-[var(--color-lime)] text-black font-semibold text-sm tracking-[0.15em] flex items-center gap-3 overflow-hidden transition-transform hover:scale-[1.02]"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            EXPLORE SYSTEMS
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white text-sm tracking-[0.15em] hover:border-white/30 hover:bg-white/10 transition-all"
                    >
                        INITIATE CONTACT
                    </a>
                </div>
            </div>
        </section>
    );
}