'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { PiXLogo } from "react-icons/pi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { TbMail } from "react-icons/tb";

export default function Contact() {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    
    async function submitForm() {
        const res = await fetch("/api", {
            method: "POST",
            body: JSON.stringify({name: userName, email, message: textareaRef.current?.value}),
            headers: {
                'Content-Type': "application/json"
            }
        })
        const response = await res.json()
        if(response.message == 'ok') {
            alert("Message has been Sent!")
        }
        else {
            alert("Some Error Occurred!")
        }
    }


    const formRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ref = formRef.current
        if(!isClicked) {
            if(ref) {
                setTimeout(() => {
                    ref.style.display = "none"
                }, 400)
                ref.style.height = "0"
                ref.style.opacity = "0"
                ref.style.top = "-100%"
            }
        }
        else {
            if(ref) {
                ref.style.display = "block"
                setTimeout(() => {
                    ref.style.height = "100vh"
                    ref.style.opacity = "1"
                    ref.style.top = "0"
                }, 100)
            }
        }
    }, [isClicked])

    const handleInput = () => {
        const textarea = textareaRef.current as HTMLTextAreaElement | null;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    };

    return (
        <footer className='container !mx-auto h-full text-white relative flex flex-col gap-10 justify-center'>
            <div className='!px-10' data-aos="fade-up" data-aos-duration="1600" data-aos-easing="ease-out">
                <h3 className='text-xl font-semibold !mb-4 md:text-start text-center'>Connect:</h3>
                <div className='flex md:flex-row flex-col lg:gap-17 gap-5 md:items-start items-center'>
                    <Link href={"https://linkedin.com/in/agha-naveed"} target='_blank' className='text-white flex items-center lg:flex-row flex-col gap-1 hover-text'>
                        <FaLinkedinIn className='text-xl' />
                        <span className='w-max'>/Agha-Naveed</span>
                    </Link>
                    <Link href={"https://x.com/in/naveed_kazmi31"} target='_blank' className='text-white flex items-center lg:flex-row flex-col gap-1 hover-text'>
                        <PiXLogo className='text-xl' />
                        <span className='w-max'>/Naveed_Kazmi31</span>
                    </Link>
                    <Link href={"https://github.com/agha-naveed"} target='_blank' className='text-white flex items-center lg:flex-row flex-col gap-1 hover-text'>
                        <FaGithub className='text-xl' />
                        <span className='w-max'>/Agha-Naveed</span>
                    </Link>
                    <Link href={"mailto:naveedabs31@gmail.com"} target='_blank' className='text-white flex items-center lg:flex-row flex-col gap-1 hover-text'>
                        <TbMail className='text-[22px]' />
                        <span className='w-max'>NaveedAbs31@gmail.com</span>
                    </Link>
                </div>
            </div>
            <div className='w-fit relative !px-10 md:self-start self-center'>
                <button className='bg-gradient !px-7 !py-3 rounded-3xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] overflow-hidden cursor-pointer transition-all w-fit' title='View more about this Project' onClick={() => setIsClicked(true)} data-aos="fade-up" data-aos-duration="1800" data-aos-easing="ease-out">
                    <span className='relative z-[200]'>Send Message</span>
                </button>
            </div>
            
            <div ref={formRef} className={`fixed transition-custom left-0 w-full bg-black/80 backdrop-blur-[5px] z-[500000]`}>
                <IoCloseOutline className='text-5xl fixed top-7 right-7 hover-text'
                onClick={() => setIsClicked(false)} />

                <form onSubmit={submitForm} className='w-full h-full flex text-xl justify-center items-center'>
                    <div className='flex flex-col sm:gap-8 gap-5 relative !px-8'>
                        <div className='flex md:flex-row flex-col sm:gap-8 gap-5'>
                            <div className='flex sm:flex-row flex-col gap-3'>
                                <label htmlFor="">Name: </label>
                                <input type="text" required onInput={(e:React.ChangeEvent<HTMLInputElement>) => setUserName(e.target?.value)} className='border-b outline-none md:w-40 w-full' />
                            </div>
                            <div className='flex sm:flex-row flex-col gap-3'>
                                <label htmlFor="">Email: </label>
                                <input type="email" required className='border-b outline-none md:w-60 w-full'
                                onInput={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target?.value)} 
                                />
                            </div>
                        </div>
                        <div className='w-full !mt-2'>
                            <label htmlFor="">Message: </label>
                            <textarea rows={1} ref={textareaRef}
                            onInput={handleInput} className='!mt-2 !px-1 !py-2 border-b min-h-[2rem] h-auto resize-none w-full overflow-hidden outline-none max-h-80'
                            ></textarea>
                        </div>
                        <div className='w-fit relative'>
                            <button type='submit' className='bg-gradient !px-8 !py-[10px] rounded-3xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] overflow-hidden cursor-pointer transition-all w-fit' title='Send Message/Review'>
                                <span className='relative z-[200]'>Submit</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <span className='w-full text-center !px-5z'>Designed by @AghaNaveed_ 2025</span>
        </footer>
    )
}