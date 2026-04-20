"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Background   = dynamic(() => import("@/components/Background"),   { ssr: false });
const Cursor       = dynamic(() => import("@/components/Cursor"),        { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"),  { ssr: false });
const Loader       = dynamic(() => import("@/components/Loader"),        { ssr: false });

import Nav     from "@/components/Nav";
import Ribbon  from "@/components/Ribbon";
import Work    from "@/components/Work";
import Stack   from "@/components/Stack";
import About   from "@/components/About";
import Contact from "@/components/Contact";
import Footer  from "@/components/Footer";
import Architect from "@/components/Architect";

export default function Page() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Cursor />
      <Background />

      <Loader onDone={() => setReady(true)} />

      <SmoothScroll>
        <div
          style={{
            opacity: ready ? 1 : 0,
            transition: "opacity .6s ease",
            pointerEvents: ready ? "auto" : "none",
          }}
        >
          <Nav />
          <main>
            <Architect />
            <Ribbon />
            <Work />
            <Ribbon />
            <Stack />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
