import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const DataAndItService = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');

  return (
    <section className='flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className='w-full h-[100vh]'>
          <img src='../static/images/gradient-1.png' className='w-full h-full'></img>
          <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-1/2 -translate-y-[90vh]'>
            <div className='flex flex-col heading items-start'>
                <p className='text-white text-6xl font-bold'>Data And IT</p>
                <p className='text-6xl font-bold text-red-800'>Services</p> 
            </div>
            <img className='' src='../static/images/first.png'></img>
          </div>
        </div>
        <div className='w-full flex flex-col space-y-4 p-8'>
            <p className='w-3/4 mx-auto text-3xl text-center font-semibold'>Data and IT Service Management</p>
            <div className='w-1/2 mx-auto border border-gray-200'></div>
        </div>
        <div className='w-3/4 flex flex-col mx-auto space-y-[20vh] p-8 text-white'>
            <div className='w-full flex flex-row p-16 bg-red-800 items-center rounded drop-shadow-2xl tracking-wider'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <img className='w-20 h-20' src='../static/images/migrate.png'></img>
                </div>
                <div className='w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <p className='text-3xl font-semibold text-white'>Data Management</p>
                    <div className='w-3/4 first-group'> 
                        <p className='text-lg text-left'>Today firms need timely access to accurate data for effective decisions. We provide the knowledge, tools and technology 
                        to harness the power of data</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row p-16 bg-red-800 items-center rounded drop-shadow-2xl tracking-wider'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <img className='w-20 h-20' src='../static/images/circular.png'></img>
                </div>
                <div className='w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <p className='text-3xl font-semibold text-white'>It Service Management</p>
                    <div className='w-3/4 first-group'> 
                        <p className='text-lg text-left'>We provide ITSM solutions - from strategic planning, assessments and implementation to continuous improvement and beyond.
                         We use ITIL and other best practice frameworks to deliver efficient IT operations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DataAndItService
