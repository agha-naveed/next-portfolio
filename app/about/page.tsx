import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='w-full h-full bg-main-dark-clr'>
            <div className="container !mx-auto">
                <div className='w-full h-screen flex justify-center items-center gap-10'>
                    <div className='w-1/2'>
                        <Image src={"https://i.pinimg.com/736x/3a/5e/34/3a5e34b856a844fffec50f533fa64ec5.jpg"} className='w-full rounded-lg' width={200} height={200} alt='' />
                    </div>
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
                </div>
            </div>
        </div>
    )
}

/*

    👋 Hi, I’m Syed Naveed Abbas, a passionate Full Stack Engineer from Skardu, Pakistan. With hands-on experience in building diverse web applications, I thrive on turning ideas into functional, scalable solutions.

    💻 I’ve developed multiple projects across the stack—from frontend interfaces to backend systems—sharpening my skills in modern technologies. Currently pursuing my Bachelor’s in Computer Science, I’m deeply curious about the intersection of software development and cutting-edge innovation.

    🚀 My next mission? Artificial Intelligence. I’m eager to expand my expertise into AI, exploring machine learning, deep learning, and intelligent systems to solve real-world challenges. Whether it’s coding, learning, or collaborating, I’m always ready for the next big problem to tackle.

    Let’s build the future, one line of code at a time!

*/