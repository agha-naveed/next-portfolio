import Image from 'next/image'
import React from 'react'
import store from 'public/img/projects/store.webp'
import chatbot from 'public/img/projects/chatbot.webp'
import sevenup from 'public/img/projects/sevenup.webp'

export default function Projects() {
    return (
        <div className='w-full h-full p-sec overflow-hidden bg-main-dark-clr relative -top-1'>
            <div className="container !mx-auto text-white">

                <h2 className='text-5xl font-semibold text-white text-center'>PROJECTS</h2>

                <div>
                    <Image src={} alt='' />
                </div>

            </div>
        </div>
    )
}