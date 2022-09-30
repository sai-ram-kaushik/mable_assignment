import React from 'react'

const Scale: React.FC = () => {
    const logo = [
        {
            logo:'logo1',
        },
        {
            logo:'logo2',
        },
        {
            logo:'logo3',
        },
        {
            logo:'logo4',
        },
    ]
    return (
        <div className='py-10 relative'>
            <div className=' text-gray-100 min-h-min sm:text-4xl text-center'>
                <h1 className=' md:text-5xl font-semibold font-sans '>Scale, Save and Dominate</h1>
                <p className=' sm:text-2xlfont-semibold mt-12 text-2xl'>We are so confident that you will do it so hard <br />that we have a downright cocky</p>
                <div className='flex items-center justify-center mt-28'>
                    <div className='border-2 border-cyan-600 relative items-center justify-center min-w-[5rem] max-w-[20rem] bg-gray-900 p-10 rounded-xl'>
                        <div className='w-18 rounded-full'>
                            <div className='text-3xl rounded-full flex group-hover:text-cyan-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore ducimus iusto hic quasi corrupti.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-gray-100 min-h-screen sm:text-4xl mt-60 text-center'>
                    <h1 className=' md:text-5xl font-semibold font-sans'>Because at Hyros we sell <br />cold hard... Results</h1>
                    <p className=' sm:text-2xlfont-semibold mt-12 text-2xl'>Which earns us clients like</p>
                    <div className='flex flex-row gap-16 items-center justify-center'>
                        {
                            logo?.map((logo, i) => (
                                <div key={i} className='border-2 border-cyan-600 relative min-w-[5rem] max-w-[15rem] bg-gray-900 p-10 rounded-xl mt-20'>
                                    <div className='w-52 rounded-full'>
                                        <div className='text-lg w-80 rounded-full flex  group-hover:text-cyan-600'>
                                            {logo.logo}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-row gap-16 items-center justify-center'>
                        {
                            logo?.map((logo, i) => (
                                <div key={i} className='border-2 border-cyan-600 relative min-w-[5rem] max-w-[15rem] bg-gray-900 p-10 rounded-xl mt-20'>
                                    <div className='w-52 rounded-full'>
                                        <div className='text-lg w-80 rounded-full flex  group-hover:text-cyan-600'>
                                            {logo.logo}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scale