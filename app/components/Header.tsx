import Image from 'next/image'
import bgBlend from "public/img/bg1.webp"
import ANtext from 'public/img/naveed_text.webp'
import dottedBg from 'public/img/dotted_overlay.webp'
import blueFlare from 'public/img/blue-flare.jpg'
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt';

export default function Header() {
    return (
        <div className='w-full min-h-screen h-screen bg-main-dark-clr text-white'>
            <div className='w-full object-center absolute top-0'>
                <Image src={bgBlend} placeholder='blur' alt="" 
                className='w-full mix-blend-color-dodge select-none'
                />
            </div>
            
            <div className='container !mx-auto h-full relative flex flex-col items-center justify-center'>
                
                <div className='relative justify-self-center justify-items-center'>
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={2} scale={1.03} className='relative z-[999999] justify-items-center' >
                    <Image src={ANtext} alt='AGHA NAVEED'
                    data-aos="zoom-out-up" data-aos-duration="1000"
                    className='lg:w-[750px] md:w-[500px] w-[70%]'
                    decoding='async'
                    />
                    </Tilt>
                    <div>
                        <Image src={blueFlare}
                        className='absolute
                        mix-blend-screen
                        animate-blink
                        -top-48
                        -left-30
                        w-[350px]
                        '
                        alt='' />
                    </div>
                    
                </div>
                <span 
                data-aos="zoom-out-up" data-aos-duration="2200"
                className='uppercase flex gap-[6px] font-extrabold md:text-[26px] sm:text-[20px] text-[14px] !mt-4 tracking-[4px]'>
                        <Typewriter
                        words={["Full Stack", "MERN Stack", "Software"]}
                        loop={false}
                        cursor
                        />
                        <span className='txt-stroke text-transparent'>
                            developer
                        </span>
                </span>
                
                
                <Image
                data-aos="zoom-out-up" data-aos-duration="2500"
                className='
                absolute md:top-[40%] top-[50%] md:w-full w-[80%] left-1/2 -translate-x-1/2 z-[1000]
                mix-blend-screen !opacity-20 select-none'
                src={dottedBg} alt=''/>
            </div>
            
        </div>
    )
}
