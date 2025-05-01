'use client'

import About from "./components/About"
import Header from "./components/Header"
import Skills from "./components/Skills"

export default function Page() {
  return (
    <div className="w-full h-full p-4">
      <Header />
      <About />
      <Skills />
    </div>
  )
}