"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loader({ onDone }: { onDone: () => void }) {
  const wrap  = useRef<HTMLDivElement>(null);
  const bar   = useRef<HTMLDivElement>(null);
  const num   = useRef<HTMLSpanElement>(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const obj = { v: 0 };
    gsap.to(obj, {
      v: 100, duration: 2.2, ease: "power2.inOut",
      onUpdate() {
        const v = Math.round(obj.v);
        setPct(v);
        if (bar.current) bar.current.style.transform = `scaleX(${v / 100})`;
      },
      onComplete() {
        gsap.to(wrap.current, {
          yPercent: -100, duration: 0.9, ease: "power4.inOut",
          onComplete: onDone,
        });
      },
    });
  }, [onDone]);

  return (
    <div
      ref={wrap}
      style={{
        position: "fixed", inset: 0, zIndex: 3000,
        background: "#0A0805",
        display: "flex", flexDirection: "column",
        alignItems: "flex-start", justifyContent: "flex-end",
        padding: "60px 80px",
      }}
    >
      {/* big name */}
      <div style={{ marginBottom: 40 }}>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(3.5rem,10vw,9rem)", fontWeight:300, lineHeight:0.95, color:"#F2EDE4", letterSpacing:"-0.01em" }}>
          Syed Naveed
        </p>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(3.5rem,10vw,9rem)", fontWeight:300, lineHeight:0.95, color:"#C8854A", fontStyle:"italic", letterSpacing:"-0.01em" }}>
          Abbas
        </p>
      </div>

      {/* bar */}
      <div style={{ width:"100%", height:1, background:"rgba(242,237,228,.12)", marginBottom:16, overflow:"hidden" }}>
        <div ref={bar} style={{ width:"100%", height:"100%", background:"#C8854A", transformOrigin:"left center", transform:"scaleX(0)", transition:"none" }} />
      </div>

      <div style={{ display:"flex", justifyContent:"space-between", width:"100%" }}>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:11, color:"rgba(242,237,228,.35)", letterSpacing:".15em" }}>LOADING PORTFOLIO</span>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:11, color:"#C8854A" }}>{pct}%</span>
      </div>
    </div>
  );
}
