import Image from 'next/image'
import React from 'react'
import pic from 'public/img/pic.webp'

export default function page() {
    return (
        <div className='w-full h-full bg-main-dark-clr'>
            <div className="container !mx-auto">
                <div className='w-full h-screen flex justify-center items-center gap-10 !pt-50 !px-4'>
                    <div className='w-1/2 text-white text-[18px]'>
                        

                        
                    </div>
                    <div className='w-1/2 !p-3 perspective-[1000px] relative flex place-content-center'>
                        <Image src={pic} placeholder='blur' className='w-[80%] border-3 border-white rotate-y-[-10deg] transition-all'  alt='' />
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


/*
<span>
    👋 Hi, I'm Syed Naveed Abbas from Skardu, Pakistan. 
    <br />
    I'm a passionate Full Stack Engineer with hands-on experience in <span className='text-main-skin-clr'> Next.js, MERN stack, Tailwind CSS, Bootstrap, and MySQL.</span>
    

    <p>
        💻 I’ve developed multiple projects across the stack—from frontend interfaces to backend systems—sharpening my skills in modern technologies. Currently pursuing my Bachelor’s in Computer Science, I’m deeply curious about the intersection of software development and cutting-edge innovation.
    </p>

    I'm currently pursuing my Bachelor's degree in Computer Science and actively expanding my skills in New Technologies.
    <br />
    I love building modern, scalable web applications and continuously learning new technologies.
</span>


<p>
    🚀 My next mission?
    <br />    
    Artificial Intelligence. I’m eager to expand my expertise into AI, exploring machine learning, deep learning, and intelligent systems to solve real-world challenges. Whether it’s coding, learning, or collaborating, I’m always ready for the next big problem to tackle.
</p>
*/