import Image from 'next/image'
import { Tilt } from 'react-tilt'
import blueFlare from 'public/img/blue-flare.jpg'
import store from 'public/img/projects/store.webp'
import chatbot from 'public/img/projects/chatbot.webp'
import sevenup from 'public/img/projects/sevenup.webp'
import dottedBg from 'public/img/dotted-small.png'
import pharmacy from 'public/img/projects/pharmacy.webp'
import player from 'public/img/projects/music_player.webp'
import lms from 'public/img/projects/lib_lms.webp'

export default function Projects() {
    const defaultOptions = {
        reverse: false,
        max: 10,
        perspective: 1000,
        scale: 1.01,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }
    
    return (
        <div className='w-full h-full !py-10 overflow-hidden bg-main-dark-clr relative -top-3'>
            <div className="container !mx-auto text-white">

                <h2 className='md:text-5xl text-[40px] font-semibold text-white text-center !mb-15'>PROJECTS</h2>

                <div className='flex flex-wrap justify-center relative gap-14'>

                    <Image src={dottedBg} alt=''
                    className='mix-blend-screen opacity-15
                    absolute top-70 -left-20 w-[70%]
                    '
                    />

                    <Image src={blueFlare}
                    className='absolute
                    mix-blend-screen
                    animate-blink
                    top-70
                    left-30
                    w-[350px]
                    '
                    alt='' />


                    <Tilt options={defaultOptions} className='md:w-[350px] w-[80%] relative bg-secondary-light-clr !pt-3 !pb-[90px] !px-5 rounded-lg z-[100]'>
                        <span className='font-semibold text-2xl block !py-[14px]'>Online Shopping Site</span>
                        <div className='w-full overflow-hidden rounded-sm'>
                            <Image src={store} alt='' className='w-full rounded-sm hover:scale-105 transition-all' placeholder='blur' />
                        </div>

                        <div className='flex flex-col !py-8 gap-1'>
                            <span className='text-[22px] font-medium'>Lenmi Store Online Shopping Platform</span>
                            <span className='text-[18px] font-medium'>Desktop Application</span>
                        </div>
                        <button className='bg-gradient !px-5 !py-[10px] w-fit rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all hover:bg-main-skin-clr !mb-5 absolute bottom-[16px]' title='View more about this Project'>
                            <span className='relative z-[200]'>View More</span>
                        </button>

                    </Tilt>


                    <Tilt options={defaultOptions} className='md:w-[350px] w-[80%] relative bg-secondary-light-clr !pt-3 !pb-[90px] !px-5 rounded-lg z-[100]'>
                        <span className='font-semibold text-2xl block !py-[14px]'>Library Management Software</span>

                        <div className='w-full overflow-hidden rounded-sm'>
                            <Image src={lms} alt='' className='w-full rounded-sm hover:scale-105 transition-all' placeholder='blur' />
                        </div>

                        <div className='flex flex-col !py-8 gap-1'>
                            <span className='text-[22px] font-medium'>Library Management System</span>
                            <span className='text-[18px] font-medium'>Desktop Application</span>
                        </div>
                        <button className='bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer transition-all hover:bg-main-skin-clr w-fit !mb-5 absolute bottom-[16px]' title='View more about this Project'>
                            <span className='relative z-[200]'>View More</span>
                        </button>

                    </Tilt>


                    <Tilt options={defaultOptions} className='md:w-[350px] w-[80%] relative bg-secondary-light-clr !pt-3 !pb-[90px] !px-5 rounded-lg z-[100]'>
                        <span className='font-semibold text-2xl block !py-[14px]'>AI Chatbot</span>
                        
                        <div className='w-full overflow-hidden rounded-sm'>
                            <Image src={chatbot} alt='' className='w-full rounded-sm hover:scale-105 transition-all' placeholder='blur' />
                        </div>
                        
                        <div className='flex flex-col !py-8 gap-1'>
                            <span className='text-[22px] font-medium'>Agha AI Chatbot</span>
                            <span className='text-[18px] font-medium'>Artificial Intelligence</span>
                        </div>
                        <button className='bg-gradient bg-gradient !px-5 !py-[10px] rounded-xl bg-main-dark-clr font-medium text-[18px] border-[1px] border-[#465b7c] cursor-pointer w-fit !mb-5 absolute bottom-[16px]' title='View more about this Project'>
                            <span className='relative z-[200]'>View More</span>
                        </button>

                    </Tilt>
                    
                </div>


                <div className='!py-30 !px-2 relative'>
                    <Image src={dottedBg} alt=''
                        className='mix-blend-screen opacity-10
                        absolute bottom-10 -right-70 rotate-270 w-[70%] !select-none
                        '
                    />
                    <h2 className='md:text-5xl text-[40px] font-semibold text-white text-center !mb-15'>OTHER PROJECTS</h2>

                    <div className='flex flex-wrap justify-center relative gap-14'>
                        <Tilt className="justify-items-center" options={defaultOptions}>
                            <Image src={sevenup} className='lg:w-[350px] md:w-[330px] w-[80%] rounded-lg' alt='' />
                        </Tilt>
                        <Tilt className="justify-items-center" options={defaultOptions}>
                            <Image src={chatbot} className='lg:w-[350px] md:w-[330px] w-[80%] rounded-lg' alt='' />
                        </Tilt>
                        <Tilt className="justify-items-center" options={defaultOptions}>
                            <Image src={store} className='lg:w-[350px] md:w-[330px] w-[80%] rounded-lg' alt='' />
                        </Tilt>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}