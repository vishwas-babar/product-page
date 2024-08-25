import Image from 'next/image'
import React from 'react'

export const Cart = ({ notificationCount }: { notificationCount: number }) => {
    return (
        <div className=' rounded-full aspect-square size-fit flex items-center relative justify-center'>
            <Image src={'/cart.svg'} height={22} width={22} alt='cart logo' />

            <div className=' size-[18px] rounded-full flex items-center justify-center absolute top-[7px] left-[18px] bg-[#62C3C6] bg-opacity-30' >
                <p className='text-[#28E3E9] font-medium text-[12px]'>
                    {notificationCount}
                </p>
            </div>
        </div>
    )
}
