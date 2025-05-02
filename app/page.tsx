'use client'

import { useEffect } from "react"
import About from "./components/About"
import Header from "./components/Header"
import Skills from "./components/Skills"
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'

export default function Page() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="w-full h-full p-4">
      <Header />
      <About />
      <Skills />
    </div>
  )
}