'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    return (
        <nav className={`w-full !py-6 text-white fixed anchor-center z-[10000] bg-main-dark-clr/20 backdrop-blur-[5px]`}>
            <ul className='flex h-auto justify-center gap-3'>
                <li className='group'>
                    <Link href={'/'} className='!py-3 !px-5 transition-all hover-text'>
                        Home
                    </Link>
                    <span className='block w-0 transition-all h-[1.5px] justify-self-center origin-center group-hover:w-[70%] bg-main-skin-clr !mt-1'></span>
                </li>
                <li className='group'>
                    <Link href={'/'} className='!py-3 !px-5 transition-all'>
                        Projects
                    </Link>
                    <span className='block w-0 transition-all h-[1.5px] justify-self-center origin-center group-hover:w-[70%] bg-main-skin-clr !mt-1'></span>
                </li>
                <li className='group'>
                    <Link href={'/'} className='!py-3 !px-5 transition-all'>
                        About
                    </Link>
                    <span className='block w-0 transition-all h-[1.5px] justify-self-center origin-center group-hover:w-[70%] bg-main-skin-clr !mt-1'></span>
                </li>
            </ul>
        </nav>
    )
}