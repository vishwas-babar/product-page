import Image from 'next/image'
import React from 'react'

export const Navitem = ({ isActiveTab, title }: {
    isActiveTab: boolean;
    title: string;
}) => {
    return (
        <div className=' w-fit flex items-center justify-center gap-1'>
            {isActiveTab ? (
                <Image src={'/activeleaf.svg'} color="#28E3E9" width={10} height={16} alt='search logo' />
            ) : (
                <Image src={'/leaf.svg'} color="#62C3C6" width={10} height={16} alt='search logo' />
            )}
            {/* <Image src={'/leaf.svg'} color={isActiveTab ? "#28E3E9" : "#62C3C6"} width={10} height={16} alt='search logo' /> */}

            <h2 className={` ${isActiveTab ? " font-bold text-[#045A5C]" : " font-normal text-[#045A5C]"}`} >
                {title}
            </h2>
        </div>
    )
}
