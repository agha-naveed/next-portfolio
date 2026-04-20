"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ITEMS = [
  "Web Developer",
  "—",
  "Mobile App Developer",
  "—",
  "Cross-Platform Desktop App Developer",
  "—",
  "AI Architecture",
  "—",
  "MERN Stack",
  "—",
  "Next.js Specialist",
  "—",
  "ML Systems",
  "—",
  "Privacy-First Design",
  "—",
];

export default function Ribbon() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const w = el.scrollWidth / 2;
    gsap.to(el, {
      x: -w,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="layer overflow-hidden border-y border-[#D9D0C0]/[0.07] bg-[#F2EDE4]/[0.015] py-[14px]">
      <div
        ref={track}
        className="flex w-max gap-8 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`f-serif text-[15px] font-light ${
              item === "—"
                ? "not-italic tracking-[0.1em] text-[#C8854A]/40"
                : "italic tracking-[0.02em] text-[#D9D0C0]/30"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}