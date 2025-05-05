import React from 'react'

export default function Loader() {
    return (
        <div className='w-full h-screen bg-main-dark-clr relative z-40000 flex flex-col justify-center items-center'>
            <div className='flex items-center'>
                <div className="pacman"></div>
                <div className='dots'>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <p className='font-medium !mt-2 text-[22px] text-white'>Loading...</p>
        </div>
    )
}