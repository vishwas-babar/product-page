import React from 'react'
import Image from 'next/image'
// import SearchIncon from 'Search.svg'

export const SearchBox = () => {
    return (
        <div className=' rounded-full gap-2 w-[366px] px-4 flex justify-between items-center bg-[#62C3C64D] bg-opacity-75 h-[34px] overflow-hidden '>
            <input
                type="text"
                className='w-full text-[#62C3C6] placeholder:text-[#62c3c6] h-full rounded-full bg-transparent focus:outline-none'
                placeholder="Search..."
            />
            <div className='h-fit w-fit'>
                <Image src={'/Search.svg'} width={17} height={17} alt='search logo'  />
            </div>
        </div>
    )
}
