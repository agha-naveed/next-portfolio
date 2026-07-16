"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ProjectRow = ({ project, index }: { project: any; index: number }) => {
    const [currentImageIdx, setCurrentImageIdx] = useState(0);
    const isEven = index % 2 === 0;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIdx((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center py-16 md:py-24 border-b border-white/5 last:border-0`}>
            
            {/* Image Showcase Side */}
            <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full lg:w-3/5 relative group"
            >
                <div className={`relative overflow-hidden shadow-2xl ${
                    project.isMobileView 
                        ? "w-[280px] md:w-[320px] aspect-[9/19] mx-auto rounded-[2.5rem] border-8 border-white/10 bg-black" 
                        : "w-full aspect-[16/10] rounded-2xl border border-white/10 bg-[#09090c]"
                }`}>
                    
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={`${project.num}-${currentImageIdx}`}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={project.images[currentImageIdx]}
                                alt={`${project.title} screenshot ${currentImageIdx + 1}`}
                                fill
                                priority={currentImageIdx === 0 && index === 0}
                                className="object-cover object-top"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Gallery Navigation */}
                    {project.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/90 transition-all duration-300 z-20 backdrop-blur-md shadow-xl hover:scale-110">
                                ←
                            </button>
                            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/90 transition-all duration-300 z-20 backdrop-blur-md shadow-xl hover:scale-110">
                                →
                            </button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/50 px-3 py-2 rounded-full backdrop-blur-md border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {project.images.map((_: any, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setCurrentImageIdx(idx); }}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentImageIdx === idx ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/80'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </motion.div>

            {/* Text & Details Side */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="w-full lg:w-2/5 flex flex-col relative"
            >
                {/* Massive Background Number */}
                <div 
                    className={`absolute top-0 ${isEven ? 'left-0' : 'right-0 lg:left-0'} -translate-y-1/2 text-[10rem] md:text-[14rem] font-bold font-mono opacity-[0.03] pointer-events-none select-none`}
                    style={{ color: project.color }}
                >
                    {project.num}
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-8 h-[1px] bg-white/20" />
                        <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: project.color }}>
                            {project.category}
                        </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {project.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8">
                        {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="text-[11px] tracking-widest uppercase font-mono px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:border-white/30 transition-all cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-3 text-sm font-bold tracking-widest text-white hover:text-[var(--color-lime)] transition-colors group"
                    >
                        EXPLORE ARCHITECTURE
                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default function Projects() {
    const projects = [
        {
            num: "01",
            title: "Vextor AI",
            category: "DESKTOP IDE",
            desc: "An intelligent desktop IDE ecosystem built entirely from scratch. Crafted for speed, focus, and local offline coding workflows with highly optimized native performance.",
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
            title: "EchoUp",
            category: "SOCIAL PLATFORM",
            desc: "A modern web social media platform featuring built-in AI capabilities, immersive interactions, and a highly scalable backend architecture designed to handle thousands of concurrent events.",
            tags: ["Next.js", "PostgreSQL", "Redis", "Drizzle ORM", "FastAPI"],
            images: [
                "/echo-up.webp",
                "/echo-up-2.webp",
                "/echo-up-3.webp"
            ],
            color: "#00e5ff",
            isMobileView: false
        },
        {
            num: "03",
            title: "Online Quran Academy",
            category: "WEBSITE",
            desc: "A highly scalable mobile marketplace infrastructure featuring complex state management, real-time communications, and secure checkout pipelines.",
            tags: ["Next.Js", "TailwindCSS"],
            images: [
                "/lenmi.webp",
                "/lenmi-2.webp"
            ],
            color: "#ffaa00",
            isMobileView: false
        }
    ];

    return (
        <section id="projects" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5 selection:bg-[var(--color-lime)] selection:text-black">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">

                {/* Section Header */}
                <div className="mb-16 md:mb-24">
                    <div className="text-[11px] tracking-[0.3em] text-white/40 font-mono mb-6 uppercase">
                        02 · System Architecture & Products
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                        Engineered <span className="text-white/30">To Impress.</span>
                    </h2>
                </div>

                {/* Alternating Project Rows */}
                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectRow key={project.num} project={project} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}