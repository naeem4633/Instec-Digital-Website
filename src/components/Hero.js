import React from 'react'

const Hero = () => {
  return (
    <section className='hero h-[100vh] items-center mb-20 w-full text-gray-200'>
        <img src='../static/images/gradient-2.png' className='w-full h-full'></img>
        <div className='mx-auto h-3/4 flex flex-row w-3/4 justify-between -translate-y-[90vh]'>
            <div className='w-1/2 flex flex-col space-y-8 items-center justify-center'>
              <p className='text-5xl font-bold'>Instec Digital Systems</p>
              <p className='text-2xl text-gray-400'>All Your IT Needs in One Place</p>
            </div>
            <div className='w-1/2'>
              <img src='../static/images/gradient-2.png' className='w-full h-full border'></img>
            </div>
        </div>
    </section>
  )
}

export default Hero
