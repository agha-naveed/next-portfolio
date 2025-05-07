'use client'
import React, { useRef, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { PiXLogo } from "react-icons/pi";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { div } from 'motion/react-client';
import Link from 'next/link';

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
                <div className='flex md:flex-row flex-col md:gap-20 gap-5 md:items-start items-center'>
                    <Link data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out" href={"https://linkedin.com/in/agha-naveed"} target='_blank' className='text-white flex items-center gap-1 hover-text'>
                        <FaLinkedinIn className='text-xl' />
                        <span>/Agha-Naveed</span>
                    </Link>
                    <Link data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-out" href={"https://x.com/in/naveed_kazmi31"} target='_blank' className='text-white flex items-center gap-1 hover-text'>
                        <PiXLogo className='text-xl' />
                        <span>/Naveed_Kazmi31</span>
                    </Link>
                    <Link data-aos="fade-up" data-aos-duration="1400" data-aos-easing="ease-out" href={"https://github.com/agha-naveed"} target='_blank' className='text-white flex items-center gap-1 hover-text'>
                        <FaGithub className='text-xl' />
                        <span>/Agha-Naveed</span>
                    </Link>
                </div>
            </div>
            <div className='w-fit relative !px-10 md:self-start self-center'>
                <button className='bg-gradient !px-7 !py-3 rounded-3xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] overflow-hidden cursor-pointer transition-all w-fit' title='View more about this Project' onClick={() => setIsClicked(true)} data-aos="fade-up" data-aos-duration="1800" data-aos-easing="ease-out">
                    <span className='relative z-[200]'>Send Message</span>
                </button>
            </div>
            
            <div className={`fixed transition-custom left-0 w-full bg-black/80 backdrop-blur-[5px] z-[500000] ${isClicked ? "opacity-100 h-screen top-0" : "opacity-0 !h-0 -top-30"}`}>
                <IoCloseOutline className='text-5xl fixed top-7 right-7 hover-text'
                onClick={() => setIsClicked(false)} />

                <form onSubmit={submitForm} className='w-full h-full flex text-xl justify-center items-center'>
                    <div className='flex flex-col gap-8 relative'>
                        <div className='flex gap-8'>
                            <div className='flex gap-3'>
                                <label htmlFor="">Name: </label>
                                <input type="text" required onInput={(e:React.ChangeEvent<HTMLInputElement>) => setUserName(e.target?.value)} className='border-b outline-none w-40' />
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="">Email: </label>
                                <input type="email" required className='border-b outline-none w-60'
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
                            <button type='submit' className='bg-gradient !px-8 !py-[10px] rounded-3xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] overflow-hidden cursor-pointer transition-all w-fit' title='View more about this Project'>
                                <span className='relative z-[200]'>Submit</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <span className='w-full text-center !px-5'>Designed by @AghaNaveed_ 2025</span>
        </footer>
    )
}