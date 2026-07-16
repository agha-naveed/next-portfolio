"use client";

import { motion } from "framer-motion";

export default function AchievementMarquee() {
    // Structured data for a cleaner, two-tone typography look
    const achievements = [
        { role: "1ST PLACE SPEED PROGRAMMING", location: "MEGA TECH EXPLOSION 2025" },
        { role: "2X SPEED PROGRAMMING CHAMPION", location: "TECH EXPO UB" },
        { role: "WEB DEV INSTRUCTOR", location: "AURA TECH ACADEMY" },
        { role: "PYTHON INSTRUCTOR", location: "CODEHUB SKARDU" },
    ];

    return (
        <div className="relative w-full bg-[#050505] py-5 overflow-hidden flex items-center border-y border-white/5">
            
            {/* Soft edge fade masks to blend into the dark background */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
            <motion.div
                className="flex items-center whitespace-nowrap"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 30, // Slightly slower for a more premium, deliberate feel
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{ width: "fit-content" }}
            >
                {/* Looping the array twice for the infinite scroll effect */}
                {[...achievements, ...achievements].map((item, index) => (
                    <div key={index} className="flex items-center">
                        
                        {/* The Text Block */}
                        <div className="flex items-center gap-3 px-6 md:px-10">
                            <span className="text-sm md:text-base font-bold tracking-widest text-white uppercase">
                                {item.role}
                            </span>
                            <span className="text-sm md:text-base font-mono tracking-widest text-[var(--color-lime)] uppercase opacity-80">
                                // {item.location}
                            </span>
                        </div>

                        {/* Glowing Orb Separator */}
                        <div className="flex items-center justify-center px-4">
                            <div className="relative w-2 h-2 rounded-full bg-white/20">
                                <div className="absolute inset-0 bg-white/40 blur-sm rounded-full" />
                            </div>
                        </div>

                    </div>
                ))}
            </motion.div>
        </div>
    );
}