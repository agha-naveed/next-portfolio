import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='w-full !py-7 fixed anchor-center bg-secondary-light-clr/35 backdrop-blur-3xl'>
            <ul className='flex h-auto justify-center gap-3 relative z-[100]'>
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