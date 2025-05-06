import React, { useState } from 'react'

export default function Contact() {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    return (
        <footer className='container !mx-auto text-white'>
            <button className='bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit' title='View more about this Project' onClick={() => setIsClicked(true)}>
                <span className='relative z-[200]'>Send Message</span>
            </button>
            
            <div className={`fixed transition-all left-0 w-full h-screen bg-black/80 backdrop-blur-[5px] z-[500000] ${isClicked ? "top-0 opacity-100" : "-top-full opacity-0"}`}></div>
        </footer>
    )
}