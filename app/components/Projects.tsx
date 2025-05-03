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
                    <span className='font-semibold text-2xl block !py-[14px]'>Library Management System</span>
                    <Image src={store} alt='' className='w-100 rounded-sm' placeholder='blur' />

                    <div className='flex flex-col !py-8 gap-1'>
                        <span className='text-[22px] font-medium'>Library Management System</span>
                        <span className='text-[18px] font-medium'>Desktop Application</span>
                    </div>
                    <button className='!px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all hover:bg-main-skin-clr' title='View more about this Project'>View More</button>
                </div>

            </div>
        </div>
    )
}