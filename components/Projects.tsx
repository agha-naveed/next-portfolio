"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    // New state to track the active image inside the gallery
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    const projects = [
        {
            num: "01",
            title: "Vextor AI",
            category: "DESKTOP IDE",
            desc: "An intelligent desktop IDE ecosystem built entirely from scratch. Crafted for speed, focus, and local offline coding workflows.",
            tags: ["React", "Electron.js", "GoLang", "Rust", "TailwindCSS"],
            images: [
                "/vextor/vextor.webp",
                "/vextor/vextor1.webp",
                "/vextor/vextor2.webp",
                "/vextor/vextor3.webp",
                "/vextor/vextor4.webp",
            ],
            color: "#84ff00",
            isMobileView: false
        },
        {
            num: "02",
            title: "Vextra",
            category: "MOBILE APP",
            desc: "An intelligent chat application featuring automated, ML-powered emergency messaging to trusted user contacts.",
            tags: ["Kotlin", "Java", "Express.js", "Cloudinary"],
            images: [
                "/vextra.webp",
                "/vextra-2.webp"
            ],
            color: "#ff4ecd",
            isMobileView: true
        },
        {
            num: "03",
            title: "EchoUp",
            category: "SOCIAL PLATFORM",
            desc: "A modern web social media platform featuring built-in AI capabilities, immersive interactions, and highly scalable architecture.",
            tags: ["Next.js", "PostgreSQL", "Redis", "Next Auth"],
            images: [
                "/echo-up.webp",
                "/echo-up-2.webp",
                "/echo-up-3.webp"
            ],
            color: "#00e5ff",
            isMobileView: false
        },
        {
            num: "04",
            title: "Lenmi Store",
            category: "E-COMMERCE",
            desc: "A highly scalable marketplace infrastructure featuring complex state management and secure checkout pipelines.",
            tags: ["React Native", "MongoDB", "Node.js", "Tailwind"],
            images: [
                "/lenmi.webp",
                "/lenmi-2.webp"
            ],
            color: "#ffaa00",
            isMobileView: true
        },
        {
            num: "05",
            title: "Smart Safety Net",
            category: "IOT / OFFLINE",
            desc: "Offline Smart Tourist Safety System utilizing localized nodes for communication in remote regions.",
            tags: ["React", "Express.js", "WebSockets"],
            images: [
                "/safety-net.jpg",
                "/safety-net-2.jpg"
            ],
            color: "#64ffda",
            isMobileView: false
        }
    ];

    const activeProject = projects[activeIndex];

    // Handler to change projects and reset the image gallery to the first image
    const handleProjectChange = (index: number) => {
        setActiveIndex(index);
        setCurrentImageIdx(0);
    };

    // Handlers for the image gallery navigation
    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIdx((prev) => (prev + 1) % activeProject.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIdx((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
    };

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

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative min-h-[700px]">

                    {/* LEFT COLUMN: Interactive Project Roster */}
                    <div className="w-full lg:w-5/12 flex flex-col z-10">
                        {projects.map((project, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <div
                                    key={project.num}
                                    onMouseEnter={() => handleProjectChange(index)}
                                    onClick={() => handleProjectChange(index)}
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

                                    {/* Expandable Accordion Text */}
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

                    {/* RIGHT COLUMN: The Morphing Sticky Canvas with Gallery */}
                    <div className="hidden lg:block w-full lg:w-7/12 relative">
                        <div className="sticky top-32 w-full flex justify-center items-start pt-4">

                            <motion.div
                                layout
                                transition={{ duration: 0.6, type: "spring", bounce: 0.15 }}
                                className={`relative overflow-hidden flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.6)] ${activeProject.isMobileView
                                    ? "w-[320px] h-[650px] rounded-[3rem] border-8 border-white/10 bg-black"
                                    : "w-full aspect-[16/10] max-h-[600px] rounded-2xl border border-white/10 bg-[#09090c]"
                                    }`}
                            >
                                {/* Subtle internal glow */}
                                <motion.div
                                    animate={{ backgroundColor: activeProject.color }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 opacity-20 blur-[80px] pointer-events-none z-0"
                                />

                                {/* Browser Header */}
                                {!activeProject.isMobileView && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-10 shrink-0 border-b border-white/5 flex items-center px-4 bg-[#111] relative z-10"
                                    >
                                        <div className="flex gap-2">
                                            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                                        </div>
                                    </motion.div>
                                )}

                                {/* Image Crossfade Wrapper */}
                                <div className="flex-1 relative w-full h-full z-10 overflow-hidden bg-black/40 group">
                                    <AnimatePresence mode="popLayout">
                                        <motion.div
                                            // The key now includes the image index so Framer Motion knows when to animate the crossfade
                                            key={`${activeProject.num}-${currentImageIdx}`}
                                            initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                                            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                            exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="absolute inset-0 w-full h-full"
                                        >
                                            <Image
                                                src={activeProject.images[currentImageIdx]}
                                                alt={`${activeProject.title} screenshot ${currentImageIdx + 1}`}
                                                fill
                                                priority
                                                className="object-cover object-top"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Gallery Navigation Controls (Only show if there are multiple images) */}
                                    {activeProject.images.length > 1 && (
                                        <>
                                            {/* Left Arrow */}
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all duration-300 z-20 backdrop-blur-md"
                                            >
                                                ←
                                            </button>

                                            {/* Right Arrow */}
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/80 transition-all duration-300 z-20 backdrop-blur-md"
                                            >
                                                →
                                            </button>

                                            {/* Progress Dots */}
                                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/40 px-3 py-2 rounded-full backdrop-blur-md border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {activeProject.images.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setCurrentImageIdx(idx);
                                                        }}
                                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentImageIdx === idx ? 'w-4 bg-white' : 'bg-white/30 hover:bg-white/60'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Floating Action Button (View Project CTA) */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl transition-colors duration-300"
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = activeProject.color}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    <span className="text-xl -rotate-45">→</span>
                                </motion.button>

                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}