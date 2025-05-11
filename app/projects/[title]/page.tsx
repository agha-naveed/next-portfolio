'use client'
import { useParams, useRouter } from 'next/navigation'
import laptop from 'public/img/laptop_PNG101816.png'
import store from 'public/img/projects/lenmi store/1.webp'
import store2 from 'public/img/projects/lenmi store/2.webp'
import store3 from 'public/img/projects/lenmi store/3.webp'
import flare from 'public/img/blue-flare.jpg'
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiCloudinary, SiMysql } from "react-icons/si";
import Image from 'next/image'
import { BiLogoMongodb } from "react-icons/bi";
import { useEffect, useRef, useState } from 'react';
import { ParamValue } from 'next/dist/server/request/params';
import { FaJava, FaReact } from "react-icons/fa6";
import Link from 'next/link'

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
        }, 4000)

        return () => clearInterval(interval)
    }, [])


    
    return (
        <div className='container !mx-auto !py-[90px] flex flex-col gap-10'>
            {
                title == "lenmi-store" ?
                <div className='!px-7'>
                    <h1 className='md:text-[40px] sm:text-3xl text-[26px] text-white font-semibold border-b !py-3 w-fit'>Lenmi Store</h1>
                    <div className='flex md:flex-row-reverse flex-col relative md:gap-3 gap-10'>
                        <div className='w-full overflow-hidden h-fit flex group relative place-content-center'>
                            <Image src={laptop} placeholder='blur' className='select-none w-full h-fit relative z-[350]' alt='' />
                            <Image ref={imagesRef[0]} src={store} placeholder='blur'
                            className='w-[74%] h-fit absolute xl:top-[26px] top-5 transition-custom'
                            alt='' />
                            <Image ref={imagesRef[1]} src={store2} placeholder='blur'
                            className='w-[74%] h-fit absolute xl:top-[26px] top-5 opacity-0 transition-custom'
                            alt='' />
                            <Image ref={imagesRef[2]} src={store3} placeholder='blur'
                            className='w-[74%] h-fit absolute xl:top-[26px] top-5 opacity-0 transition-custom'
                            alt='' />
                        </div>
                        <div className='w-full flex flex-col self-center text-white'>
                            <h3 className='font-semibold md:text-4xl text-3xl relative z-20'>Overview</h3>
                            <p className='!pt-4 !pb-8 md:text-xl text-[18px] leading-8 relative z-20'>
                                Lenmi Store is a user-friendly online platform for buying and selling products. It manages buyer accounts, shopping carts, and order records, making e-commerce simple and efficient for both customers and sellers.
                            </p>
                            <Image src={flare} className='w-[350px] absolute -top-20 opacity-50 animate-blink mix-blend-screen z-1' alt='' />
                        </div>
                    </div>

                    <div className='text-white'>
                        <h4 className='font-semibold text-[26px] !my-3'>Key Features:</h4>
                        <ol className='flex flex-col gap-5 list-disc !ml-6 font-medium text-[18px]'>
                            <li>Hashing & Encryption:</li>
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
                            <Image src={laptop} placeholder='blur' className='select-none w-full h-fit relative z-[350]' alt='' />
                            <Image ref={imagesRef[0]} src={store} placeholder='blur'
                            className='w-[74%] h-fit absolute xl:top-[26px] top-5 transition-custom'
                            alt='' />
                            <Image ref={imagesRef[1]} src={store2} placeholder='blur'
                            className='w-[74%] h-fit absolute xl:top-[26px] top-5 opacity-0 transition-custom'
                            alt='' />
                            <Image ref={imagesRef[2]} src={store3} placeholder='blur'
                            className='w-[74%] h-fit absolute xl:top-[26px] top-5 opacity-0 transition-custom'
                            alt='' />
                        </div>
                        <div className='w-full flex flex-col self-center text-white'>
                            <h3 className='font-semibold md:text-4xl text-3xl relative z-20'>Overview</h3>
                            <p className='!pt-4 !pb-8 md:text-xl text-[18px] leading-8 relative z-20'>
                                Lenmi Store is a user-friendly online platform for buying and selling products. It manages buyer accounts, shopping carts, and order records, making e-commerce simple and efficient for both customers and sellers.
                            </p>
                            <Image src={flare} className='w-[350px] absolute -top-20 opacity-50 animate-blink mix-blend-screen z-1' alt='' />
                        </div>
                    </div>

                    <div className='text-white'>
                        <h4 className='font-semibold text-[26px] !my-3'>Key Features:</h4>
                        <ol className='flex flex-col gap-5 list-disc !ml-6 font-medium text-[18px]'>
                            <li>Hashing & Encryption:</li>
                            <li>Product Review and Rating System</li>
                            <li>Search and Filters</li>
                            <li>Shopping Cart</li>
                            <li>Seller Notifications</li>
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
                : <p>Loading...</p>
            }

        </div>
    )
}