import React from 'react'
import Analytics from '../assets/images/analytics.png'
const Stop: React.FC = () => {
    return (
        <div className='py-10 relative'>
            <div className=' text-gray-100 min-h-min sm:text-4xl text-center'>
                <h1 className=' md:text-5xl font-semibold font-sans '>Stop “Traffic Source” confusion and <br /> missed sales</h1>
                <p className=' sm:text-2xlfont-semibold mt-12 text-2xl'>Hyros plugs into your entire business and is able to see things <br /> Google and Facebook tracking will miss. Our customers <br /> consistently are able to attribute 30-40% more sales to their ads!</p>
                <div className='flex flex-row items-center justify-center mt-28'>
                    <img src={Analytics} />
                </div>
            </div>
        </div>
    )
}

export default Stop