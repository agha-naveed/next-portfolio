'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import GsapLink from './GsapLink'

export default function Navbar() {
    const [scroll, setScroll] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
        const handleScroll = () => {
            setScroll(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
        
    }, [])

    return (
        <nav className={`w-full !py-6 text-white fixed anchor-center z-[9999999] ${scroll ? "bg-main-dark-clr/20 backdrop-blur-[5px]" : ""} ${loaded ? "opacity-100" : "opacity-0"} transition-custom`}>
            <ul className='flex h-auto justify-center gap-3'>
                <li className='group'>
                    <GsapLink href={'/'}>
                        Home
                    </GsapLink>
                    <span className='block w-0 transition-all h-[1.5px] justify-self-center origin-center group-hover:w-[70%] bg-main-skin-clr !mt-1'></span>
                </li>
                <li className='group'>
                    <GsapLink href={'/projects'}>
                        Projects
                    </GsapLink>
                    <span className='block w-0 transition-all h-[1.5px] justify-self-center origin-center group-hover:w-[70%] bg-main-skin-clr !mt-1'></span>
                </li>
                <li className='group'>
                    <GsapLink href={'/about'}>
                        About
                    </GsapLink>
                    <span className='block w-0 transition-all h-[1.5px] justify-self-center origin-center group-hover:w-[70%] bg-main-skin-clr !mt-1'></span>
                </li>
            </ul>
        </nav>
    )
}