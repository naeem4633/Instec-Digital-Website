import React from 'react'

const Cover = ({backgroundUrl, heading, imageUrl}) => {
  return (
    <section className='w-full h-[100vh]'>
        <img src={backgroundUrl} className='w-full h-full gradient-background'></img>
        <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-1/2 -translate-y-[70vh]'>
            <div className='flex flex-col heading items-start'>
                <p className='text-white text-6xl font-bold '>{heading}</p>
                {/* <p className='text-6xl font-bold text-red-800'>Response</p> */}
            </div>
            <img className='' src={imageUrl}></img>
        </div>
    </section>
  )
}

export default Cover
