import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='w-full !py-7 fixed anchor-center z-[1000] bg-main-dark-clr/20 backdrop-blur-[5px]'>
            <ul className='flex h-auto justify-center gap-3'>
                <li><Link href={'/'} className='!py-3 !px-5'>Home</Link></li>
                <li><Link href={'/'} className='!py-3 !px-5'>Project</Link></li>
                <li className='group'>
                    <Link href={'/'} className='!py-3 !px-5 transition-all'>
                        About
                    </Link>
                    <span className='block w-0 transition-all h-[1.5px] justify-self-center origin-center group-hover:w-[80%] bg-main-skin-clr !mt-1'></span>
                </li>
            </ul>
        </nav>
    )
}