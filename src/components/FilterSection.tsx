'use client'
import React from 'react'
// import MultiRangeSlider from './FilterRange'

export const FilterSection = ({ className }: { className: string }) => {
    return (
        <aside className={`w-[250px] h-full ${className}`}>
        
            <button className='w-full h-[34px] font-semibold text-2xl text-[#045A5C] rounded-sm bg-[#d1e9e9]  '>
                Filter
            </button>

            {/* <MultiRangeSlider
                min={0}
                max={100}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            /> */}
        </aside>
    )
}
