"use client";

import { motion } from "framer-motion";

export default function AchievementMarquee() {
    // The items to loop. We include decorative separators (✦) between items.
    const achievements = [
        "🏆 1st Place Speed Programming — Mega Tech Explosion 2025",
        "✦",
        "🏆 2x Tech Expo Speed Programming Champion",
        "✦",
        "👨‍🏫 Web Dev Instructor — Aura Tech Academy",
        "✦",
        "👨‍💻 Python Instructor — Codehub Skardu",
        "✦",
    ];

    return (
        <div className="relative w-full bg-[var(--color-lime)] py-3 overflow-hidden flex items-center border-y border-white/10 shadow-[0_0_40px_rgba(184,255,0,0.1)]">
            
            {/* Left and Right Fade Masks for a cleaner entrance/exit */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
            <motion.div
                className="flex items-center whitespace-nowrap"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 25, // Adjust this to make it faster or slower
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{ width: "fit-content" }}
            >
                {/* 
                  We map over the array TWICE to create the seamless infinite loop.
                  When the first half scrolls out of view, the second half is perfectly in place.
                */}
                {[...achievements, ...achievements].map((item, index) => (
                    <span
                        key={index}
                        className={`mx-4 md:mx-6 text-sm md:text-base font-mono uppercase tracking-widest ${
                            item === "✦" 
                                ? "text-black/30" // Styling for the separator
                                : "text-black font-bold" // Styling for the text
                        }`}
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}