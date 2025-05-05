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
      if(window.scrollY < 50) {
        setScroll(false)
      }
      else if(window.scrollY > 50 && window.scrollY < 100) {
        setScroll(true)
      } 
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    
  }, []);

  return (
    <div className="w-full h-full p-4">
      <RiArrowUpDoubleLine className="fixed bottom-0 p-2" />
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}