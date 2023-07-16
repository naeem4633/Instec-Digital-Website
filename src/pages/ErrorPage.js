import React from 'react'
import { Link } from 'react-router-dom'
import { ResetPage } from '../ResetPage';

const ErrorPage = () => {
  return (
    <section className='flex flex-col space-y-8 items-center w-full text-black -h-[100vh]'>
        <ResetPage />
        <div className="flex flex-col items-center w-full h-[100vh] bg-[url('static/images/gradient-1.png')]">
            <div className='w-full h-full flex flex-col justify-evenly'>
                <div className='flex flex-col heading items-center'>
                    <p className='text-white text-6xl font-bold'>404</p>
                    <p className='text-4xl lg:text-6xl font-bold text-red-800'>Page Not Found</p> 
                </div>
            </div>
            <Link to={'/'} className='w-full lg:w-3/4 items-start p-8'>
                <div className='mx-auto flex flex-row items-center justify-evenly w-52 h-12 rounded text-white font-semibold bg-red-800 hover:bg-gray-200 hover:border-2 hover:border-red-800 hover:text-black hover:-translate-y-1 transition-transform tracking-wider'>
                    <button className=''>Back to Home Page</button>
                    <img className='w-4 h-4' src='../static/images/right-arrow-white.png' alt=''></img>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default ErrorPage
