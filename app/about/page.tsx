import Image from 'next/image'
import React from 'react'
import pic from 'public/img/pic.webp'
import pic2 from 'public/img/pic2.webp'
import flare from 'public/img/blue-flare.jpg'

export default function page() {
    return (
        <div className='w-full min-h-screen bg-main-dark-clr overflow-hidden pic-bg'>
            <div className="container !mx-auto !pb-40">
                <div className='w-full lg:h-screen min-h-screen flex lg:flex-row-reverse flex-col-reverse justify-center items-center lg:gap-10 gap-20 relative !pt-40 !px-4'>

                    <div className='lg:w-1/2 w-full lg:h-[100%] lg:max-h-fit text-white md:text-[18px] flex flex-col place-content-start md:gap-20 gap-10 lg:overflow-y-auto lg:!pr-4 lg:!py-0 !px-3 !py-10 lg:text-justify lg:overflow-auto'>
                    
                        <Image src={flare} alt=''
                        className='absolute top-1/4 left-1/3 animate-blink opacity-90 mix-blend-screen w-80'
                        />
                      
                        <span className='flex flex-col gap-3'>
                            <h3 className='text-4xl font-semibold'>About</h3>
                            <p>👋Hi, My name is Syed Naveed Abbas, and I’m a passionate Full Stack Engineer from Skardu, Pakistan.
                            <br />
                            I enjoy building modern, responsive, and dynamic web applications that solve real-world problems. With strong knowledge of both frontend and backend technologies, I’ve worked on various projects that reflect my ability to design, develop, and deploy complete web solutions. I'm also highly motivated to keep learning and growing in the tech field, which is why I’ve recently started exploring Artificial Intelligence to expand my skill set and future career opportunities.</p>
                        </span>

                        <span className='flex flex-col gap-3'>
                            <h3 className='text-3xl font-semibold'>🎓 Education</h3>
                            <p>
                                - I'm currently pursuing my Bachelor's degree in Computer Science and actively expanding my skills in New Technologies.
                            </p>
                        </span>

                        <span className='flex flex-col gap-3'>
                            <h3 className='text-3xl font-semibold'>🚀 My next mission?</h3>
                            <p>
                                - Artificial Intelligence. I’m eager to expand my expertise into AI, exploring machine learning, deep learning, and intelligent systems to solve real-world challenges. Whether it’s coding, learning, or collaborating, I’m always ready for the next big problem to tackle.
                            </p>
                        </span>
                    </div>

                    

                    <div className='lg:max-w-1/2 lg:w-[45%] w-[90%] !p-3 perspective-[1000px] relative flex place-content-center z-[300]'>
                        <div className='rotate-y-[10deg] transition-all w-[80%] group'>
                            <Image src={pic} placeholder='blur' className={`w-full border-3 border-white`}  alt='' />
                            <Image src={pic2} placeholder='blur' className={`absolute transition-custom top-0 opacity-0 group-hover:opacity-100 z-[2000] w-full border-3 border-white`}  alt='' />
                        </div>
                        
                        <div className='
                        w-[80%] h-full border-2 border-white/70 absolute top-5
                        rotate-y-[10deg] z-[-1]
                        '></div>
                        <div className='
                        w-[80%] h-full border-2 border-white/40 absolute top-8 right-6
                        rotate-y-[10deg] z-[-1]
                        '></div>
                    </div>
                </div>
            </div>
        </div>
    )
}