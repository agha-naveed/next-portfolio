import React from 'react'

export default function About() {
    return (
        <div className='w-full h-full p-sec bg-main-dark-clr !pt-80 !pb-50'>
            <div className='container !mx-auto justify-items-center'>
                <h2 className='text-5xl font-bold text-white text-center'>About</h2>
                <p className='text-[18px] text-white !mt-6 w-[80%] text-center'>Hi, I’m <span className='text-main-skin-clr'>Syed Naveed Abbas</span> from Skardu, Pakistan. I’m a passionate MERN Stack Developer with a strong foundation in technologies like <span className='text-main-skin-clr'>MongoDB, Express.js, React, Node.js, as well as Next.js, Bootstrap, TailwindCSS, and MySQL.</span> I’m always eager to learn and stay updated with the latest trends in the development world.</p>
            </div>
        </div>
    )
}