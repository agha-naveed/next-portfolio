'use client'
import { useRef, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";

export default function Contact() {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    
    const textareaRef = useRef(null)

    const handleInput = () => {
    const textarea = textareaRef.current as HTMLTextAreaElement | null;
    if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

    return (
        <footer className='container !mx-auto text-white'>
            <div className='w-fit relative'>
                <button className='bg-gradient !px-7 !py-3 rounded-3xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] overflow-hidden cursor-pointer transition-all w-fit' title='View more about this Project' onClick={() => setIsClicked(true)}>
                    <span className='relative z-[200]'>Send Message</span>
                </button>
            </div>
            
            <div className={`fixed transition-all top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-[5px] z-[500000] ${isClicked ? "top-0 opacity-100" : "-top-full opacity-0"}`}>
                <IoCloseOutline className='text-5xl fixed top-7 right-7 hover-text'
                onClick={() => setIsClicked(false)} />

                <form className='w-full h-full flex text-xl justify-center items-center'>
                    <div className='flex flex-col gap-8 relative'>
                        <div className='flex gap-8'>
                            <div className='flex gap-3'>
                                <label htmlFor="">Name: </label>
                                <input type="text" required className='border-b outline-none w-40' />
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="">Email: </label>
                                <input type="email" required className='border-b outline-none w-60' />
                            </div>
                        </div>
                        <div className='w-full !mt-2'>
                            <label htmlFor="">Message: </label>
                            <textarea name="" rows={1} ref={textareaRef}
                            onInput={handleInput} className='!mt-2 !px-1 border-b min-h-[2rem] h-auto resize-none w-full overflow-hidden max-h-auto outline-none'></textarea>
                        </div>
                        <div className='w-fit relative'>
                            <button type='submit' className='bg-gradient !px-8 !py-[10px] rounded-3xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] overflow-hidden cursor-pointer transition-all w-fit' title='View more about this Project' onClick={() => setIsClicked(true)}>
                                <span className='relative z-[200]'>Submit</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </footer>
    )
}