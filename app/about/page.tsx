import Image from 'next/image'
import React from 'react'
import pic from 'public/img/pic.webp'

export default function page() {
    return (
        <div className='w-full h-full bg-main-dark-clr'>
            <div className="container !mx-auto">
                <div className='w-full h-screen flex flex-row-reverse justify-center items-center gap-10 !pt-40 !px-4'>
                    <div className='w-1/2 h-[100%] max-h-fit text-white text-[18px] flex flex-col place-content-start gap-20 overflow-y-auto !pr-4 text-justify'>
                        
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

                    <div className='max-w-1/2 w-[45%] !p-3 perspective-[1000px] relative flex place-content-center'>
                        <Image src={pic} placeholder='blur' className='w-[80%] border-3 border-white rotate-y-[10deg] transition-all'  alt='' />
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