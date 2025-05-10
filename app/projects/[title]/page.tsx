'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import store from 'public/img/projects/store.webp'
import sevenup from 'public/img/projects/sevenup.webp'
import chatbot from 'public/img/projects/chatbot.webp'
import s from 'public/img/s.webp'
import Image from 'next/image'

export default function page() {
    const param = useParams()
    const imagesRef = [useRef<HTMLImageElement | null>(null), useRef(null), useRef(null)]


    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            imagesRef.forEach((ref, i) => {
                if (ref.current) {
                    ref.current.style.opacity = i === currentIndex ? '1' : '0'
                }
            })
            currentIndex = (currentIndex + 1) % imagesRef.length
        }, 6000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='!py-[90px]'>
            <div className='w-full min-h-[400px] h-auto overflow-hidden flex relative'>
                <Image src={s} className='w-full absolute transition-custom1 z-[20000] mix-blend-multiply opacity-[0.2]' alt='' />

                <Image ref={imagesRef[0]} src={store} className='w-full absolute transition-custom1' alt='' />
                <Image ref={imagesRef[1]} src={sevenup} className='w-full absolute opacity-0 transition-custom1' alt='' />
                <Image ref={imagesRef[2]} src={chatbot} className='w-full absolute opacity-0 transition-custom1' alt='' />
            </div>
        </div>
    )
}