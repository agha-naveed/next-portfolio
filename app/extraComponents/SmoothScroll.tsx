'use client'
import { ReactNode, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

type SmoothScrollProps = {
  children: ReactNode;
};

const SmoothScroll = ({ children }:any) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  let scroll:LocomotiveScroll | null = null;

  useEffect(() => {
    if (scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        if(scroll)
          scroll?.destroy();
      };
    }
  }, [children]);

  return <div ref={scrollRef} className="h-full">{children}</div>;
};

export default SmoothScroll;