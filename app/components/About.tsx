import React from 'react'

export default function About() {
    return (
        <div className='w-full h-full bg-main-dark-clr lg:!pt-60 md:!py-50 !py-40 relative'>
            <div className='container !mx-auto justify-items-center'>
                <h2 className='text-5xl font-semibold text-white text-center'>About</h2>
                <p className='text-[18px] text-white !mt-6 w-[80%] text-center'>
                    <span className='text-[15px] text-white/50 text-start w-full block'>~ ChatGPT Says:</span>
                    "Hi, <span className='text-main-skin-clr'>I’m Syed Naveed Abbas</span> — a Web Developer specializing in the <span className="text-main-skin-clr">MERN stack and Next.js</span>. I’m also an instructor, passionate about sharing knowledge and helping others grow in tech. Lately, I’ve been diving into the exciting world of AI, expanding my skills beyond web development. Always curious, always building."
                </p>
            </div>
        </div>
    )
}