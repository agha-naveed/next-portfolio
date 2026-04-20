"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sec = useRef<HTMLElement>(null);
  const big = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      big.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: sec.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sec}
      className="layer border-t border-[#D9D0C0]/[0.06] px-6 py-[100px] md:px-[60px] md:pb-[120px] md:pt-[140px]"
    >
      <p className="sec-label mb-10 md:mb-[50px]">05 / Contact</p>

      {/* Big CTA line */}
      <div ref={big} className="mb-16 md:mb-20">
        <h2 className="f-serif text-[clamp(3rem,8vw,9rem)] font-light leading-[0.88] tracking-[-0.03em] text-[#F2EDE4]">
          Let's build<br />
          <span className="italic text-[#C8854A]">something</span><br />
          real.
        </h2>
      </div>

      <div className="rule mb-12 md:mb-[60px]" />

      {/* Contact grid */}
      <div className="grid grid-cols-1 gap-x-20 gap-y-12 mb-12 md:mb-[60px] md:grid-cols-2">
        {/* Left: Pitch */}
        <div>
          <p className="f-sans mb-9 text-[15px] leading-[1.8] text-[#D9D0C0]/55">
            Open to full-time roles, contract projects, and interesting collaborations. Whether you need a full-stack system or AI deployment that stays off the cloud — I want to hear about it.
          </p>
          <a href="mailto:NaveedAbs31@gmail.com" className="btn-amber no-underline">
            Send a Message →
          </a>
        </div>

        {/* Right: Links list */}
        <div className="flex flex-col">
          {[
            { label: "Email", val: "NaveedAbs31@gmail.com", href: "mailto:NaveedAbs31@gmail.com" },
            { label: "GitHub", val: "github.com/agha-naveed", href: "https://github.com/agha-naveed" },
            { label: "LinkedIn", val: "linkedin.com/in/agha-naveed", href: "https://linkedin.com/in/agha-naveed" },
            { label: "Location", val: "Pakistan · Remote", href: null },
          ].map(({ label, val, href }, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-[#D9D0C0]/[0.06] py-[18px]"
            >
              <span className="f-mono text-[11px] uppercase tracking-[0.1em] text-[#D9D0C0]/30">
                {label}
              </span>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="ul-line f-mono text-[12px] tracking-[0.04em] text-[#F2EDE4]/65 no-underline"
                >
                  {val}
                </a>
              ) : (
                <span className="f-mono text-[12px] tracking-[0.04em] text-[#F2EDE4]/65">
                  {val}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}