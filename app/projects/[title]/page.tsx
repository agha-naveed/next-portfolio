'use client'
import { useParams, useRouter } from 'next/navigation'
import laptop from 'public/img/laptop_PNG101816.png'
import store from 'public/img/projects/lenmi store/1.webp'
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiCloudinary, SiMysql } from "react-icons/si";
import Image from 'next/image'
import { BiLogoMongodb } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { ParamValue } from 'next/dist/server/request/params';
import { FaJava, FaReact } from "react-icons/fa6";
import Link from 'next/link'

export default function page() {
    const navigate = useRouter()
    const param = useParams()
    const [title, setTitle] = useState<ParamValue>("")
    useEffect(() => {
        setTitle(param.title)
    }, [])
    
    return (
        <div className='container !mx-auto !py-[90px] flex flex-col gap-10'>
            {
                title == "lenmi-store" ?
                <div>
                    <div className='flex flex-row-reverse relative gap-3'>
                        <div className='w-full overflow-hidden h-fit flex relative place-content-center'>
                            <Image src={laptop} placeholder='blur' className='w-full h-fit relative z-[200]' alt='' />
                            <Image src={store} placeholder='blur'
                            className='w-[74%] h-fit absolute top-[20px]'
                            alt='' />
                        </div>
                        <div className='w-full flex flex-col self-center text-white'>
                            <h3 className='font-semibold text-4xl'>Overview</h3>
                            <p className='!pt-4 !pb-8 text-xl leading-8'>
                                Lenmi Store is a user-friendly online platform for buying and selling products. It manages buyer accounts, shopping carts, and order records, making e-commerce simple and efficient for both customers and sellers.
                            </p>
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
                            <div className='flex gap-3'>
                                <div className='flex gap-3 text-4xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit !px-5 !py-2 rounded-lg cursor-pointer hover-text transition-custom hover:bg-black'>
                                    <RiNextjsFill />
                                    <span className='text-xl'>Next Js</span>
                                </div>
                                <div className='flex gap-3 text-3xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit !px-5 !py-2 rounded-lg cursor-pointer hover-text group hover:bg-[#08b8dd] transition-custom'>
                                    <RiTailwindCssFill />
                                    <span className='text-xl'>Tailwind</span>
                                </div>
                                <div className='flex gap-3 text-xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit !px-5 !py-2 rounded-lg cursor-pointer hover-text transition-custom hover:bg-black'>
                                    <SiShadcnui />
                                    <span className='text-xl'>Shadcn</span>
                                </div>
                                <div className='flex gap-3 text-2xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit !px-5 !py-2 rounded-lg cursor-pointer hover-text hover:bg-[#08a457] transition-custom'>
                                    <BiLogoMongodb />
                                    <span className='text-xl'>MongoDB</span>
                                </div>
                                <div className='flex gap-3 text-xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit !px-5 !py-2 rounded-lg cursor-pointer hover-text hover:bg-[#5708ca] transition-custom'>
                                    <SiCloudinary />
                                    <span className='text-xl'>Cloudinary</span>
                                </div>
                            </div>

                        </div>
                        
                        <Link href={"https://lenmi-store.vercel.app"} target='_blank' className='relative bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all w-fit' title='View more about this Project'>
                            <span className='relative z-[200]'>Visit Site</span>
                        </Link>
                        
                    </div>
                </div>
                : title == "library-management-system" ?
                <div>
                    <div className='flex flex-row-reverse relative gap-3'>
                        <div className='w-full overflow-hidden h-fit flex relative place-content-center'>
                            <Image src={laptop} placeholder='blur' className='w-full h-fit relative z-[200]' alt='' />
                            <Image src={store} placeholder='blur'
                            className='w-[74%] h-fit absolute top-[20px]'
                            alt='' />
                        </div>
                        <div className='w-full flex flex-col self-center text-white'>
                            <h3 className='font-semibold text-4xl'>Overview</h3>
                            <p className='!pt-4 !pb-8 text-xl leading-8'>
                                Lenmi Store is a user-friendly online platform for buying and selling products. It manages buyer accounts, shopping carts, and order records, making e-commerce simple and efficient for both customers and sellers.
                            </p>
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
                            <div className='flex gap-3'>
                                <div className='flex gap-3 text-3xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit !px-5 !py-2 rounded-lg cursor-pointer hover-text transition-custom hover:bg-red-500'>
                                    <FaJava />
                                    <span className='text-xl'>Java</span>
                                </div>
                                <div className='flex gap-3 text-3xl items-center border border-[#465b7cc2] bg-main-dark-clr w-fit !px-5 !py-2 rounded-lg cursor-pointer hover-text group hover:bg-[#e59908] transition-custom'>
                                    <SiMysql />
                                    <span className='text-xl'>MySQL</span>
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