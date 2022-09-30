import React from 'react'
import Image from '../assets/images/map_image.svg'
const Map: React.FC = () => {
    return (
        <div className='py-10 relative'>
            <div className=' text-gray-100 bg-[#29262e] min-h-screen sm:text-4xl text-center'>
                <h1 className=' md:text-5xl font-semibold font-sans '>All your data converted into an easy <br /> “Profit” marketing road map</h1>
                <p className=' sm:text-2xlfont-semibold mt-12 text-2xl'>Track all your traffic sources and their true sales data in one place</p>
                <div className='flex flex-row items-center justify-center mt-28'>
                <img src={Image}/>
                </div>
            </div>

        </div>
    )
}

export default Map