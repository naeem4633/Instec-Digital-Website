import React from 'react'
import { Link } from 'react-router-dom'
import { ResetPage } from '../ResetPage';

const ErrorPage = () => {
  return (
    <section className='flex flex-col pb-8 space-y-8 items-center w-full text-black max-h-[100vh]'>
        <ResetPage />
        <div className='w-full h-[90vh] lg:h-[100vh]'>
            <img src='../static/images/gradient-1.png' className='w-full h-full'></img>
            <div className='w-full h-full flex flex-col justify-evenly -translate-y-[100vh]'>
                <div className='flex flex-col heading items-center'>
                    <p className='text-white text-6xl font-bold'>404</p>
                    <p className='text-6xl font-bold text-red-800'>Page Not Found</p> 
                </div>
            </div>
        </div>
        <Link to={'/'} className='w-full lg:w-3/4 items-start p-8 -translate-y-[30vh]'>
            <div className='mx-auto flex flex-row items-center justify-evenly w-52 h-12 rounded text-white font-semibold bg-red-800 hover:bg-gray-200 hover:border-2 hover:border-red-800 hover:text-black hover:-translate-y-1 transition-transform tracking-wider'>
                <button className=''>Back to Home Page</button>
                <img className='w-4 h-4' src='../static/images/right-arrow-white.png'></img>
            </div>
        </Link>
    </section>
  )
}

export default ErrorPage
