'use client'
import { useEffect, useState } from "react"
import About from "./components/About"
import Header from "./components/Header"
import Skills from "./components/Skills"
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'
import Projects from "./components/Projects"
import { RiArrowUpDoubleLine } from "react-icons/ri";
import Contact from "./components/Contact"

export default function Page() {
  const [loading, setLoading] = useState(true)

  const minLoaderTime = 500;
  let timer:any
  
   const handleWindowLoad = () => {
    timer = setTimeout(() => {
      setLoading(false);
    }, minLoaderTime);
  };

  
  const [scroll, setScroll] = useState(false)
  
  useEffect(() => {
    window.onload = handleWindowLoad;
    AOS.init({
      once: true
    })

    const handleScroll = () => {
      setScroll(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer);
      window.onload = null;
    }
  
  }, []);

  return (
      <div className="w-full h-full">
        <RiArrowUpDoubleLine
        className={`fixed md:block hidden right-10 !p-2 h-12 w-12 text-white text-4xl transition-custom
          rounded-full ${scroll ? "bottom-10" : "-bottom-20"} z-[4000] hover-text hover:bg-black hover:shadow-arrow
        `} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} />
        <Header />
        <About />
        <Skills />
        <Projects />
        <div className="absolute left-0 w-full bg-[#0b111a] h-fit !pt-10 !pb-3">
          <Contact />
        </div>
      </div>
  )
}