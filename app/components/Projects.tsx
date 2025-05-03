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

                <div className='w-fit bg-secondary-light-clr !py-3 !px-5 rounded-lg'>
                    <span className='font-semibold text-xl block !py-3'>Library Management System</span>
                    <Image src={store} alt='' className='w-80 rounded-sm' placeholder='blur' />

                    <div className='flex flex-col !py-3'>
                        <span className='text-xl font-semibold'>Library Management System</span>
                        <span className='font-semibold'>Desktop Application</span>
                    </div>
                </div>

            </div>
        </div>
    )
}