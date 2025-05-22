'use client'
import { useParams, useRouter } from 'next/navigation'
import laptop from 'public/img/laptop_PNG101816.png'
// Store
import store from 'public/img/projects/lenmi store/1.webp'
import store2 from 'public/img/projects/lenmi store/2.webp'
import store3 from 'public/img/projects/lenmi store/3.webp'
// Lms
import lms from 'public/img/projects/lms/1.webp'
import lms2 from 'public/img/projects/lms/2.webp'
import lms3 from 'public/img/projects/lms/3.webp'
// chatbot
import chatbot from 'public/img/projects/chatbot/1.webp'
import chatbot2 from 'public/img/projects/chatbot/2.webp'
import chatbot3 from 'public/img/projects/chatbot/3.webp'
import chatbot4 from 'public/img/projects/chatbot/4.webp'
// sevenup
import sevenup from 'public/img/projects/7up-redesign/rec.gif'
import sevenup2 from 'public/img/projects/7up-redesign/2.webp'
import sevenup3 from 'public/img/projects/7up-redesign/3.webp'
// Pharmacy
import pharmacy1 from 'public/img/projects/pharmacy/1.jpg'
import pharmacy2 from 'public/img/projects/pharmacy/2.jpg'
import pharmacy3 from 'public/img/projects/pharmacy/3.jpg'
import pharmacy4 from 'public/img/projects/pharmacy/4.jpg'


import flare from 'public/img/blue-flare.jpg'
import Image from 'next/image'
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiCloudinary, SiMysql, SiOpenai, SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { useEffect, useRef, useState } from 'react';
import { ParamValue } from 'next/dist/server/request/params';
import { FaJava, FaReact } from "react-icons/fa6";
import Link from 'next/link'
import { FaNodeJs } from "react-icons/fa";

