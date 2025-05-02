'use client'
import { useState } from "react"
import Image from "next/image"
import html from 'public/img/skills-logo/html-logo.svg'
import css from 'public/img/skills-logo/css-logo.svg'
import js from 'public/img/skills-logo/javascript-logo.svg'
import ts from 'public/img/skills-logo/typescript.svg'
import react from 'public/img/skills-logo/react.svg'
import next from 'public/img/skills-logo/nextjs.svg'

export default function Skills() {
    
    const [option, setOption] = useState("frontend")
    return (
        <div className='w-full h-full p-sec bg-main-dark-clr relative -top-1'>
            <div className='container !mx-auto justify-items-center'>
                <h2 className='text-5xl font-bold text-white text-center'>SKILLS</h2>

                <div className="flex gap-3 justify-center !mt-12">
                    <div className="text-white text-start flex flex-col gap-1 w-65">
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start" onClick={(e) => setOption("frontend")}>Frontend</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start" onClick={(e) => setOption("backend")}>Backend</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start" onClick={(e) => setOption("database")}>Database</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start" onClick={(e) => setOption("programming")}>Programming</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start" onClick={(e) => setOption("designing")}>Designing</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start" onClick={(e) => setOption("ai")}>AI</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start" onClick={(e) => setOption("tools")}>Tools</button>
                    </div>

                    <div className="w-1 h-100 bg-main-skin-clr"></div>

                    <div className="w-180 h-full text-white">
                        {
                            // option == "frontend" ?
                            <div className={`transition-all ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"} grid grid-cols-4 gap-5 w-110 !pt-2 !pl-10`}>
                                <div className="flex flex-col gap-1 items-center">
                                    <Image src={html} className="w-10" alt="" />
                                    <label htmlFor="">HTML</label>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                    <Image src={css} className="w-10" alt="" />
                                    <label htmlFor="">CSS</label>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                    <Image src={js} className="w-10" alt="" />
                                    <label htmlFor="">JavaScript</label>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                    <Image src={ts} className="w-10" alt="" />
                                    <label htmlFor="">TypeScript</label>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                    <Image src={react} className="w-10" alt="" />
                                    <label htmlFor="">React Js</label>
                                </div>
                                <div className="flex flex-col gap-1 items-center">
                                    <Image src={next} className="w-10" alt="" />
                                    <label htmlFor="">Next Js</label>
                                </div>
                            </div>
                            // : ""
                        }
                        {/* <div className={`transition-all ${option == "frontend" ? "scale-100 opacity-100" : "scale-90 opacity-0"} grid grid-cols-4 gap-5 w-110 !pt-2 !pl-10`}>
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={html} className="w-10" alt="" />
                                <label htmlFor="">HTML</label>
                            </div>
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={css} className="w-10" alt="" />
                                <label htmlFor="">CSS</label>
                            </div>
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={js} className="w-10" alt="" />
                                <label htmlFor="">JavaScript</label>
                            </div>
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={ts} className="w-10" alt="" />
                                <label htmlFor="">TypeScript</label>
                            </div>
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={react} className="w-10" alt="" />
                                <label htmlFor="">React Js</label>
                            </div>
                            <div className="flex flex-col gap-1 items-center">
                                <Image src={next} className="w-10" alt="" />
                                <label htmlFor="">Next Js</label>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}