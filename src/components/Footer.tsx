import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <footer className=' lg:px-40 flex-col lg:flex-row gap-10 p-10 items-start min-h-[200px] flex lg:items-center justify-between w-full mt-auto bg-[#1A8D91] rounded-tr-[30px] rounded-tl-[30px]'>
            <div className='flex flex-col gap-3 w-fit'>
                <p className='font-light text-xs text-white text-opacity-50' >
                    AGB
                </p>
                <p className='font-light text-xs text-white text-opacity-50' >
                    Impressum
                </p>
                <p className='font-light text-xs text-white text-opacity-50' >
                    Datenschutz
                </p>
            </div>

            <div className=' w-[350px] gap-5 flex items-center justify-start flex-wrap h-fit'>
                <div className='flex flex-nowrap min-w-fit items-center justify-center gap-1'>
                    <Image src={'/activeleaf.svg'} alt='leaf logo' height={12} width={12} />
                    <small
                        className=' font-normal  text-base text-white'
                    >Rezept einlösen</small>
                </div>
                <div className='flex flex-nowrap min-w-fit items-center justify-center gap-1'>
                    <Image src={'/activeleaf.svg'} alt='leaf logo' height={12} width={12} />
                    <small
                        className=' font-normal  text-base text-white'
                    >Live Bestand</small>
                </div>
                <div className='flex flex-nowrap min-w-fit items-center justify-center gap-1'>
                    <Image src={'/activeleaf.svg'} alt='leaf logo' height={12} width={12} />
                    <small
                        className=' font-normal  text-base text-white'
                    >Videosprechstunde</small>
                </div>
                <div className='flex flex-nowrap min-w-fit items-center justify-center gap-1'>
                    <Image src={'/activeleaf.svg'} alt='leaf logo' height={12} width={12} />
                    <small
                        className=' font-normal  text-base text-white'
                    >FAQs</small>
                </div>
                <div className='flex flex-nowrap min-w-fit items-center justify-center gap-1'>
                    <Image src={'/activeleaf.svg'} alt='leaf logo' height={12} width={12} />
                    <small
                        className=' font-normal  text-base text-white'
                    >Kontakt</small>
                </div>

            </div>

            <div className='flex flex-col gap-2 min-w-40 w-40 items-start'>
                <p className=' font-light text-xs text-white text-opacity-50'>
                    Standort
                </p>

                <p className='text-base text-white text-wrap w-full font-extrabold'>
                    {'Bergstraße 49 - 57 69469 Weinheim (3 Glocken Quartier)'}
                </p>
            </div>

            <div>
            <p className=' font-light text-xs text-white text-opacity-50'>
                Telefon
            </p>
            <p className='text-base text-white text-wrap w-full font-extrabold'>
                0223 545 5250
            </p>
            </div>

            <div>
            <p className=' font-light text-xs text-white text-opacity-50'>
                Öffnungszeiten
            </p>
            <p className=' font-light text-xs text-white text-opacity-50'>
                Mo-Fr
            </p>

            <p className='text-base text-white text-wrap w-full font-extrabold'>
                {"09:00 – 18:00 Uhr"}
            </p>

            <p className=' font-light text-xs text-white text-opacity-50'>
                Sa
            </p>

            <p className='text-base text-white text-wrap w-full font-extrabold'>
                {"09:00 – 14:00 Uhr"}
            </p>
            </div>
        </footer>
    )
}
