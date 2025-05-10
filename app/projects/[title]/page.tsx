'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import store from 'public/img/projects/store.webp'
import sevenup from 'public/img/projects/sevenup.webp'
import Image from 'next/image'

export default function page() {
    const param = useParams()
    const [title, setTitle] = useState<unknown>()
    useEffect(() => {
        setTitle(param.title)
    }, [])
    return (
        <div>
            <div>
                <Image src={store} alt='' />
            </div>
        </div>
    )
}