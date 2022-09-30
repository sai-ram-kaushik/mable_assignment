import React from 'react'
import hero from '../assets/images/hero.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Hero: React.FC = () => {
  return (
    <section id='featuring' className='min-h-screen flex py-10 md:flex-row flex-col'>
      <div className='flex-1 flex item-center justify-center h-full'>
        <img src={hero} alt="image" className='md:w-8/12 h-full object-cover mt-72' />
      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center mt-28'>
          <h1 className='text-white text-8xl font-extrabold mt-48'>Track ads. <span className='text-orange-400'>Feed AI.</span></h1>
          <p className='text-2xl text-gray-400 ml-[19px] mt-5'>HYROS AI Print Tracking is proven to increase AD ROI in over 2,500 businesses</p>
          <div className='flex mt-24 flex-col gap-9'>
            <span className='text-white text-2xl ml-[19px] font-semibold'>See how, select your business type</span>
            <a href='#' className='text-2xl mt-9 text-white ml-5 border-b-4 w-96'>Info</a>
            <a href='#' className='text-2xl text-white ml-5 border-b-4 w-96'>Call Funnels</a>
            <a href='#' className='text-2xl text-white ml-5 border-b-4 w-96'>E-Commerce</a>
            <a href='#' ><button className='btn-primary mt-6 hover:bg-orange-400'>Just Get Me A Demo</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero