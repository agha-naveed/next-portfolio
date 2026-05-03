"use client";

import { useState } from "react";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState('HOME');
  const navItems = ['HOME', 'PROJECTS', 'SKILLS', 'ABOUT', 'CONTACT'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="font-mono font-bold text-lg tracking-tight text-white">
          <span className="text-[var(--color-lime)]">Agha</span> Naveed
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActiveNav(item)}
              className={`font-sans font-medium text-xs tracking-widest flex flex-col items-center gap-1 transition-colors ${activeNav === item ? 'text-[var(--color-lime)]' : 'text-[#555] hover:text-[#888]'
                }`}
            >
              <span className={`font-mono text-[10px] ${activeNav === item ? 'text-[var(--color-lime)]' : 'text-[#444]'
                }`}>
                0{i + 1}
              </span>
              {item}
              {activeNav === item && (
                <div className="h-[2px] w-full bg-[var(--color-lime)] rounded-full mt-0.5" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-white">
          <svg width="16" height="12" viewBox="0 0 16 12">
            <rect y="0" width="16" height="1.5" rx="1" fill="currentColor" />
            <rect y="5" width="12" height="1.5" rx="1" fill="currentColor" />
            <rect y="10" width="16" height="1.5" rx="1" fill="currentColor" />
          </svg>
        </button>
      </div>
    </nav>
  );
}