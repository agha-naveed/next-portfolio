'use client'
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }:any) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let scroll:LocomotiveScroll | null = null;

    const initScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      if (scrollRef.current) {
        scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });
      }
    };

    initScroll();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <div ref={scrollRef} className="h-full">{children}</div>;
};

export default SmoothScroll;