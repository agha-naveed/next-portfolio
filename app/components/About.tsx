import React from 'react'

export default function About() {
    return (
        <div className='w-full h-full bg-main-dark-clr lg:!pt-60 md:!py-50 !py-40 relative'>
            <div className='container !mx-auto justify-items-center'>
                <h2 className='text-5xl font-semibold text-white text-center' data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-out">About</h2>
                <p className='text-[18px] text-white !mt-6 w-[80%] text-center' data-aos="zoom-out" data-aos-duration="1600" data-aos-delay="300" data-aos-easing="ease-out">
                    <span className='text-[15px] text-white/50 text-start w-full block'>~ ChatGPT Says:</span>
                    "Hi, <span className='text-main-skin-clr'>He's Syed Naveed Abbas</span> — a Web Developer specializing in the <span className="text-main-skin-clr">MERN stack and Next.js</span>. He's also an instructor, passionate about sharing knowledge and helping others grow in tech. Lately, He has been diving into the exciting world of AI, expanding his skills beyond web development. Always curious, always building."
                </p>
            </div>
        </div>
    )
}