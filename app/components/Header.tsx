import Image from 'next/image'
import bgBlend from "public/img/bg1.png"
import ANtext from 'public/img/naveed_text.png'
import dottedBg from 'public/img/dotted_overlay.png'

export default function Header() {
    return (
        <div className='w-full h-screen bg-main-dark-clr text-white'>
            <div className='w-full object-center absolute top-0'>
                <Image src={bgBlend} alt="" 
                className='w-full mix-blend-color-dodge'
                />
            </div>
            <div className='container !mx-auto h-full relative flex flex-col items-center justify-center'>
                <div className='justify-self-center'>
                    <Image src={ANtext} alt=''
                    className='w-[800px]'
                    />
                </div>
                <span className='uppercase font-extrabold text-3xl !mt-4'>full-<span className='txt-stroke text-transparent'>stack</span> developer</span>
                <div>
                    <Image className='
                    absolute top-[40%] left-1/2 -translate-x-1/2
                    mix-blend-screen opacity-20
                    ' src={dottedBg} alt=''/>
                </div>
            </div>
            
        </div>
    )
}