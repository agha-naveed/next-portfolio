import Image from 'next/image'
import pic from 'public/img/under-construction90s-90s.gif'

export default function page() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-white text-3xl gap-4">
            <Image src={pic} className='w-40' alt='Under Construction' />
            <span>Under Construction</span>
        </div>
    )
}