export default function page() {
    const imagesRef = [useRef<HTMLImageElement | null>(null), useRef(null), useRef(null)]

    const navigate = useRouter()
    const param = useParams()
    const [title, setTitle] = useState<ParamValue>("")
    useEffect(() => {
        setTitle(param.title)

        let currentIndex = 0
        const interval = setInterval(() => {
            imagesRef.forEach((ref, i) => {
                if (ref.current) {
                    ref.current.style.opacity = i === currentIndex ? '1' : '0'
                }
            })
            currentIndex = (currentIndex + 1) % imagesRef.length
        }, 6000)

        return () => clearInterval(interval)
    }, [])


    
    return (
        <div className='bg-main-dark-clr pic-bg'>
            <div className='container !mx-auto !py-[90px] flex flex-col gap-10'>
                {
                    title == "lenmi-store" ?
                    <div className='!px-7'>
                        <h1 className='md:text-[40px] sm:text-3xl text-[26px] text-white font-semibold border-b !py-3 w-fit !mb-9'>Lenmi Store</h1>
                        <div className='flex md:flex-row-reverse flex-col relative md:gap-3 gap-10'>
                            <div className='w-full overflow-hidden h-fit flex group relative place-content-center'>
                                <Image src={laptop} loading='lazy' className='select-none w-full h-fit relative z-[350]' alt='' />
                                <Image ref={imagesRef[0]} src={store} loading='lazy'
                                className='w-[74%] h-fit absolute top-[6%] transition-custom'
                                alt='' />
                                <Image ref={imagesRef[1]} src={store2} loading='lazy'
                                className='w-[74%] h-fit absolute top-[6%] opacity-0 transition-custom'
                                alt='' />
                                <Image ref={imagesRef[2]} src={store3} loading='lazy'
                                className='w-[74%] h-fit absolute top-[6%] opacity-0 transition-custom'
                                alt='' />
                            </div>
                            <div className='w-full flex flex-col self-center text-white'>
                                <h3 className='font-semibold md:text-4xl text-3xl relative z-20'>Overview</h3>
                                <p className='!pt-4 !pb-8 md:text-xl text-[18px] leading-8 relative z-20'>
                                    Lenmi Store is a user-friendly online platform for buying and selling products. It manages buyer accounts, shopping carts, and order records, making e-commerce simple and efficient for both customers and sellers.
                                </p>
                                <Image src={flare} className='w-[350px] absolute -top-20 opacity-50 animate-blink mix-blend-screen z-1 select-none' alt='' />
                            </div>
                        </div>

                        <div className='text-white'>
                            <h4 className='font-semibold text-[26px] !my-3'>Key Features:</h4>
                            <ol className='flex flex-col gap-5 list-disc !ml-6 font-medium text-[18px]'>
                                <li>Hashing & Encryption</li>
                                <li>Product Review and Rating System</li>
                                <li>Search and Filters</li>
                                <li>Shopping Cart</li>
                                <li>Seller Notifications</li>
                            </ol>

                            <div className='!py-10'>
                                <h4 className='font-semibold text-[26px] !my-3'>Tech Stacks:</h4>
                                <div className='flex flex-wrap gap-3'>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-4xl text-[28px] items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text transition-custom hover:bg-black'>
                                        <RiNextjsFill />
                                        <span className='md:text-xl text-[16px]'>Next Js</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-3xl text-2xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text group hover:bg-[#08b8dd] transition-custom'>
                                        <RiTailwindCssFill />
                                        <span className='md:text-xl text-[16px]'>Tailwind</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-xl text-[18px] items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text transition-custom hover:bg-black'>
                                        <SiShadcnui />
                                        <span className='md:text-xl text-[16px]'>Shadcn</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-2xl text-xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text hover:bg-[#08a457] transition-custom'>
                                        <BiLogoMongodb />
                                        <span className='md:text-xl text-[16px]'>MongoDB</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-xl text-[18px] items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text hover:bg-[#5708ca] transition-custom'>
                                        <SiCloudinary />
                                        <span className='md:text-xl text-[16px]'>Cloudinary</span>
                                    </div>
                                </div>

                            </div>
                            
                            <Link href={"https://lenmi-store.vercel.app"} target='_blank' className='relative bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit' title='View more about this Project'>
                                <span className='relative z-[200]'>Visit Site</span>
                            </Link>
                            
                        </div>
                    </div>

                    : title == "library-management-system" ?
                    <div className='!px-7'>
                        <h1 className='md:text-[40px] sm:text-3xl text-[26px] text-white font-semibold border-b !py-3 w-fit !mb-9'>Library Management System</h1>
                        <div className='flex md:flex-row-reverse flex-col relative md:gap-3 gap-10'>
                            <div className='w-full overflow-hidden h-fit flex group relative place-content-center'>
                                <Image src={laptop} loading='lazy' className='select-none w-full h-fit relative z-[350]' alt='' />
                                <Image  src={lms} loading='lazy'
                                className='w-[74%] h-fit absolute top-[1.7%] transition-custom'
                                alt='' />
                                <Image ref={imagesRef[0]} src={lms2} loading='lazy'
                                className='w-[72%] h-fit absolute top-[6.5%] opacity-0 transition-custom'
                                alt='' />
                                <Image ref={imagesRef[1]} src={lms3} loading='lazy'
                                className='w-[72%] h-fit absolute top-[6.5%] opacity-0 transition-custom'
                                alt='' />
                            </div>
                            <div className='w-full flex flex-col self-center text-white'>
                                <h3 className='font-semibold md:text-4xl text-3xl relative z-20'>Overview</h3>
                                <p className='!pt-4 !pb-8 md:text-xl text-[18px] leading-8 relative z-20'>
                                    The Library Management System is a desktop application designed to streamline library operations. It allows users to manage books, borrowers, issue and return records, and generate detailed reports through an easy-to-use graphical interface, improving efficiency and reducing manual workload.
                                </p>
                                <Image src={flare} className='w-[350px] absolute -top-20 opacity-50 animate-blink mix-blend-screen z-1 select-none' alt='' />
                            </div>
                        </div>

                        <div className='text-white'>
                            <h4 className='font-semibold text-[26px] !my-3'>Key Features:</h4>
                            <ol className='flex flex-col gap-5 list-disc !ml-6 font-medium text-[18px]'>
                                <li>Add Books</li>
                                <li>Borrower Management</li>
                                <li>Issue & Return Books</li>
                                <li>Report Generation</li>
                                <li>User-Friendly GUI</li>
                            </ol>

                            <div className='!py-10'>
                                <h4 className='font-semibold text-[26px] !my-3'>Tech Stacks:</h4>
                                <div className='flex flex-wrap gap-3'>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-[27px] text-[22px] items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text transition-custom hover:bg-red-500'>
                                        <FaJava />
                                        <span className='md:text-xl text-[16px]'>Java</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-4xl text-3xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text group hover:bg-[#e59908] transition-custom'>
                                        <SiMysql />
                                        <span className='md:text-xl text-[16px]'>MySQL</span>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>

                    : title == "agha-chatbot" ?
                    <div className='!px-7'>
                        <h1 className='md:text-[40px] sm:text-3xl text-[26px] text-white font-semibold border-b !py-3 w-fit !mb-9'>Agha Chatbot</h1>
                        <div className='flex md:flex-row-reverse flex-col relative md:gap-3 gap-10'>
                            <div className='w-full overflow-hidden h-fit flex group relative place-content-center'>
                                <Image src={laptop} loading='lazy' className='select-none w-full h-fit relative z-[350]' alt='' />
                                <Image ref={imagesRef[0]} src={chatbot} placeholder='blur'
                                className='w-[73%] h-fit absolute top-[5.5%] transition-custom'
                                alt='' />
                                <Image ref={imagesRef[1]} src={chatbot2} placeholder='blur'
                                className='w-[73%] h-fit absolute top-[5.5%] opacity-0 transition-custom'
                                alt='' />
                                <Image ref={imagesRef[2]} src={chatbot3} placeholder='blur'
                                className='w-[73%] h-fit absolute top-[5.5%] opacity-0 transition-custom'
                                alt='' />
                                <Image ref={imagesRef[3]} src={chatbot4} placeholder='blur'
                                className='w-[72%] h-fit absolute top-[4.5%] opacity-0 transition-custom'
                                alt='' />
                            </div>
                            <div className='w-full flex flex-col self-center text-white'>
                                <h3 className='font-semibold md:text-4xl text-3xl relative z-20'>Overview</h3>
                                <p className='!pt-4 !pb-8 md:text-xl text-[18px] leading-8 relative z-20'>
                                    Agha Chatbot is an AI-powered conversational assistant designed to provide smart, context-aware responses to user queries. It is a mobile-friendly web application built with a clean and responsive interface.
                                    <br />
                                    This project aims to demonstrate the fusion of AI and frontend development, offering an interactive user experience with real-time response handling.
                                </p>
                                <Image src={flare} className='select-none w-[350px] absolute -top-20 opacity-50 animate-blink mix-blend-screen z-1' alt='' />
                            </div>
                        </div>

                        <div className='text-white'>
                            <h4 className='font-semibold text-[26px] !my-3'>Key Features:</h4>
                            <ol className='flex flex-col gap-5 list-disc !ml-6 font-medium text-[18px]'>
                                <li>AI Chat Integration</li>
                                <li>Mobile-Friendly Design</li>
                                <li>Real-Time Messaging</li>
                                <li>Modern UI/UX</li>
                            </ol>

                            <div className='!py-10'>
                                <h4 className='font-semibold text-[26px] !my-3'>Tech Stacks:</h4>
                                <div className='flex flex-wrap gap-3'>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-[27px] text-[22px] items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text transition-custom hover:bg-[#00d5ff]'>
                                        <FaReact />
                                        <span className='md:text-xl text-[16px]'>React Js</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-3xl text-2xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text group hover:bg-[#08b8dd] transition-custom'>
                                        <RiTailwindCssFill />
                                        <span className='md:text-xl text-[16px]'>Tailwind</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-2xl text-2xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text group hover:bg-white hover:text-black transition-custom'>
                                        <SiOpenai />
                                        <span className='md:text-xl text-[16px]'>OpenAI</span>
                                    </div>
                                </div>
                            </div>

                            <Link href={"https://agha-ai.vercel.app"} target='_blank' className='relative bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit' title='View more about this Project'>
                                <span className='relative z-[200]'>Visit Site</span>
                            </Link>

                        </div>
                    </div>

                    : title == "7up-redesign" ?
                    <div className='!px-7'>
                        <h1 className='md:text-[40px] sm:text-3xl text-[26px] text-white font-semibold border-b !py-3 w-fit !mb-9'>7up Website Redesign</h1>
                        <div className='flex md:flex-row-reverse flex-col relative md:gap-3 gap-10'>
                            <div className='w-full overflow-hidden h-fit flex group relative place-content-center'>
                                <Image src={laptop} loading='lazy' className='select-none w-full h-fit relative z-[350]' alt='' />
                                <Image  src={sevenup}
                                className='w-[73%] h-fit absolute top-[5.5%] transition-custom'
                                alt='' />
                                <Image ref={imagesRef[0]} src={sevenup2} placeholder='blur'
                                className='w-[73%] h-fit absolute top-[5.5%] opacity-0 transition-custom'
                                alt='' />
                                <Image ref={imagesRef[1]} src={sevenup3} placeholder='blur'
                                className='w-[73%] h-fit absolute top-[5.5%] opacity-0 transition-custom'
                                alt='' />
                            </div>
                            <div className='w-full flex flex-col self-center text-white'>
                                <h3 className='font-semibold md:text-4xl text-3xl relative z-20'>Overview</h3>
                                <p className='!pt-4 !pb-8 md:text-xl text-[18px] leading-8 relative z-20'>
                                    The 7UP Website Redesign is a modern, interactive revamp of the classic beverage brand's online presence. This project aims to enhance user engagement and visual appeal through smooth animations, dynamic elements, and an intuitive layout. The redesign focuses on delivering a playful, refreshing experience that reflects the brand’s lively and youthful personality.
                                </p>
                                <Image src={flare} className='select-none w-[350px] absolute -top-20 opacity-50 animate-blink mix-blend-screen z-1' alt='' />
                            </div>
                        </div>

                        <div className='text-white'>
                            <h4 className='font-semibold text-[26px] !my-3'>Key Features:</h4>
                            <ol className='flex flex-col gap-5 list-disc !ml-6 font-medium text-[18px]'>
                                <li>Animated 7up Can Interaction</li>
                                <li>Horizontal Scrolling Navigation</li>
                                <li>Responsive Design</li>
                                <li>Modern UI/UX Design</li>
                                <li>Scroll Based Animation</li>
                            </ol>

                            <div className='!py-10'>
                                <h4 className='font-semibold text-[26px] !my-3'>Tech Stacks:</h4>
                                <div className='flex flex-wrap gap-3'>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-[27px] text-[22px] items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text transition-custom hover:bg-[#00d5ff]'>
                                        <FaReact />
                                        <span className='md:text-xl text-[16px]'>React Js</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-3xl text-2xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text group hover:bg-[#08b8dd] transition-custom'>
                                        <RiTailwindCssFill />
                                        <span className='md:text-xl text-[16px]'>Tailwind</span>
                                    </div>
                                </div>
                            </div>

                            <Link href={"https://7up-site-redesign.vercel.app"} target='_blank' className='relative bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit' title='View more about this Project'>
                                <span className='relative z-[200]'>Visit Site</span>
                            </Link>

                        </div>
                    </div>
                    : 
                    
                    title == "pharmacy-webapp" ?
                    <div className='!px-7'>
                        <h1 className='md:text-[40px] sm:text-3xl text-[26px] text-white font-semibold border-b !py-3 w-fit !mb-9'>7up Website Redesign</h1>
                        <div className='flex md:flex-row-reverse flex-col relative md:gap-3 gap-10'>
                            <div className='w-full overflow-hidden h-fit flex group relative place-content-center'>
                                <Image src={laptop} loading='lazy' className='select-none w-full h-fit relative z-[350]' alt='' />
                                <Image  src={pharmacy1}
                                className='w-[73%] h-fit absolute top-[5.5%] transition-custom'
                                alt='' />
                                <Image ref={imagesRef[0]} src={pharmacy2} placeholder='blur'
                                className='w-[73%] h-fit absolute top-[5.5%] opacity-0 transition-custom'
                                alt='' />
                                <Image ref={imagesRef[1]} src={pharmacy3} placeholder='blur'
                                className='w-[73%] h-fit absolute top-[5.5%] opacity-0 transition-custom'
                                alt='' />
                                <Image ref={imagesRef[2]} src={pharmacy4} placeholder='blur'
                                className='w-[73%] h-fit absolute top-[5.5%] opacity-0 transition-custom'
                                alt='' />
                            </div>
                            <div className='w-full flex flex-col self-center text-white'>
                                <h3 className='font-semibold md:text-4xl text-3xl relative z-20'>Overview</h3>
                                <p className='!pt-4 !pb-8 md:text-xl text-[18px] leading-8 relative z-20'>
                                    The Pharmacy Web App is a modern, user-centric platform designed to streamline and enhance pharmacy management. With a clean and responsive interface, this web application serves as a comprehensive solution for pharmacists, ensuring efficient handling of daily operations, inventory, and customer needs.
                                </p>
                                <Image src={flare} className='select-none w-[350px] absolute -top-20 opacity-50 animate-blink mix-blend-screen z-1' alt='' />
                            </div>
                        </div>

                        <div className='text-white'>
                            <h4 className='font-semibold text-[26px] !my-3'>Key Features:</h4>
                            <ol className='flex flex-col gap-5 list-disc !ml-6 font-medium text-[18px]'>
                                <li>Modern Design</li>
                                <li>Total Users Overview</li>
                                <li>Daily Sales Tracking</li>
                                <li>Advance Search</li>
                                <li>Customer Details Management</li>
                                <li>Medicine Receipt Generation</li>
                                <li>Supplier Details</li>
                            </ol>

                            <div className='!py-10'>
                                <h4 className='font-semibold text-[26px] !my-3'>Tech Stacks:</h4>
                                <div className='flex flex-wrap gap-3'>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-[27px] text-[22px] items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text transition-custom hover:bg-[#00d5ff]'>
                                        <FaReact />
                                        <span className='md:text-xl text-[16px]'>React Js</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-3xl text-2xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text group hover:bg-[#08b8dd] transition-custom'>
                                        <RiTailwindCssFill />
                                        <span className='md:text-xl text-[16px]'>Tailwind</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-3xl text-2xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text group hover:bg-black transition-custom'>
                                        <SiExpress />
                                        <span className='md:text-xl text-[16px]'>Express Js</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-3xl text-2xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text group hover:bg-node transition-custom'>
                                        <FaNodeJs />
                                        <span className='md:text-xl text-[16px]'>Node Js</span>
                                    </div>
                                    <div className='md:min-h-[54px] min-h-[46px] flex md:gap-3 gap-2 md:text-2xl text-xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit md:!px-5 !px-[16px] !py-2 rounded-lg cursor-pointer hover-text hover:bg-[#08a457] transition-custom'>
                                        <BiLogoMongodb />
                                        <span className='md:text-xl text-[16px]'>MongoDB</span>
                                    </div>
                                </div>
                            </div>

                            <Link href={"https://7up-site-redesign.vercel.app"} target='_blank' className='relative bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit' title='View more about this Project'>
                                <span className='relative z-[200]'>Visit Site</span>
                            </Link>

                        </div>
                    </div>
                    : ""
                }

            </div>
        </div>
    )
}