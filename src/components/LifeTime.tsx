import React from 'react'
import Image from '../assets/images/linear.svg'
const LifeTime = () => {
    return (
        <div className='py-10 relative'>
            <div className=' text-gray-100 min-h-min sm:text-4xl text-center mt-36'>
                <h1 className=' md:text-5xl font-semibold font-sans '>See how much a customer spends over their entire lifetime</h1>
                <p className=' sm:text-2xlfont-semibold mt-12 text-2xl'>Hyros was designed with long click to sale cycles in mind. Hyros<br /> specializes in tracking sales calls, long sales funnels, upsells,<br /> downsells, recurring sales, memberships from their very first click<br /> to their very last click over days, months and years</p>
                <div className='flex flex-row items-center justify-center mt-28'>
                    <img src={Image} className='md:w-[45rem] h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default LifeTime