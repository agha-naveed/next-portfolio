'use client'
import { useParams } from 'next/navigation'
import store from 'public/img/projects/store.webp'
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiCloudinary } from "react-icons/si";
import Image from 'next/image'
import { BiLogoMongodb } from "react-icons/bi";

export default function page() {
    const param = useParams()
    
    return (
        <div className='container !mx-auto !py-[90px] flex flex-col gap-10'>
            <div className='w-full overflow-hidden flex relative gap-5'>
                <Image src={store} className='w-1/2' alt='' />
                <Image src={store} className='w-1/2' alt='' />
            </div>
            <div className='text-white'>
                <h3 className='font-semibold text-4xl'>Description</h3>
                <p className='!pt-4 !pb-8'>Lenmi Store is a secure and user-friendly online shopping platform that offers a seamless shopping experience. It features product reviews and ratings, advanced search and filters, a shopping cart system, and seller notifications. With robust security through hashing and encryption, Lenmi Store ensures user data protection and smooth transactions, making it an ideal destination for both customers and sellers.</p>

                <h4 className='font-semibold text-[26px] !my-3'>Key Features:</h4>
                <ol className='flex flex-col gap-5'>
                    <li>
                        <span className='font-medium text-[18px]'>1. Hashing & Encryption:</span> 
                        <ul>
                            <li className='list-disc !mt-1 !mx-8'>
                                Lenmi Store uses advanced hashing and encryption algorithms to secure user data such as passwords and sensitive information.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className='font-medium text-[18px]'>2. Product Review and Rating System:</span> 
                        <ul>
                            <li className='list-disc !mt-1 !mx-8'>
                                Customers can leave reviews and rate products they purchase, allowing other shoppers to make informed decisions. This feature enhances user engagement and fosters trust in the products sold on the platform.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className='font-medium text-[18px]'>3. Search and Filters:</span> 
                        <ul>
                            <li className='list-disc !mt-1 !mx-8'>
                                Lenmi Store offers an intuitive search bar and advanced filtering options to help users find products quickly based on various criteria, such as price, category, brand, and customer ratings.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className='font-medium text-[18px]'>4. Shopping Cart:</span> 
                        <ul>
                            <li className='list-disc !mt-1 !mx-8'>
                                Customers can add items to their cart, modify quantities, or remove products before proceeding to checkout. The shopping cart system ensures a smooth transition from selection to purchase.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className='font-medium text-[18px]'>5. Seller Notifications:</span> 
                        <ul>
                            <li className='list-disc !mt-1 !mx-8'>
                                Sellers receive notifications whenever their product is bought by a customer. This feature keeps sellers informed in real-time and helps them manage their inventory and sales effectively.
                            </li>
                        </ul>
                    </li>

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

                
            </div>
        </div>
    )
}