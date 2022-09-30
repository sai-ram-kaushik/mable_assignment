import React from 'react'
import Image from '../assets/images/ltv1.png'
const Ltv = () => {
    return (
        <section className='min-h-screen flex py-10 md:flex-row flex-col'>
      <div className='flex-1 flex item-center justify-center h-full'>
        <img src={Image} alt="image" className='md:w-8/8 h-full object-cover mt-48' />
      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center'>
          <h1 className='text-white text-6xl font-extrabold mt-56'>See your customer <br /> true LTV</h1>
          <p className='text-2xl text-gray-400 ml-[19px] mt-5'>Hyros tracks your customer's every move from <br /> their first ad click to... forever. This lets you see <br /> the long-term ROI on your ads weeks, months <br /> and even years after the first ad click</p>
        </div>
      </div>
    </section>
    )
}

export default Ltv