'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

export const Pagination = () => {




    return (
        <div className=' w-full flex gap-7 mb-9 items-center justify-end pr-10'>
            <div className='flex items-center justify-center'>
                <Image className='w-4 transform rotate-180 h-auto' src={'/arrow.svg'} width={16} height={10} alt='arrow logo' />
            </div>

            <div className='flex items-center justify-center gap-6'>
                <button className=' text-[#045A5C] text-lg font-semibold'>1</button>
                <button className=' text-[#045A5C] text-lg font-semibold'>2</button>
                <button className=' text-[#045A5C] text-lg font-semibold'>3</button>
                <button className=' text-[#045A5C] text-lg font-semibold'>...</button>
                <button className=' text-[#045A5C] text-lg font-semibold'>12</button>

            </div>

            <div className='flex items-center justify-center'>
                <Image className='w-4 transform h-auto' src={'/arrow.svg'} width={16} height={10} alt='arrow logo' />
            </div>
        </div>
    )
}
