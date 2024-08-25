import Image from 'next/image';
import React from 'react'

export const ProductCard = ({ title, isSpecial, tags, discount }: {
    isSpecial: boolean;
    title: string;
    tags: string[];
    discount: number;

}) => {
    return (
        <div className={` w-[310px] shadow-sm shadow-black rounded-tl-[30px] overflow-hidden rounded-br-[30px] ${isSpecial && " border-2 border-[#28E3E9] "}`}>
            <div className={`h-48 w-full flex items-center justify-center relative overflow-hidden ${isSpecial && " border-b-2 border-[#28E3E9]"}`}>
                <Image src={'/bottle.png'} loading='lazy' className='z-10 mt-5 w-auto flex items-end justify-end h-[140px]' height={150} width={100} alt='product' />

                <div className='absolute z-20 px-6 py-[15px] flex w-full justify-between items-center top-2 left-1/2 -translate-x-1/2'>
                    <div className={`py-[3px] px-3 rounded-full flex items-center justify-center gap-1  ${isSpecial ? "bg-[#A10C0C] bg-opacity-5" : "bg-[#62C3C6] bg-opacity-10"}`}>
                        {isSpecial && <div className='size-1 bg-[#A10C0C] rounded-full'> </div>}

                        <small className={`text-sm font-light ${isSpecial ? "text-[#A10C0C]" : "text-[#116A6C] "}`} >
                            {isSpecial ? "nicht lieferbar" : "sofort lieferbar"}
                        </small>
                    </div>

                    {!isSpecial && <div className={`bg-[#62C3C6] bg-opacity-10 py-[3px] px-3 rounded-full flex items-center justify-center gap-1 `} >
                        <small className=' text-sm font-light text-[#116A6C] ' >
                            Neu
                        </small>
                    </div>}
                </div>
            </div>

            <div className='w-full bg-[#62C3C6] overflow-hidden bg-opacity-30 flex flex-col justify-between gap-[30px] p-6'>
                <div className='flex flex-col  gap-6'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-4'>
                            <button className=' bg-[#62C3C6] bg-opacity-30  text-[#365758] w-fit font-semibold gap-2.5 px-2.5 py-0.5 rounded-[4px_0px_0px_0px] border-0 border-[2px_0px]'>
                                Canify
                            </button>
                            <div className='w-full flex items-center gap-2 justify-between'>
                                <button className='bg-white w-full px-[10px] font-normal text-[#116A6C] rounded-sm py-1'>
                                    THC {discount.toString() + "%"}
                                </button>
                                <button className='bg-[#62C3C6] font-normal text-white w-full px-[10px] rounded-sm py-1'>
                                    {'CBD <1%'}
                                </button>

                                <Image src={'/icon1.svg'} width={25} height={25} alt='logo' />
                            </div>

                        </div>
                        <div className='w-full'>
                            <p className='font-semibold text-[18px] #116A6C text-wrap text-[#116A6C]'>
                                {title}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-between'>
                        <div className='flex items-center justify-between' >
                            <small className=' font-normal text-[#365758]'>{tags[0]}</small>
                            <small className=' font-normal text-[#365758]'>{tags[1]}</small>
                        </div>
                        <div className='flex items-center justify-between' >
                            <small className=' font-normal text-[#365758]'>{tags[2]}</small>
                            <small className=' font-normal text-[#365758]'>{tags[3]}</small>
                        </div>
                    </div>
                </div>

                <div className='w-full flex items-center justify-between gap-5'>
                    <div className=''>
                        <div className='flex items-center justify-center gap-1'>
                            <Image src={'/currency.svg'} width={18} height={30} alt='currency logo' />
                            <p className='text-[#116A6C] text-2xl font-extrabold'>{'11,66'}</p>
                        </div>

                        <small className=' text-xs font-light text-[#365758] '>pro Gramm</small>
                    </div>
                    <div className='w-full'>
                        <button className='w-full rounded-tl-[24px] bg-[#ECFEAA] py-2 px-[18px] font-normal text-sm text-[#365758] rounded-br-[24px]'>
                            in den Warenkorb
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
