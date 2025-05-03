import Image from 'next/image'
import React from 'react'
import store from 'public/img/projects/store.webp'
import chatbot from 'public/img/projects/chatbot.webp'
import sevenup from 'public/img/projects/sevenup.webp'
import { Tilt } from 'react-tilt'

export default function Projects() {
    const defaultOptions = {
        reverse: false,
        max: 10,
        perspective: 1000,
        scale: 1.01,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }
    
    return (
        <div className='w-full h-screen p-sec overflow-hidden bg-main-dark-clr relative -top-1'>
            <div className="container !mx-auto text-white">

                <h2 className='text-5xl font-semibold text-white text-center !mb-15'>PROJECTS</h2>

                <div className='grid grid-cols-3 justify-items-center'>
                    <Tilt options={defaultOptions} className='w-[450px] bg-secondary-light-clr !py-3 !px-5 rounded-lg'>
                        <span className='font-semibold text-2xl block !py-[14px]'>Online Shopping Site</span>
                        <Image src={store} alt='' className='w-100 rounded-sm' placeholder='blur' />

                        <div className='flex flex-col !py-8 gap-1'>
                            <span className='text-[22px] font-medium'>Lenmi Store Online Shopping Platform</span>
                            <span className='text-[18px] font-medium'>Desktop Application</span>
                        </div>
                        <button className='!px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all hover:bg-main-skin-clr !mb-5' title='View more about this Project'>View More</button>
                    </Tilt>


                    <Tilt options={defaultOptions} className='w-[450px] bg-secondary-light-clr !py-3 !px-5 rounded-lg'>
                        <span className='font-semibold text-2xl block !py-[14px]'>7up website Redesign</span>
                        <Image src={sevenup} alt='' className='w-100 rounded-sm' placeholder='blur' />

                        <div className='flex flex-col !py-8 gap-1'>
                            <span className='text-[22px] font-medium'>7up website Redesign with full animation</span>
                            {/* <span className='text-[18px] font-medium'>Desktop Application</span> */}
                        </div>
                        <button className='!px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all hover:bg-main-skin-clr !mb-5' title='View more about this Project'>View More</button>
                    </Tilt>


                    <Tilt options={defaultOptions} className='w-[450px] bg-secondary-light-clr !py-3 !px-5 rounded-lg'>
                        <span className='font-semibold text-2xl block !py-[14px]'>AI Chatbot</span>
                        <Image src={chatbot} alt='' className='w-100 rounded-sm' placeholder='blur' />

                        <div className='flex flex-col !py-8 gap-1'>
                            <span className='text-[22px] font-medium'>Agha AI Chatbot</span>
                            <span className='text-[18px] font-medium'>Artificial Intelligence</span>
                        </div>
                        <button className='!px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all hover:bg-main-skin-clr !mb-5' title='View more about this Project'>View More</button>
                    </Tilt>
                </div>

            </div>
        </div>
    )
}