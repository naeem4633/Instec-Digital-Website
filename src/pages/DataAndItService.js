import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const DataAndItService = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');

  return (
    <section className='flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className="flex w-full h-[100vh] bg-[url('static/images/gradient-1.png')]">
          <div className='mx-auto h-full space-x-52 flex flex-row justify-center items-center w-1/2'>
            <div className='flex flex-col heading items-start'>
                <p className='text-white text-6xl font-bold'>Data And IT</p>
                <p className='text-6xl font-bold text-red-800'>Services</p> 
            </div>
            <img className='hidden lg:block' src='../static/images/first.png' alt=''></img>
          </div>
        </div>
        <div className='w-full flex flex-col space-y-4 p-8'>
            <p className='w-3/4 mx-auto text-xl lg:text-3xl text-center font-bold'>Data and IT Service Management</p>
            <div className='w-1/2 mx-auto border border-gray-200'></div>
        </div>
        <div className='w-3/4 flex flex-col mx-auto space-y-[10vh] lg:space-y-[20vh] p-0 lg:p-8 text-white text-sm lg:text-lg'>
            <div className='w-full flex flex-row p-4 lg:p-16 bg-red-800 items-center rounded drop-shadow-2xl lg:tracking-wider'>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto w-20 h-20' src='../static/images/migrate.png' alt=''></img>
                </div>
                <div className='w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <p className='text-xl lg:text-3xl font-semibold text-white'>Data Management</p>
                    <div className='w-3/4 first-group'> 
                        <p className='text-left'>Today firms need timely access to accurate data for effective decisions. We provide the knowledge, tools and technology 
                        to harness the power of data</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row p-4 lg:p-16 bg-gray-200 text-black items-center rounded drop-shadow-2xl lg:tracking-wider'>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto w-20 h-20' src='../static/images/circular-black.png' alt=''></img>
                </div>
                <div className='w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <p className='text-xl lg:text-3xl font-semibold'>IT Service Management</p>
                    <div className='w-3/4 first-group'> 
                        <p className='text-left'>We provide ITSM solutions - from strategic planning, assessments and implementation to continuous improvement and beyond.
                         We use ITIL and other best practice frameworks to deliver efficient IT operations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DataAndItService
