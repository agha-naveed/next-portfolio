"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = [
        {
            num: "01",
            title: "Vextor AI",
            category: "DESKTOP IDE",
            desc: "An intelligent desktop IDE ecosystem built entirely from scratch. Crafted for speed, focus, and local offline coding workflows.",
            tags: ["React", "Electron.js", "Node.js", "TypeScript"],
            image: "/vextor.jpg",
            color: "#84ff00",
            isMobileView: false
        },
        {
            num: "02",
            title: "Vextra",
            category: "MOBILE APP",
            desc: "An intelligent chat application featuring automated, ML-powered emergency messaging to trusted user contacts.",
            tags: ["Kotlin", "Java", "Express.js", "Cloudinary"],
            image: "/vextra.webp",
            color: "#ff4ecd",
            isMobileView: true
        },
        {
            num: "03",
            title: "EchoUp",
            category: "SOCIAL PLATFORM",
            desc: "A modern web social media platform featuring built-in AI capabilities, immersive interactions, and highly scalable architecture.",
            tags: ["Next.js", "PostgreSQL", "Redis", "Next Auth"],
            image: "/echo-up.webp",
            color: "#00e5ff",
            isMobileView: false
        },
        {
            num: "04",
            title: "Lenmi Store",
            category: "E-COMMERCE",
            desc: "A highly scalable marketplace infrastructure featuring complex state management and secure checkout pipelines.",
            tags: ["React Native", "MongoDB", "Node.js", "Tailwind"],
            image: "/lenmi.webp",
            color: "#ffaa00",
            isMobileView: true
        },
        {
            num: "05",
            title: "Smart Safety Net",
            category: "IOT / OFFLINE",
            desc: "Offline Smart Tourist Safety System utilizing localized nodes for communication in remote regions.",
            tags: ["React", "Express.js", "WebSockets"],
            image: "/safety-net.jpg",
            color: "#64ffda",
            isMobileView: false
        }
    ];

    const activeProject = projects[activeIndex];

    return (
        <section id="projects" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5 selection:bg-[var(--color-lime)] selection:text-black">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">

                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <div className="text-[11px] tracking-[0.3em] text-white/40 font-mono mb-6 uppercase">
                        02 · System Architecture & Products
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                        Engineered <span className="text-white/30">To Impress.</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* LEFT COLUMN: Interactive Project Roster */}
                    <div className="w-full lg:w-5/12 flex flex-col z-10">
                        {projects.map((project, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <div
                                    key={project.num}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group cursor-pointer py-8 pr-6 border-b border-white/5 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                                        }`}
                                >
                                    <div className="flex items-center gap-6">
                                        <span
                                            className="text-sm font-mono transition-colors duration-300"
                                            style={{ color: isActive ? project.color : 'rgba(255,255,255,0.5)' }}
                                        >
                                            {project.num}
                                        </span>
                                        <h3 className={`text-3xl md:text-4xl font-bold transition-transform duration-500 ease-out ${isActive ? 'translate-x-3 text-white' : 'text-white/80'
                                            }`}>
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Framer Motion Accordion Content */}
                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-6 pl-14">
                                                    <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-md">
                                                        {project.desc}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map(tag => (
                                                            <span
                                                                key={tag}
                                                                className="text-[10px] tracking-widest uppercase font-mono px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT COLUMN: Sticky Display Frame */}
                    <div className="hidden lg:block w-full lg:w-7/12">
                        <div className="sticky top-32 h-[650px] w-full rounded-[2rem] border border-white/10 bg-[#0a0a0e] overflow-hidden flex items-center justify-center p-12 shadow-2xl">

                            {/* Dynamic Ambient Glow */}
                            <motion.div
                                animate={{ backgroundColor: activeProject.color }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0 opacity-10 blur-[120px]"
                            />

                            {/* Image Swapper Container */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeProject.num}
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className={`relative ${activeProject.isMobileView
                                                ? 'w-[280px] aspect-[9/19]'
                                                : 'w-full max-w-[600px] aspect-[16/10]'
                                            } rounded-xl border border-white/10 bg-black/50 backdrop-blur-md overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] flex flex-col`}
                                    >
                                        {!activeProject.isMobileView && (
                                            <div className="h-8 shrink-0 border-b border-white/5 flex items-center px-4 bg-[#1a1a1a]">
                                                <div className="flex gap-2">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex-1 relative w-full bg-[#09090c]">
                                            <Image
                                                src={activeProject.image}
                                                alt={activeProject.title}
                                                fill
                                                priority
                                                className="object-cover object-top"
                                            />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Interactive Bottom CTA Overlay */}
                            <motion.div
                                className="absolute bottom-8 right-8 z-20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <button
                                    className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-xl transition-colors duration-300"
                                    style={{ '--hover-color': activeProject.color } as any}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = activeProject.color}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    <span className="text-2xl -rotate-45">→</span>
                                </button>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}