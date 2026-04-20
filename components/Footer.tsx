"use client";

export default function Footer() {
  return (
    <footer className="layer flex flex-col gap-4 px-6 py-7 border-t border-[#D9D0C0]/[0.06] md:flex-row md:justify-between md:items-center md:px-[60px] md:py-[28px]">
      <span className="f-mono text-[11px] text-[#D9D0C0]/25 tracking-[0.1em] uppercase">
        © 2026 SYED NAVEED ABBAS
      </span>
      <span className="f-mono text-[11px] text-[#D9D0C0]/20 tracking-[0.1em] uppercase">
        NEXT.JS · THREE.JS · GSAP
      </span>
    </footer>
  );
}