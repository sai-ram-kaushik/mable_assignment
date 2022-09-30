import React from 'react'

const Hero:React.FC = () => {
  return (
    <section id='featuring' className='min-h-screen flex py-10 md:flex-row flex-col'> 
        <div className='flex-1 flex item-center justify-center h-full text-6xl text-white font-extrabold mt-24'>
            Track ads. <span className='text-orange-400 flex font-extrabold '>Feed AI.</span>
        </div>

        <div className='flex-1 text-orange-400 mt-60'>
            This is image side
        </div>
    </section>
  )
}

export default Hero