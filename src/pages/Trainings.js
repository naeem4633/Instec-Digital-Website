import React from 'react'
import { Link } from 'react-router-dom'
import { ResetPage } from '../ResetPage';

const Trainings = () => {
  return (
    <>
    <section className='trainings flex flex-col pb-8 space-y-12 items-center w-full text-black'>
        <ResetPage />
        <div className="flex w-full h-[100vh] bg-[url('static/images/gradient-2.png')]">
          <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-1/2'>
            <div className='flex flex-col space-y-4'>
                <div className='flex flex-col heading items-start'>
                    <p className='text-6xl font-bold text-red-800'>Trainings</p> 
                </div>
            </div>
            <img className='hidden lg:block' src='../static/images/online-training.png'></img>
          </div>
        </div>
        <div className='w-full'>
            <div className='mx-auto w-3/4 flex flex-col items-center text-lg lg:tracking-wide font-semibold'>
                <p>All of our courses are taught by engineers having first-hand experience with the latest happenings in their relevant areas.</p>
                <p>Instec also offers private courses for groups of 10-20 students. You may schedule a private course by contacting us at info [at] instecdigital [dot] com</p>
            </div>
        </div>
        <div className='w-full min-h-[50vh] bg-gray-100 drop-shadow-lg'>
            <div className='h-full w-full lg:w-3/4 flex flex-col justify-center mx-auto rounded-lg p-4'>
                <div>
                    <p className='mt-4 mb-8 text-center font-semibold  text-lg lg:text-2xl'>Scheduled Trainings</p>
                    <div className='flex flex-row items-center justify-center'>
                        <div className='w-3/4 lg:w-1/4 h-64 p-4 flex flex-col bg-white rounded-lg drop-shadow-lg justify-between space-y-4'>
                            <div className='h-3/4 p-2 border border-black border-x-0 border-t-0'>
                                <p className=' lg:text-xl mb-4'>CISSP Training Camp</p>
                                <p className='font-bold'>Karachi</p>
                            </div>
                            <div className='h-1/4 flex-grow flex flex-row justify-between items-center px-2'>
                                <p className='font-semibold'>8-15 January, 2024</p>
                                <a className='text-decoration-none' href='#'>
                                    <button className='w-32 h-12 rounded text-white font-semibold bg-red-800 hover:bg-white hover:border-2 hover:border-red-800 hover:text-black hover:-translate-y-1 transition-transform lg:tracking-wider'>Register</button> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full min-h-[50vh]'>
            <div className='mx-auto h-full  w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-center  space-x-0 lg:space-x-12'>
                <div className='hidden lg:block  p-2 lg:p-12 h-full w-full lg:w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/business-cont.jpg'></img>
                </div>
                <div className='h-3/4 w-full lg:w-1/2 p-4 flex flex-col  space-y-2 lg:space-y-8 items-start'>
                    <div className='flex flex-col  space-y-2 lg:space-y-8'>
                        <p className=' text-lg lg:text-2xl font-semibold lg:tracking-wider'>BUSINESS CONTINUITY AND DISASTER RECOVERY</p>
                        <div className='flex flex-col'>
                            <Link to={'/introduction-to-business-continuity-disaster-recovery'} className=' lg:text-xl lg:tracking-wide text-red-800 font-semibold transition-transform duration-300 hover:scale-105 hover:underline'>
                                Introduction to Business Continuity and Disaster Recovery
                            </Link>
                        </div>
                    </div> 
                </div>
                <div className='lg:hidden  p-2 lg:p-12 h-full w-full lg:w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/business-cont.jpg'></img>
                </div>
            </div>
        </div>
        <div className='w-full min-h-[50vh] bg-gray-100 pt-5 drop-shadow-lg'>
            <div className='mx-auto h-full  w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-center  space-x-0 lg:space-x-12'>
                <div className='h-3/4 w-full lg:w-1/2 p-4 flex flex-col  space-y-2 lg:space-y-8 items-start'>
                    <div className='flex flex-col  space-y-2 lg:space-y-8'>
                        <p className=' text-lg lg:text-2xl font-semibold lg:tracking-wider'>OPERATING SYSTEMS</p>
                        <div className='flex flex-col'>
                            <Link to={'/linux-training'} className=' lg:text-xl lg:tracking-wide text-red-800 font-semibold transition-transform duration-300 hover:scale-105 hover:underline'>
                            Linux Advanced Administration Training
                            </Link>
                        </div>
                    </div> 
                </div>
                <div className=' p-2 lg:p-12 h-full w-full lg:w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/operating-system.jpg'></img>
                </div>
            </div>
        </div>
        <div className='w-full min-h-[50vh]'>
            <div className='mx-auto h-full  w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-center  space-x-0 lg:space-x-12'>
                <div className='hidden lg:block  p-2 lg:p-12 h-full w-full lg:w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/startup.jpg'></img>
                </div>
                <div className='h-3/4 w-full lg:w-1/2 p-4 flex flex-col  space-y-2 lg:space-y-8 items-start'>
                    <div className='flex flex-col  space-y-2 lg:space-y-8'>
                        <p className=' text-lg lg:text-2xl font-semibold lg:tracking-wider'>INFOSEC CERTIFICATION PREPARATION</p>
                        <div className='flex flex-col space-y-4'>
                            <Link to={'/cisa-training'} className=' lg:text-xl lg:tracking-wide text-red-800 font-semibold transition-transform duration-300 hover:scale-105 hover:underline'>
                                Certified Information Systems Auditor (CISA)
                            </Link>
                            <Link to={'/cissp-training'} className=' lg:text-xl lg:tracking-wide text-red-800 font-semibold transition-transform duration-300 hover:scale-105 hover:underline'>
                                Certified Information Systems Security Professional (CISSP)
                            </Link>
                        </div>
                    </div> 
                </div>
                <div className='lg:hidden  p-2 lg:p-12 h-full w-full lg:w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/business-cont.jpg'></img>
                </div>
            </div>
        </div>
        <div className='w-full min-h-[50vh] bg-gray-100 pt-5 drop-shadow-lg'>
            <div className='mx-auto h-full  w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-center  space-x-0 lg:space-x-12'>
                <div className='h-3/4 w-full lg:w-1/2 p-4 flex flex-col space-y-2 lg:space-y-8 items-start'>
                    <div className='flex flex-col  space-y-2 lg:space-y-8'>
                        <p className=' text-lg lg:text-2xl font-semibold lg:tracking-wider'>ITSM CERTIFICATION PREPARATION</p>
                        <div className='flex flex-col'>
                            <Link to={'/itil-training'} className=' lg:text-xl lg:tracking-wide text-red-800 font-semibold transition-transform duration-300 hover:scale-105 hover:underline'>
                                Information Technology Infrastructure Library (ITIL) V3 Foundation Course
                            </Link>
                        </div>
                    </div> 
                </div>
                <div className=' p-2 lg:p-12 h-full w-full lg:w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/laptop.jpg'></img>
                </div>
            </div>
        </div>
        <div className='w-full min-h-[50vh]'>
            <div className='mx-auto h-full  w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-center  space-x-0 lg:space-x-12'>
                <div className='hidden lg:block  p-2 lg:p-12 h-full w-full lg:w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/information-security.jpg'></img>
                </div>
                <div className='h-3/4 w-full lg:w-1/2 p-4 flex flex-col  space-y-2 lg:space-y-8 items-start'>
                    <div className='flex flex-col  space-y-2 lg:space-y-8'>
                        <p className=' text-lg lg:text-2xl font-semibold lg:tracking-wider w-full'>INFORMATION SECURITY</p>
                        <div className='flex flex-col font-semibold space-y-2 tracking-wider'>
                            <p className=' lg:text-xl text-red-800'>Hacker's Insight for Managers</p>
                            <p className=' lg:text-xl text-red-800'>Hacker's Insight for Techies</p>
                            <p className=' lg:text-xl text-red-800'>Intrusion Detection and Response</p>
                        </div>
                    </div> 
                </div>
                <div className='lg:hidden p-12 h-full w-full lg:w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/business-cont.jpg'></img>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Trainings
