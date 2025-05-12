'use client'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
import blueFlare from 'public/img/blue-flare.jpg'
import store from 'public/img/projects/store.webp'
import chatbot from 'public/img/projects/chatbot.webp'
import sevenup from 'public/img/projects/sevenup.webp'
import dottedBg from 'public/img/dotted-small.png'
import player from 'public/img/projects/music_player.webp'
import lms from 'public/img/projects/lib_lms.webp'
import portfolio from 'public/img/projects/old_portfolio.webp'
import Link from 'next/link';

export default function Projects() {

    return (
        <div className='w-full h-full !py-10 overflow-hidden bg-main-dark-clr relative -top-3 z-300'>
            <div className="container !mx-auto text-white">

                <h2 className='md:text-5xl text-[40px] font-semibold text-white text-center !mb-15'>Projects</h2>

                <div className='flex flex-wrap justify-center relative gap-14'>

                    <Image src={dottedBg} alt=''
                    className='mix-blend-screen opacity-15
                    absolute -top-60 -left-60 w-[70%] pointer-events-none'/>

                    <Image src={blueFlare} alt=''
                    className='mix-blend-screen absolute -top-30 -left-10 w-70 animate-blink'
                    />

                    <div data-aos="fade-up" className='justify-items-center cursor-pointer'
                    data-aos-duration="1000" data-aos-easing="ease-out">
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}
                        className='md:w-[350px] w-[80%] relative bg-secondary-light-clr !pt-[26px] !pb-[90px] !px-5 rounded-lg z-[100]'>

                            <div className='w-full overflow-hidden rounded-sm'>
                                <Image src={store} loading="lazy" alt='' className='w-full rounded-sm hover:scale-105 transition-all' placeholder='blur' />
                            </div>

                            <div className='flex flex-col !py-8 gap-1'>
                                <span className='text-[20px] font-semibold'>Lenmi Store</span>
                                <span>Online Shopping Platform</span>
                            </div>
                            <Link href={"/projects/lenmi-store"} className='bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit !mb-5 absolute bottom-[16px] hover-text' title='View more about this Project'>
                                <span className='relative z-[200]'>View More</span>
                            </Link>

                        </Tilt>
                    </div>

                    <div data-aos="fade-up" className='justify-items-center cursor-pointer'
                    data-aos-duration="1000" data-aos-easing="ease-out">
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className='md:w-[350px] w-[80%] relative bg-secondary-light-clr !pt-[26px] !pb-[90px] !px-5 rounded-lg z-[100]'>

                            <div className='w-full overflow-hidden rounded-sm'>
                                <Image src={lms} loading="lazy" alt='' className='w-full rounded-sm hover:scale-105 transition-all' placeholder='blur' />
                            </div>

                            <div className='flex flex-col !py-8 gap-1'>
                                <span className='text-[20px] font-semibold'>Library Management System</span>
                                <span>Desktop Application</span>
                            </div>
                            <Link href={"/projects/library-management-system"} className='bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit !mb-5 absolute bottom-[16px] hover-text' title='View more about this Project'>
                                <span className='relative z-[200]'>View More</span>
                            </Link>

                        </Tilt>
                    </div>
                    
                    <div data-aos="fade-up" className='justify-items-center cursor-pointer'
                    data-aos-duration="1000" data-aos-easing="ease-out">
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className='md:w-[350px] w-[80%] relative bg-secondary-light-clr !pt-[26px] !pb-[90px] !px-5 rounded-lg z-[1000]'>
                            
                            <div className='w-full overflow-hidden rounded-sm'>
                                <Image src={chatbot} loading="lazy" alt='' className='w-full rounded-sm hover:scale-105 transition-all' placeholder='blur' />
                            </div>

                            <div className='flex flex-col !py-8 gap-1'>
                                <span className='text-[20px] font-semibold'>AI Chatbot</span>
                                <span>Agha Chatbot</span>
                            </div>
                            <Link href={"/projects/agha-chatbot"} className='bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit !mb-5 absolute bottom-[16px] hover-text' title='View more about this Project'>
                                <span className='relative z-[200]'>View More</span>
                            </Link>

                        </Tilt>
                    </div>

                </div>


                <div className='!py-30 !px-2 relative'>
                    <Image src={dottedBg} alt=''
                        className='mix-blend-screen opacity-10 pointer-events-none
                        absolute bottom-10 -right-70 rotate-270 w-[70%] !select-none'/>

                        <Image src={blueFlare} alt=''
                        className='mix-blend-screen absolute top-20 right-0 w-70 animate-blink'
                        />

                    <h2 className='md:text-5xl text-[40px] font-semibold text-white text-center !mb-15'>Other Projects</h2>

                    <div className='flex flex-wrap justify-center relative gap-14'>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
                            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="justify-items-center" >
                                <Image src={portfolio} loading="lazy" placeholder='blur' className='lg:w-[350px] md:w-[330px] w-[80%] rounded-lg' alt='' />
                            </Tilt>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1300" data-aos-easing="ease-out">
                            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="justify-items-center" >
                                <Image src={sevenup} loading="lazy" placeholder='blur' className='lg:w-[350px] md:w-[330px] w-[80%] rounded-lg' alt='' />
                            </Tilt>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1600" data-aos-easing="ease-out">
                            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} className="justify-items-center" >
                                <Image src={player} loading="lazy" placeholder='blur' className='lg:w-[350px] md:w-[330px] w-[80%] rounded-lg' alt='' />
                            </Tilt>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>  
    )
}