'use client'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
import GsapLink from '../components/GsapLink';
import store from 'public/img/projects/store.webp'
import lms from 'public/img/projects/lib_lms.webp'
import sevenup from 'public/img/projects/sevenup.webp'
import chatbot from 'public/img/projects/chatbot.webp'
import pharmacy from 'public/img/projects/pharmacy.webp'
import aprDisDetect from 'public/img/projects/apr-dis.png'
import shiahoza from 'public/img/projects/shiahoza.webp'
import Link from 'next/link';

export default function page() {
    return (
        <div className="w-full min-h-screen h-auto flex flex-col justify-center items-center text-white text-3xl gap-4 pic-bg bg-main-dark-clr">
            <div className='flex flex-wrap justify-center relative gap-14 !py-[120px]'>
                
                <Link href={"/projects/lenmi-store"} data-aos="fade-up" className='justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <div className='md:w-[350px] w-[80%] h-full relative bg-secondary-light-clr transition-custom2 hover:scale-[1.02] hover:bg-[#16202b] !py-[26px] !px-5 rounded-lg z-[1000]'>
                        <div>
                            <div className='w-full overflow-hidden rounded-sm'>
                                <Image src={store} loading="lazy" alt='' className='w-full rounded-sm  transition-all' placeholder='blur' />
                            </div>

                            <div className='flex flex-col py-8 gap-2'>
                                <span className='text-[22px] font-semibold'>Lenmi Store</span>
                                <span className='text-[15px] leading-7'>Your favorite brands, delivered to your door.</span>
                            </div>
                        </div>

                        <div className=' flex gap-2 flex-wrap'>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>Next Js</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>Tailwind</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>Shadcn</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>MongoDB</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>Cloudinary</span>
                        </div>
                    </div>
                </Link>

                <Link href={"/projects/online-quran-academy"} data-aos="fade-up" className='justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <div className='hover:scale-[1.02] transition-custom2 md:w-[350px] w-[80%] flex flex-col justify-between h-full relative bg-secondary-light-clr hover:bg-[#16202b] !py-[26px] !px-5 rounded-lg z-[1000]'>
                        <div>
                            <div className='w-full overflow-hidden rounded-sm'>
                                <Image src={shiahoza} loading="lazy" alt='' className='w-full rounded-sm  transition-all' placeholder='blur' />
                            </div>

                            <div className='flex flex-col py-8 gap-2'>
                                <span className='text-[22px] font-semibold'>Quran Academy</span>
                                <span className='text-[15px] leading-7'>Online Quran Academy for students of all ages.</span>
                            </div>
                        </div>
                        
                        <div className=' flex gap-2 flex-wrap'>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>NextJs</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>PHP</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>MySQL</span>
                        </div>

                    </div>
                </Link>

                <Link href={"/projects/apricot-disease-detector"} data-aos="fade-up" className='justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <div className='md:w-[350px] w-[80%] h-full relative flex flex-col transition-custom2 hover:scale-[1.02] justify-between bg-secondary-light-clr hover:bg-[#16202b] !py-[26px] !px-5 rounded-lg z-[1000]'>
                        <div>    
                            <div className='w-full overflow-hidden rounded-sm'>
                                <Image src={aprDisDetect} loading="lazy" alt='' className='w-full rounded-sm  transition-all' placeholder='blur' />
                            </div>
                        
                            <div className='flex flex-col py-8 gap-2'>
                                <span className='text-[22px] font-semibold'>Apricot Disease Detector</span>
                                <span className='text-[15px] leading-7'>Snap, upload, and know — AI-powered apricot health check.</span>
                            </div>
                        </div>
                        <div className=' flex gap-2 flex-wrap'>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>React</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>FastAPI</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>PyTorch</span>
                        </div>

                    </div>
                </Link>

                <Link href={"/projects/library-management-system"} data-aos="fade-up" className='justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <div className='md:w-[350px] w-[80%] h-full relative flex flex-col transition-custom2 hover:scale-[1.02] justify-between bg-secondary-light-clr hover:bg-[#16202b] !py-[26px] !px-5 rounded-lg z-[1000]'>
                        <div>
                            <div className='w-full overflow-hidden rounded-sm'>
                                <Image src={lms} loading="lazy" alt='' className='w-full rounded-sm  transition-all' placeholder='blur' />
                            </div>

                            <div className='flex flex-col py-8 gap-2'>
                                <span className='text-[22px] font-semibold'>Library Management System</span>
                                <span className='text-[15px] leading-7'>Simplify book tracking, borrowing, and inventory control.</span>
                            </div>
                        </div>

                        <div className=' flex gap-2 flex-wrap'>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>Java</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>MySQL</span>
                        </div>

                    </div>
                </Link>

                <Link href={"/projects/agha-chatbot"} data-aos="fade-up" className='h-auto justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <div className='md:w-[350px] h-full w-[80%] relative flex flex-col transition-custom2 hover:scale-[1.02] justify-between bg-secondary-light-clr hover:bg-[#16202b] !py-[26px] !px-5 rounded-lg z-[1000]'>
                        <div>
                            <div className='w-full overflow-hidden rounded-sm'>
                                <Image src={chatbot} loading="lazy" alt='' className='w-full rounded-sm  transition-all' placeholder='blur' />
                            </div>

                            <div className='flex flex-col py-8 gap-2'>
                                <span className='text-[22px] font-semibold'>AI Chatbot</span>
                                <span className='text-[15px] leading-7'>Agha AI Chatbot: Quick chats, smart answers.</span>
                            </div>
                        </div>
                        <div className=' flex gap-2 flex-wrap'>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>React</span>
                            <span className='bg-[#1f2c3a] text-[13.5px] py-1 px-4 rounded-full h-fit'>Tailwind</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>OpenAI</span>
                        </div>

                    </div>
                </Link>

                <Link href={"/7up-site-redesign"} data-aos="fade-up" className='h-auto justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <div className='md:w-[350px] h-full w-[80%] relative flex flex-col transition-custom2 hover:scale-[1.02] justify-between bg-secondary-light-clr hover:bg-[#16202b] !py-[26px] !px-5 rounded-lg z-[1000]'>
                        <div>
                            <div className='w-full overflow-hidden rounded-sm'>
                                <Image src={sevenup} loading="lazy" alt='' className='w-full rounded-sm  transition-all' placeholder='blur' />
                            </div>

                            <div className='flex flex-col py-8 gap-2'>
                                <span className='text-[22px] font-semibold'>7up Website Redesign</span>
                                <span className='text-[15px] leading-7'>Refreshing experience that reflects the brand’s lively and youthful personality.</span>
                            </div>
                        </div>
                        <div className=' flex gap-2 flex-wrap'>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>React</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>Tailwind</span>
                        </div>

                    </div>
                </Link>

                <Link href={"pharmacy-webapp"} data-aos="fade-up" className='h-auto justify-items-center cursor-pointer hover-text'
                data-aos-duration="1000" data-aos-easing="ease-out">
                    <div className='md:w-[350px] h-full w-[80%] relative flex flex-col transition-custom2 hover:scale-[1.02] justify-between bg-secondary-light-clr hover:bg-[#16202b] !py-[26px] !px-5 rounded-lg z-[1000]'>
                        <div>
                            <div className='w-full overflow-hidden rounded-sm'>
                                <Image src={pharmacy} loading="lazy" alt='' className='w-full rounded-sm  transition-all' placeholder='blur' />
                            </div>

                            <div className='flex flex-col py-8 gap-2'>
                                <span className='text-[22px] font-semibold'>Pharmacy Web App</span>
                                <span className='text-[15px] leading-7'>Simplify daily tasks—track stock, process orders, and manage patients</span>
                            </div>
                        </div>

                        <div className=' flex gap-2 flex-wrap'>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>React</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>Tailwind</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>Node Js</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>Express Js</span>
                            <span className='bg-[#1f2c3a] text-[12px] py-1 px-[13px] rounded-full h-fit font-thin'>MongoDB</span>
                        </div>

                    </div>
                </Link>
            </div>
        </div>
    )
}