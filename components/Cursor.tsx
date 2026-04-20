"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0, ry = 0, dx = 0, dy = 0;

    const move = (e: MouseEvent) => {
      dx = e.clientX; dy = e.clientY;
      if (dot.current) {
        dot.current.style.left  = dx + "px";
        dot.current.style.top   = dy + "px";
      }
    };

    const loop = () => {
      rx += (dx - rx) * 0.13;
      ry += (dy - ry) * 0.13;
      if (ring.current) {
        ring.current.style.left = rx + "px";
        ring.current.style.top  = ry + "px";
      }
      requestAnimationFrame(loop);
    };

    addEventListener("mousemove", move);
    loop();
    return () => removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot}  id="cur-dot"  style={{ position:"fixed", pointerEvents:"none", zIndex:9999, transform:"translate(-50%,-50%)", width:6, height:6, borderRadius:"50%", background:"#F2EDE4", transition:"width .2s,height .2s,background .2s" }} />
      <div ref={ring} id="cur-ring" style={{ position:"fixed", pointerEvents:"none", zIndex:9998, transform:"translate(-50%,-50%)", width:32, height:32, borderRadius:"50%", border:"1px solid rgba(242,237,228,.3)", transition:"width .35s,height .35s,border-color .35s" }} />
    </>
  );
}
