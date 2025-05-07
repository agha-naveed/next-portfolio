import Image from 'next/image'
import React from 'react'
import pic from 'public/img/pic.webp'

export default function page() {
    return (
        <div className='w-full h-full bg-main-dark-clr'>
            <div className="container !mx-auto">
                <div className='w-full h-screen flex justify-center items-center gap-10 !pt-50 !px-4'>
                    <div className='w-1/2 text-white text-xl'>
                        <p>👋 Hi, I’m Syed Naveed Abbas, a passionate Full Stack Engineer from Skardu, Pakistan. With hands-on experience in building diverse web applications, I thrive on turning ideas into functional, scalable solutions.
                        <br />
                        <br />
                        💻 I’ve developed multiple projects across the stack—from frontend interfaces to backend systems—sharpening my skills in modern technologies. Currently pursuing my Bachelor’s in Computer Science, I’m deeply curious about the intersection of software development and cutting-edge innovation.
                        <br />
                        <br />
                        🚀 My next mission? Artificial Intelligence. I’m eager to expand my expertise into AI, exploring machine learning, deep learning, and intelligent systems to solve real-world challenges. Whether it’s coding, learning, or collaborating, I’m always ready for the next big problem to tackle.

                        Let’s build the future, one line of code at a time!</p>
                    </div>
                    <div className='w-1/2 !p-3 perspective-[1000px] relative flex place-content-center'>
                        <Image src={pic} className='w-[80%] border-3 border-white rotate-y-[-10deg] transition-all'  alt='' />
                        <div className='
                        w-[80%] h-full border-2 border-white/70 absolute top-5
                        rotate-y-[-10deg] z-[-1]
                        '></div>
                        <div className='
                        w-[80%] h-full border-2 border-white/40 absolute top-8 right-6
                        rotate-y-[-10deg] z-[-1]
                        '></div>
                    </div>
                </div>
            </div>
        </div>
    )
}