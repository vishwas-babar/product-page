import React from 'react'
import { SearchBox } from './SearchBox'
import { Navitem } from './Navitem'
import { Cart } from './Cart'

export const TopNav = () => {
    return (
        <div className='flex justify-between mx-40 items-center mt-12'>
            <div className='flex items-center justify-center gap-6'>
                <SearchBox />
                <Navitem isActiveTab={true} title='Rezept einlösen' />
                <Navitem isActiveTab={false} title='Live Bestand' />
                <Navitem isActiveTab={false} title='Videosprechstunde' />
                <Navitem isActiveTab={false} title='FAQs' />
                <Navitem isActiveTab={false} title='Kontakt' />

            </div>
            <div className='flex items-center justify-center gap-7'>
                <Cart notificationCount={1} />

                <button className=' rounded-tl-[24px] text-md text-[#045A5C] font-normal rounded-br-[24px] w-[110px] h-[33px] bg-[#ECFEAA]'>
                    Anmelden
                </button>
            </div>
        </div>
    )
}
