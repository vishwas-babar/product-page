import React from 'react'
// import "./multiRangeSlider.css";
import './filterrange.css';

export const FilterRange = ({ title, type, min, max }: {
    title: string,
    type: 'percentage' | 'price',
    min: number,
    max: number,
}) => {
    return (
        <div className='container'>
            <input
                type="range"
                min={min}
                max={max}
                className="thumb thumb--zindex-3"
            />
            <input
                type="range"
                min={min}
                max={max}
                className="thumb thumb--zindex-4"
            />
        </div>
    );
}

// 'use client';

// import React, { useCallback, useEffect, useState, useRef } from "react";
// import PropTypes from "prop-types";
// import "./multiRangeSlider.css";

// const MultiRangeSlider = ({ min, max, onChange }: {
//     min: number;
//     max: number;
//     onChange: (values: { min: number; max: number }) => void;
// }) => {
//     const [minVal, setMinVal] = useState(min);
//     const [maxVal, setMaxVal] = useState(max);
//     const minValRef = useRef(min);
//     const maxValRef = useRef(max);
//     const range = useRef(null);

//     // Convert to percentage
//     const getPercent = useCallback(
//         (value: any) => Math.round(((value - min) / (max - min)) * 100),
//         [min, max]
//     );

//     // Set width of the range to decrease from the left side
//     useEffect(() => {
//         const minPercent = getPercent(minVal);
//         const maxPercent = getPercent(maxValRef.current);

//         if (range.current) {
//             range.current.style.left = `${minPercent}%`;
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [minVal, getPercent]);

//     // Set width of the range to decrease from the right side
//     useEffect(() => {
//         const minPercent = getPercent(minValRef.current);
//         const maxPercent = getPercent(maxVal);

//         if (range.current) {
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [maxVal, getPercent]);

//     // Get min and max values when their state changes
//     useEffect(() => {
//         onChange({ min: minVal, max: maxVal });
//     }, [minVal, maxVal, onChange]);

//     return (
//         <>
//             <div className="sticky mt-16 left-0 w-[250px]">
//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     value={minVal}
//                     onChange={(event) => {
//                         const value = Math.min(Number(event.target.value), maxVal - 1);
//                         setMinVal(value);
//                         minValRef.current = value;
//                     }}
//                     className="thumb thumb--left custom-range"
//                     style={{ zIndex: minVal > max - 100 && 5 || undefined }}
//                 />
//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     value={maxVal}
//                     onChange={(event) => {
//                         const value = Math.max(Number(event.target.value), minVal + 1);
//                         setMaxVal(value);
//                         maxValRef.current = value;
//                     }}
//                     className="thumb thumb--right custom-range"
//                 />

//                 <div className="slider">
//                     <div className="slider__track" />
//                     <div ref={range} className="slider__range" />
//                 </div>


//             </div>
//             <div className="w-full margin-10 flex items-center justify-center">
//                 <div className="w-full">
//                     {minVal}%
//                 </div>
//                 <small className="w-5 flex items-center justify-center">-</small>
//                 <div className="w-full">
//                     {maxVal}%
//                 </div>
//             </div>
//         </>

//     );
// };

// MultiRangeSlider.propTypes = {
//     min: PropTypes.number.isRequired,
//     max: PropTypes.number.isRequired,
//     onChange: PropTypes.func.isRequired
// };

// export default MultiRangeSlider;
