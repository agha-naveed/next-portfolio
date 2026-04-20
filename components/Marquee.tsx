'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const items = [
  'SOFTWARE ENGINEER',
  '✦',
  'AI ARCHITECT',
  '✦',
  'MERN STACK',
  '✦',
  'OFFLINE ML SYSTEMS',
  '✦',
  'FULL-STACK DEVELOPMENT',
  '✦',
  'PRIVACY-FIRST DESIGN',
  '✦',
  'ELECTRON.JS',
  '✦',
  'PYTORCH',
  '✦',
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    gsap.to(track, {
      x: -totalWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  const doubled = [...items, ...items];

  return (
    <div
      className="content-layer overflow-hidden py-4 border-y"
      style={{ borderColor: 'rgba(0,255,209,0.1)' }}
    >
      <div ref={trackRef} className="flex gap-8 whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs tracking-widest"
            style={{ color: item === '✦' ? 'var(--plasma)' : 'var(--steel)', opacity: item === '✦' ? 0.8 : 0.4 }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
