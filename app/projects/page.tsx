'use client'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
import Link from 'next/link'
import store from 'public/img/projects/store.webp'
import lms from 'public/img/projects/lib_lms.webp'
import sevenup from 'public/img/projects/sevenup.webp'
import chatbot from 'public/img/projects/chatbot.webp'

export default function page() {
    return (
        <div className="w-full min-h-screen h-auto flex flex-col justify-center items-center text-white text-3xl gap-4">
            <div className='flex flex-wrap justify-center relative gap-14 !py-[120px]'>
                <div data-aos="fade-up" className='justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className='md:w-[350px] w-[80%] h-full relative bg-secondary-light-clr !py-[26px] !px-5 rounded-lg z-[1000]'>
                        
                        <div className='w-full overflow-hidden rounded-sm'>
                            <Image src={store} loading="lazy" alt='' className='w-full rounded-sm hover:scale-105 transition-all' placeholder='blur' />
                        </div>

                        <div className='flex flex-col !pt-8 !pb-15 gap-2'>
                            <span className='text-[22px] font-semibold'>Lenmi Store</span>
                            <span className='text-[16px] leading-7'>Online Shopping Platform</span>
                        </div>
                        <Link href={"/projects/lenmi-store"} className='bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit absolute bottom-6' title='View more about this Project'>
                            <span className='relative z-[200]'>View Project</span>
                        </Link>

                    </Tilt>
                </div>

                <div data-aos="fade-up" className='justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className='md:w-[350px] w-[80%] h-full relative bg-secondary-light-clr !py-[26px] !px-5 rounded-lg z-[1000]'>
                        
                        <div className='w-full overflow-hidden rounded-sm'>
                            <Image src={lms} loading="lazy" alt='' className='w-full rounded-sm hover:scale-105 transition-all' placeholder='blur' />
                        </div>

                        <div className='flex flex-col !pt-8 !pb-15 gap-2'>
                            <span className='text-[22px] font-semibold'>Library Management System</span>
                            <span className='text-[16px] leading-7'>Desktop Application for browsing, searching borrower etc.</span>
                        </div>
                        <Link href={"/projects/library-management-system"} className='bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit absolute bottom-6' title='View more about this Project'>
                            <span className='relative z-[200]'>View Project</span>
                        </Link>

                    </Tilt>
                </div>

                <div data-aos="fade-up" className='h-auto justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className='md:w-[350px] h-full w-[80%] relative bg-secondary-light-clr !py-[26px] !px-5 rounded-lg z-[1000]'>
                        
                        <div className='w-full overflow-hidden rounded-sm'>
                            <Image src={chatbot} loading="lazy" alt='' className='w-full rounded-sm hover:scale-105 transition-all' placeholder='blur' />
                        </div>

                        <div className='flex flex-col !pt-8 !pb-15 gap-2'>
                            <span className='text-[22px] font-semibold'>AI Chatbot</span>
                            <span className='text-[16px] leading-7'>AI Chatbot for generating responses from inputs.</span>
                        </div>
                        <Link href={"/projects/agha-chatbot"} className='bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit absolute bottom-6' title='View more about this Project'>
                            <span className='relative z-[200]'>View Project</span>
                        </Link>

                    </Tilt>
                </div>

                <div data-aos="fade-up" className='h-auto justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className='md:w-[350px] h-full w-[80%] relative bg-secondary-light-clr !py-[26px] !px-5 rounded-lg z-[1000]'>
                        
                        <div className='w-full overflow-hidden rounded-sm'>
                            <Image src={sevenup} loading="lazy" alt='' className='w-full rounded-sm hover:scale-105 transition-all' placeholder='blur' />
                        </div>

                        <div className='flex flex-col !pt-8 !pb-15 gap-2'>
                            <span className='text-[22px] font-semibold'>7up Website Redesign</span>
                            <span className='text-[16px] leading-7'>Refreshing experience that reflects the brand’s lively and youthful personality.</span>
                        </div>
                        <Link href={"/projects/7up-redesign"} className='bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit absolute bottom-6' title='View more about this Project'>
                            <span className='relative z-[200]'>View Project</span>
                        </Link>

                    </Tilt>
                </div>
            </div>
        </div>
    )
}