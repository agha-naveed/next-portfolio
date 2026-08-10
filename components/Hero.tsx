"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useMotionTemplate,
} from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import texture from "@/public/text-texture.png";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    // =========================================================
    // SPOTLIGHT / BLUEPRINT
    // =========================================================

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 50,
        damping: 20,
        mass: 0.5,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 50,
        damping: 20,
        mass: 0.5,
    });

    const maskImage = useMotionTemplate`
        radial-gradient(
            500px circle at ${smoothX}px ${smoothY}px,
            black 0%,
            transparent 80%
        )
    `;

    // =========================================================
    // TEXTURE TEXT LENS
    // =========================================================

    const textX = useMotionValue(0);
    const textY = useMotionValue(0);

    const smoothTextX = useSpring(textX, {
        stiffness: 180,
        damping: 25,
        mass: 0.3,
    });

    const smoothTextY = useSpring(textY, {
        stiffness: 180,
        damping: 25,
        mass: 0.3,
    });

    const [textHovered, setTextHovered] = useState(false);

    const textRevealMask = useMotionTemplate`
        radial-gradient(
            circle 120px at ${smoothTextX}px ${smoothTextY}px,
            black 0%,
            black 55%,
            transparent 100%
        )
    `;

    // =========================================================
    // SECTION MOUSE
    // =========================================================

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: MouseEvent<HTMLElement>) {
        const rect = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - rect.left);
        mouseY.set(clientY - rect.top);
    }

    // =========================================================
    // TEXT MOUSE
    // =========================================================

    function handleTextMouseMove(e: MouseEvent<HTMLHeadingElement>) {
        if (!textRef.current) return;

        const rect = textRef.current.getBoundingClientRect();

        textX.set(e.clientX - rect.left);
        textY.set(e.clientY - rect.top);
    }

    // =========================================================
    // DECRYPT EFFECT
    // =========================================================

    const roles = [
        "System Architect",
        "AI Engineer",
        "Mobile Developer",
    ];

    const [roleIndex, setRoleIndex] = useState(0);

    const [
        displayChars,
        setDisplayChars,
    ] = useState<{ char: string; isReal: boolean }[]>([]);

    useEffect(() => {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\\\/[]{}—=+*^?#_";

        const targetWord = roles[roleIndex];

        let iteration = 0;

        let intervalId: ReturnType<typeof setInterval>;
        let timeoutId: ReturnType<typeof setTimeout>;

        const startDecrypt = () => {
            clearInterval(intervalId);

            intervalId = setInterval(() => {
                setDisplayChars(
                    targetWord.split("").map((letter, index) => {
                        if (index < iteration) {
                            return {
                                char: targetWord[index],
                                isReal: true,
                            };
                        }

                        if (letter === " ") {
                            return {
                                char: " ",
                                isReal: true,
                            };
                        }

                        return {
                            char:
                                characters[
                                    Math.floor(
                                        Math.random() *
                                            characters.length
                                    )
                                ],
                            isReal: false,
                        };
                    })
                );

                if (iteration >= targetWord.length) {
                    clearInterval(intervalId);

                    timeoutId = setTimeout(() => {
                        setRoleIndex(
                            (prev) => (prev + 1) % roles.length
                        );
                    }, 3000);
                }

                iteration += 1 / 3;
            }, 30);
        };

        startDecrypt();

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [roleIndex]);

    const currentRole = roles[roleIndex];

    const article = /^[AEIOU]/i.test(currentRole)
        ? "an"
        : "a";

    // =========================================================
    // GSAP INITIAL REVEAL
    // =========================================================

    useGSAP(
        () => {
            gsap.fromTo(
                ".hero-reveal",
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power2.out",
                    delay: 0.2,
                }
            );
        },
        {
            scope: containerRef,
        }
    );

    // =========================================================
    // RENDER
    // =========================================================

    return (
        <section
            id="home"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="
                relative
                min-h-screen
                bg-[#030303]
                overflow-hidden
                flex
                flex-col
                items-center
                justify-center
                selection:bg-[var(--color-lime)]
                selection:text-black
                pt-20
                cursor-crosshair
            "
        >
            {/* =====================================================
                HIDDEN BLUEPRINT LAYER
                ===================================================== */}

            <motion.div
                className="
                    absolute
                    inset-0
                    z-0
                    pointer-events-none
                "
                style={{
                    maskImage,
                    WebkitMaskImage: maskImage,
                }}
            >
                {/* Dark Blue / Lime glowing background */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-[var(--color-lime)]/10
                        via-[#00e5ff]/5
                        to-transparent
                        opacity-50
                    "
                />

                {/* Architectural Grid */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
                        bg-[size:4rem_4rem]
                    "
                />

                {/* Grid Intersection Marks */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)]
                        bg-[size:4rem_4rem]
                        [background-position:-0.5px_-0.5px]
                    "
                />

                {/* Technical Easter Eggs */}

                <div
                    className="
                        absolute
                        top-[20%]
                        left-[15%]
                        font-mono
                        text-[10px]
                        text-[var(--color-lime)]/30
                        tracking-widest
                        uppercase
                        rotate-90
                    "
                >
                    SYS_CORE :: ACTIVE
                </div>

                <div
                    className="
                        absolute
                        bottom-[30%]
                        right-[20%]
                        font-mono
                        text-[10px]
                        text-[#00e5ff]/30
                        tracking-widest
                        uppercase
                    "
                >
                    DATA_PIPELINE // VERCEL_EDGE
                </div>

                <div
                    className="
                        absolute
                        top-[40%]
                        right-[10%]
                        font-mono
                        text-[10px]
                        text-white/20
                        tracking-widest
                        uppercase
                    "
                >
                    NODE_ENV: PRODUCTION
                </div>
            </motion.div>

            {/* =====================================================
                MAIN FOREGROUND CONTENT
                ===================================================== */}

            <div
                className="
                    relative
                    z-10
                    w-full
                    max-w-250
                    mx-auto
                    px-6
                    flex
                    flex-col
                    items-center
                    text-center
                    pointer-events-none
                "
            >
                {/* =================================================
                    ONLINE STATUS
                    ================================================= */}

                <div
                    className="
                        hero-reveal
                        opacity-0
                        inline-flex
                        items-center
                        gap-3
                        px-4
                        py-2
                        rounded-full
                        border
                        border-white/10
                        bg-[#050505]
                        shadow-[0_0_20px_rgba(0,0,0,0.5)]
                        mb-8
                        pointer-events-auto
                    "
                >
                    <span className="relative flex h-2 w-2">
                        <span
                            className="
                                animate-ping
                                absolute
                                inline-flex
                                h-full
                                w-full
                                rounded-full
                                bg-[var(--color-lime)]
                                opacity-75
                            "
                        />

                        <span
                            className="
                                relative
                                inline-flex
                                rounded-full
                                h-2
                                w-2
                                bg-[var(--color-lime)]
                            "
                        />
                    </span>

                    <span
                        className="
                            font-mono
                            text-[10px]
                            tracking-[0.2em]
                            uppercase
                            text-white/70
                        "
                    >
                        Skardu, PK • Operating
                    </span>
                </div>

                {/* =================================================
                    MASSIVE TYPOGRAPHY
                    ================================================= */}

                <div className="hero-reveal opacity-0 mb-6 w-full">
                    <h1
                        ref={textRef}
                        onMouseEnter={() => setTextHovered(true)}
                        onMouseLeave={() => setTextHovered(false)}
                        onMouseMove={handleTextMouseMove}
                        className="
                            relative
                            pointer-events-auto
                            text-[clamp(3.5rem,10vw,8rem)]
                            font-bold
                            leading-[0.9]
                            tracking-tighter
                            text-white
                            drop-shadow-xl
                            select-none
                        "
                    >
                        {/* -----------------------------------------
                            NORMAL WHITE TEXT
                            ----------------------------------------- */}

                        <span>
                            SYED NAVEED.
                        </span>

                        {/* -----------------------------------------
                            TEXTURE TEXT

                            This is another copy of the text.
                            The texture is clipped to the letters,
                            then the circular mask reveals it.
                            ----------------------------------------- */}

                        <motion.span
                            aria-hidden="true"
                            className="
                                absolute
                                inset-0
                                pointer-events-none
                                text-transparent
                                bg-clip-text
                                bg-center
                                bg-cover
                                whitespace-nowrap
                            "
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: textHovered ? 1 : 0,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeOut",
                            }}
                            style={{
                                backgroundImage: `url(${texture.src})`,
                                maskImage: textRevealMask,
                                WebkitMaskImage: textRevealMask,
                            }}
                        >
                            SYED NAVEED.
                        </motion.span>


                        {/* -----------------------------------------
                            SMALL INNER LENS HIGHLIGHT
                            ----------------------------------------- */}

                        <motion.div
                            aria-hidden="true"
                            className="
                                absolute
                                pointer-events-none
                                z-20
                                w-[4px]
                                h-[4px]
                                rounded-full
                                bg-white/60
                                shadow-[0_0_15px_rgba(255,255,255,0.8)]
                                -translate-x-1/2
                                -translate-y-1/2
                            "
                            animate={{
                                opacity: textHovered ? 1 : 0,
                            }}
                            style={{
                                left: smoothTextX,
                                top: smoothTextY,
                            }}
                        />
                    </h1>
                </div>

                {/* =================================================
                    DECRYPTING ROLE
                    ================================================= */}

                <h2
                    className="
                        hero-reveal
                        opacity-0
                        text-xl
                        md:text-3xl
                        font-light
                        tracking-wide
                        text-white/60
                        flex
                        items-center
                        justify-center
                        flex-wrap
                        gap-2
                        mb-10
                    "
                >
                    I am {article}

                    <span
                        className="
                            font-mono
                            flex
                            items-center
                            ml-1
                            font-medium
                        "
                    >
                        {displayChars.map((item, i) => (
                            <span
                                key={i}
                                className={`
                                    transition-colors
                                    duration-100
                                    ${
                                        item.isReal
                                            ? "text-[var(--color-lime)]"
                                            : "text-white/20"
                                    }
                                `}
                            >
                                {item.char === " "
                                    ? "\u00A0"
                                    : item.char}
                            </span>
                        ))}
                    </span>
                </h2>

                {/* =================================================
                    BIO
                    ================================================= */}

                <p
                    className="
                        hero-reveal
                        opacity-0
                        text-sm
                        md:text-base
                        text-white/40
                        max-w-2xl
                        leading-relaxed
                        mb-12
                        font-light
                    "
                >
                    Engineering scalable web infrastructure,
                    offline mobile systems leveraging Java,
                    Kotlin & React Native, and deploying
                    production-ready AI pipelines.
                </p>

                {/* =================================================
                    CALL TO ACTIONS
                    ================================================= */}

                <div
                    className="
                        hero-reveal
                        opacity-0
                        flex
                        flex-col
                        sm:flex-row
                        items-center
                        gap-6
                        w-full
                        sm:w-auto
                        pointer-events-auto
                    "
                >
                    <a
                        href="#projects"
                        className="
                            group
                            relative
                            w-full
                            sm:w-auto
                            px-8
                            py-4
                            bg-white
                            text-black
                            font-semibold
                            text-xs
                            tracking-[0.2em]
                            uppercase
                            overflow-hidden
                            hover:scale-105
                            transition-transform
                            duration-300
                        "
                    >
                        <span
                            className="
                                relative
                                z-10
                                flex
                                items-center
                                justify-center
                                gap-3
                            "
                        >
                            EXPLORE SYSTEMS

                            <span
                                className="
                                    group-hover:translate-y-1
                                    transition-transform
                                "
                            >
                                ↓
                            </span>
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="
                            group
                            w-full
                            sm:w-auto
                            px-8
                            py-4
                            border
                            border-white/20
                            text-white
                            font-medium
                            text-xs
                            tracking-[0.2em]
                            uppercase
                            hover:bg-white/10
                            transition-colors
                            duration-300
                        "
                    >
                        INITIATE CONTACT
                    </a>
                </div>
            </div>

            {/* =====================================================
                SCROLL INDICATOR
                ===================================================== */}

            <motion.div
                animate={{
                    opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    bottom-10
                    left-1/2
                    -translate-x-1/2
                    hidden
                    md:flex
                    flex-col
                    items-center
                    gap-4
                    z-10
                "
            >
                <span
                    className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-white/40
                    "
                >
                    Scroll
                </span>

                <div
                    className="
                        w-px
                        h-8
                        bg-linear-to-b
                        from-white/40
                        to-transparent
                    "
                />
            </motion.div>
        </section>
    );
}