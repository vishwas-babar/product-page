'use client'
import React, { useState } from 'react'
import { SearchBox } from './SearchBox'
import { Navitem } from './Navitem'
import { Cart } from './Cart'

export const TopNav = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className='relative'>
            <div className='flex flex-col md:flex-row justify-between mx-4 xl:mx-40 items-center mt-4 md:mt-12'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6'>
                    <SearchBox />
                    <div className='hidden md:flex'>
                        <Navitem isActiveTab={true} title='Rezept einlösen' />
                        <Navitem isActiveTab={false} title='Live Bestand' />
                        <Navitem isActiveTab={false} title='Videosprechstunde' />
                        <Navitem isActiveTab={false} title='FAQs' />
                        <Navitem isActiveTab={false} title='Kontakt' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7 mt-4 md:mt-0'>
                    <Cart notificationCount={1} />
                    <button className='rounded-tl-[24px] text-md text-[#045A5C] font-normal rounded-br-[24px] w-[110px] h-[33px] bg-[#ECFEAA]'>
                        Anmelden
                    </button>
                    <button className='md:hidden' onClick={toggleDrawer}>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Side Drawer */}
            <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleDrawer}></div>
            <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex flex-col p-4'>
                    <button className='self-end mb-4' onClick={toggleDrawer}>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                        </svg>
                    </button>
                    <Navitem isActiveTab={true} title='Rezept einlösen' />
                    <Navitem isActiveTab={false} title='Live Bestand' />
                    <Navitem isActiveTab={false} title='Videosprechstunde' />
                    <Navitem isActiveTab={false} title='FAQs' />
                    <Navitem isActiveTab={false} title='Kontakt' />
                </div>
            </div>
        </div>
    )
}