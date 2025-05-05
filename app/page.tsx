'use client'
import { useEffect, useState } from "react"
import About from "./components/About"
import Header from "./components/Header"
import Skills from "./components/Skills"
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'
import Projects from "./components/Projects"
import { RiArrowUpDoubleLine } from "react-icons/ri";

export default function Page() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    AOS.init()

    const handleScroll = () => {
      setScroll(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  
  }, []);

  return (
    <div className="w-full h-full p-4">
      <RiArrowUpDoubleLine
      className={`fixed right-10 !p-2 h-12 w-12 text-white text-4xl transition-custom
        rounded-full ${scroll ? "bottom-10" : "-bottom-20"} z-[4000] hover-text hover:bg-black hover:shadow-arrow
      `} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} />
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}