'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
        
    }, [])

    return (
        <nav className={`w-full transition-all !py-6 text-white fixed anchor-center z-[10000] ${scroll ? "bg-main-dark-clr/20 backdrop-blur-[5px]" : ""}`} data-aos="fade-down">
            <ul className='flex h-auto justify-center gap-3'>
                <li className='group'>
                    <Link href={'/'} className='!py-3 !px-5 transition-all hover-text'>
                        Home
                    </Link>
                    <span className='block w-0 transition-all h-[1.5px] justify-self-center origin-center group-hover:w-[70%] bg-main-skin-clr !mt-1'></span>
                </li>
                <li className='group'>
                    <Link href={'/projects'} className='!py-3 !px-5 transition-all hover-text'>
                        Projects
                    </Link>
                    <span className='block w-0 transition-all h-[1.5px] justify-self-center origin-center group-hover:w-[70%] bg-main-skin-clr !mt-1'></span>
                </li>
                <li className='group'>
                    <Link href={'/about'} className='!py-3 !px-5 transition-all hover-text'>
                        About
                    </Link>
                    <span className='block w-0 transition-all h-[1.5px] justify-self-center origin-center group-hover:w-[70%] bg-main-skin-clr !mt-1'></span>
                </li>
            </ul>
        </nav>
    )
}