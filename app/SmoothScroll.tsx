import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  let scroll;

  useEffect(() => {
    if (scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        if(scroll)
          scroll.destroy();
      };
    }
  }, [children]);

  return <div ref={scrollRef} className="h-full">{children}</div>;
};

export default SmoothScroll;