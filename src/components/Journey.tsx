import React from 'react'
import Image from '../assets/images/journey.svg'
const Journey = () => {
    return (
        <div className='py-10 relative'>
            <div className=' text-gray-100 min-h-min sm:text-4xl text-center'>
                <h1 className=' md:text-5xl font-semibold font-sans '>Entire customer’s journey across all <br /> traffic sources</h1>
                <p className=' sm:text-2xlfont-semibold mt-12 text-2xl'>Hyros connects all your traffic sources into one hub and allows you to see how your <br /> customers interact with your entire online presence. You will never have to "guess" <br /> about what your customers are doing again</p>
                <div className='flex flex-row items-center justify-center mt-28'>
                    <img src={Image} className='md:w-[80rem] h-full object-cover'/>
                </div>
            </div>
        </div>
    )
}

export default Journey