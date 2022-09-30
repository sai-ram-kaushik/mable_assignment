import React from 'react'
import Image1 from '../assets/images/chart1.png'
import Image2 from '../assets/images/chart2.png'
import Image3 from '../assets/images/chart3.png'
import Image4 from '../assets/images/ai.png'
const Models = () => {
    return (
        <div className='py-10 relative'>
            <div className=' text-gray-100 min-h-min sm:text-4xl text-center mt-36'>
                <h1 className=' md:text-5xl font-semibold font-sans '>Customizable attribution models</h1>
                <p className=' sm:text-2xlfont-semibold mt-12 text-2xl'>Hyros offers you countless ways to look at your customers'<br /> attribution all at the same time. You can go by last click, first click. You can split up the click value. You can even set time limits to <br /> attribution sources</p>
                <div className='flex flex-row items-center justify-center mt-28'>
                    <img src={Image1} className='md:w-[15rem] h-full object-cover' />
                    <img src={Image2} className='md:w-[15rem] h-full object-cover mt-20' />
                    <img src={Image3} className='md:w-[15rem] h-full object-cover ' />
                </div>
                <div className='flex items-center justify-center mt-28'>
                    <div className='border-2 border-cyan-600 relative items-center justify-center min-w-[15rem] max-w-[45rem] bg-gray-900 p-10 rounded-xl'>
                        <div className='w-18 rounded-full'>
                            <div className='text-3xl rounded-full flex group-hover:text-cyan-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore ducimus iusto hic quasi corrupti.
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-gray-100 min-h-min sm:text-4xl text-center mt-48'>
                    <h1 className=' md:text-5xl font-semibold font-sans '>Make your Ad AI smarter</h1>
                    <p className=' sm:text-2xlfont-semibold mt-12 text-2xl'>Google and Facebook use AIs to find you customers more <br /> effectively. However, their AI can only be as good as the data it’s <br />sent. Hyros uploads your tracking data allowing ad platforms to <br />learn faster and become significantly better at finding your <br />customers at a lower cost</p>
                </div>
                <div className='flex flex-row items-center justify-center mt-28'>
                    <img src={Image4} className=' h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Models