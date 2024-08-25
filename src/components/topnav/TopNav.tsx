import React from 'react'
import { SearchBox } from './SearchBox'
import { Navitem } from './Navitem'
import { Cart } from './Cart'

export const TopNav = () => {
    return (
        <div className='flex justify-between mx-40 items-center mt-12'>
            <div className='flex items-center justify-center gap-8'>
                <SearchBox />
                <Navitem isActiveTab={true} title='Home' />
                <Navitem isActiveTab={false} title='About' />
                <Navitem isActiveTab={false} title='Contact' />

            </div>
            <div className='flex items-center justify-center gap-7'>
                <Cart notificationCount={1} />

                <button className=' rounded-tl-[24px] text-md text-[#045A5C] font-normal rounded-br-[24px] w-[110px] h-[33px] bg-[#ECFEAA]'>
                    sign in
                </button>
            </div>
        </div>
    )
}
