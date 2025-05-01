'use client'

import About from "./components/About"
import Header from "./components/Header"

export default function Page() {
  return (
    <div className="w-full h-full p-4">
      <Header />
      <About />
    </div>
  )
}