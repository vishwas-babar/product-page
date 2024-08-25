import Image from 'next/image'
import React from 'react'

export const Navigator = () => {
    return (
        <div className='flex items-center gap-5 justify-start'>
            <p className=' font-normal text-[#62C3C6]'>
                Home
            </p>
            <Image src={'arrow.svg'} width={20} height={10} alt='search logo' />
            <p className=' font-normal text-[#62C3C6]'>
                LiveStand
            </p>
            <Image src={'arrow.svg'} width={20} height={10} alt='search logo' />
            <p className=' font-bold  text-[#045A5C]'>
                Main products
            </p>
        </div>
    )
}
