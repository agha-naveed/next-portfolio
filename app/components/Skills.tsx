'use client'
import { useState } from "react"

export default function Skills() {
    const [isVisible, setIsVisible] = useState(true)
    const [option, setOption] = useState("")
    return (
        <div className='w-full h-full p-sec bg-main-dark-clr relative -top-1'>
            <div className='container !mx-auto justify-items-center'>
                <h2 className='text-5xl font-bold text-white text-center'>Skills</h2>

                <div className="flex gap-3 justify-between w-[80%]">
                    <div className="text-white text-start flex flex-col gap-1 w-65">
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start" onClick={(e) => setOption("frontend")}>Frontend</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start" onClick={(e) => setOption("backend")}>Backend</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start" onClick={(e) => setOption("database")}>Database</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start">Programming</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start">Designing</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start">AI</button>
                        <button className="border-none outline-none !py-[13px] w-full hover:underline cursor-pointer text-xl text-start">Tools</button>
                    </div>
                    <div className="w-1 h-100 bg-main-skin-clr"></div>
                    <div className="w-full h-full bg-purple-700">

                    </div>
                </div>
            </div>
        </div>
    )
}