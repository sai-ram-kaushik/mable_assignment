import React from 'react'
import { HiCursorClick } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FcSalesPerformance } from 'react-icons/fc'
const Info: React.FC = () => {
  const info = [
    {
      quote: '"If you don’t use Hyros you’re not even woke. Buy Hyros"', name: 'Frank Kern', company: 'frankkern.com'
    },
    {
      quote: '“Hyros is a necessity for any Internet Marketer buying ads online today”', name: 'Douglas James', company: 'thedouglasjames.com'
    },
    {
      quote: '"We are already 300% more profitable 72 hours after using the software"', name: 'Dan Henry', company: 'getclients.com'
    },
  ]

  const work = [
    {
      icon: <HiCursorClick />,
    },
    {
      icon: <BsFillTelephoneFill />,
    },
    {
      icon: <AiOutlineMail />,
    },
    {
      icon: <FcSalesPerformance />,
    },
  ]
  return (
    <section id='info' className='py-10 relative'>
      <div className=' text-gray-100 bg-[#24222c] min-h-screen sm:text-4xl text-center'>
        <h2 className=' md:text-5xl font-semibold font-sans '>HYROS is hyper-accurate</h2>
        <h2 className=' md:text-5xl font-semibold mt-2 font-sans' >tracking for digital businesses</h2>
        <p className=' sm:text-2xlfont-semibold mt-12 text-2xl'>See your customer's journey. Every click and purchase your <br />customer makes is tracked and easy to view</p>
        <div className='flex items-center justify-center mt-28 gap-10 flex-wrap'>
          {
            info?.map((info, i) => (
              <div key={i} className='border-2 border-cyan-600 relative min-w-[25rem] max-w-[40rem] bg-gray-900 p-10 rounded-xl'>
                <div className='w-52 rounded-full'>
                  <div className='text-lg w-80 rounded-full flex  group-hover:text-cyan-600'>
                    {info.quote}
                  </div>
                </div>
                <p className='text-xl mt-2'>{info.name}</p>
                <p className='text-xl mt-3 '>{info.company}</p>
              </div>
            ))
          }
        </div>


        <div className='text-gray-100 mt-36 min-h-screen text-center'>
          <h2 className='md:text-5xl font-semibold font-sans'>How it Works</h2>
          <div className='flex items-center justify-center mt-28 gap-48 flex-wrap'>
            {
              work?.map((work, i) => (
                <div key={i} className='border-2 border-cyan-600 relative min-w-[2rem] max-w-[40rem] bg-gray-900 p-10 rounded-xl'>
                  <div className='w-18 rounded-full'>
                    <div className='text-3xl rounded-full flex group-hover:text-cyan-600'>
                      {work.icon}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>


          <div className='text-gray-100 mt-52 min-h-screen text-center'>
            <h2 className='md:text-5xl font-semibold font-sans'>Your full customer what, when, and <br /> where mapped to one profile</h2>
            <p className=' sm:text-2xlfont-semibold mt-12 text-2xl'>HYROS tracks your customer by 10 data points and combines <br /> them together for laser-accurate tracking</p>
            <div className='flex items-center justify-center mt-28 flex-wrap'>
              <div className='border-2 border-cyan-600 relative min-w-[5rem] max-w-[25rem] bg-gray-900 p-10 rounded-xl'>
                <div className='w-18 rounded-full'>
                  <div className='text-3xl rounded-full flex group-hover:text-cyan-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum accusantium alias eveniet, eius maiores vitae.
                  </div>
                </div>
              </div>
              <div className='border-2 border-cyan-600 relative min-w-[5rem] max-w-[25rem] ml-16 bg-gray-900 p-10 rounded-xl'>
                <div className='w-18 rounded-full'>
                  <div className='text-3xl rounded-full flex group-hover:text-cyan-600'>
                    @source
                  </div>
                </div>
              </div>
              <div className='border-2 border-cyan-600 relative min-w-[5rem] max-w-[25rem] ml-16 bg-gray-900 p-10 top-24 rounded-xl'>
                <div className='w-18 rounded-full'>
                  <div className='text-3xl rounded-full flex group-hover:text-cyan-600'>
                    $Product
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Info