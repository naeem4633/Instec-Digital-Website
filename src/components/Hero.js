import React from 'react'

const Hero = () => {
  return (
    <section className='hero h-[100vh] flex items-center mb-20 w-full bg-gray-900 text-gray-200'>
        <div className='mx-auto h-3/4 flex flex-row w-3/4 justify-between'>
            <div className='w-1/2 flex flex-col space-y-8 items-center justify-center'>
              <p className='text-5xl font-bold'>Instec Digital Systems</p>
              <p className='text-2xl text-gray-400'>All Your IT Needs in One Place</p>
            </div>
            <div className='w-1/2'>
              <img src='' className='w-full h-full border'></img>
            </div>
        </div>
    </section>
  )
}

export default Hero
