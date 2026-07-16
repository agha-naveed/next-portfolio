"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    const experiences = [
        {
            role: "Full-Stack Developer",
            company: "Aura Technologies",
            date: "Oct 2025 – Present",
            points: [
                "Architected and developed scalable full-stack applications with focus on security, performance, and maintainable system design.",
                "Engineered backend APIs, authentication systems, RBAC permissions, caching layers, and database optimization for production-scale applications.",
                "Worked across SQL and NoSQL database systems, designing efficient schemas and optimizing data access patterns for application requirements.",
                "Developed and scaled AI-driven web features by deploying machine learning models through FastAPI and integrating them with Next.js frontend systems.",
                "Collaborated with developers to deliver responsive, production-ready software solutions."
            ]
        },
        {
            role: "Web Development Instructor",
            company: "Aura Tech Academy",
            date: "Mar 2025 – Present",
            points: [
                "Delivered hands-on, project-based training in the MERN Stack, Next.js, and Tailwind CSS, successfully guiding students through the transition from basic HTML/CSS to modern, component-driven React development.",
                "Taught the complete workflow of building dynamic Next.js applications and deploying them live using Vercel.",
                "Guided students in Git/GitHub workflows, debugging, and modern career paths.",
                "Supervised and mentored Final Year Project (FYP) students across multiple domains including MERN Stack, Android Development, and Deep Learning."
            ]
        },
        {
            role: "Web Development Instructor",
            company: "Next Planner Academy",
            date: "Apr 2025 – Jul 2025",
            points: [
                "Delivered foundational training in HTML, CSS, and JavaScript through practical, hands-on learning.",
                "Introduced learners to core web development concepts including layouts, styling, DOM manipulation, and responsive design.",
                "Mentored students in developing logical thinking and problem-solving techniques to debug code and address complex layout challenges independently."
            ]
        },
        {
            role: "Python Instructor",
            company: "CodeHub",
            date: "Oct 2024 – Feb 2025",
            points: [
                "Taught foundational Python programming, emphasizing compiler mechanics, Python's core advantages, and problem-solving techniques.",
                "Guided students in utilizing Python's built-in packages to develop practical terminal-based applications and logical scripts."
            ]
        }
    ];

    const activeData = experiences[activeTab];

    return (
        <section
            id="experience"
            className="relative py-24 md:py-32 bg-[#050505] border-t border-white/5 overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-[var(--color-lime)]/5 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
                
                {/* Section Header */}
                <div className="mb-12 md:mb-20">
                    <div className="text-[11px] tracking-[0.3em] text-[var(--color-lime)] font-mono mb-6 uppercase">
                        04 · Professional Trajectory
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                        Where I&apos;ve <span className="text-white/30">Worked.</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    
                    {/* LEFT: Tab Navigation */}
                    <div className="flex md:flex-col overflow-x-auto md:overflow-visible no-scrollbar w-full md:w-[30%] lg:w-[25%] border-b md:border-b-0 md:border-l border-white/10 shrink-0">
                        {experiences.map((exp, index) => {
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`relative flex items-center px-6 py-4 md:py-5 text-sm font-mono tracking-widest whitespace-nowrap md:whitespace-normal transition-all duration-300 ${
                                        isActive 
                                            ? "text-[var(--color-lime)] bg-white/5" 
                                            : "text-white/40 hover:bg-white/[0.02] hover:text-white/80"
                                    }`}
                                >
                                    {/* Active Highlight Line */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeExperienceTab"
                                            className="absolute bottom-0 md:bottom-auto md:top-0 left-0 h-[2px] md:h-full w-full md:w-[2px] bg-[var(--color-lime)]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {exp.company}
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT: Content Area */}
                    <div className="w-full md:w-[70%] lg:w-[75%] min-h-[350px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                {/* Role Header */}
                                <div className="mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {activeData.role}
                                    </h3>
                                    <div className="font-mono text-sm tracking-widest text-[var(--color-lime)] uppercase mb-4">
                                        @ {activeData.company}
                                    </div>
                                    <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/50">
                                        {activeData.date}
                                    </span>
                                </div>

                                {/* Bullet Points */}
                                <ul className="flex flex-col gap-5">
                                    {activeData.points.map((point, i) => (
                                        <motion.li 
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: i * 0.1 }}
                                            className="flex items-start gap-4 text-sm md:text-base text-white/70 leading-relaxed"
                                        >
                                            <span className="mt-1.5 text-[var(--color-lime)] shrink-0">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </span>
                                            <span>{point}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
            
            {/* CSS to hide scrollbar on mobile horizontal scrolling tabs */}
            <style dangerouslySetInnerHTML={{__html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </section>
    );
}