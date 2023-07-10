import React from 'react'
import { Link } from 'react-router-dom'

const Trainings = () => {
  return (
    <>
    <section className='trainings flex flex-col py-8 space-y-12 items-center  w-full text-black'>
        <div className='w-3/4 mx-auto text-3xl text-center font-semibold'>TRAININGS</div>
        <div className='w-1/2 mx-auto border border-gray-200'></div>
        <div className='w-full'>
            <div className='mx-auto w-3/4 flex flex-col items-center text-lg tracking-wide font-semibold'>
                <p>All of our courses are taught by engineers having first-hand experience with the latest happenings in their relevant areas.</p>
                <p>Instec also offers private courses for groups of 10-20 students. You may schedule a private course by contacting us at info [at] instecdigital [dot] com</p>
            </div>
        </div>
        <div className='w-full h-[50vh] bg-gray-100'>
            <div className='h-full w-3/4 flex flex-col justify-center mx-auto rounded-lg p-4'>
                <div>
                    <p className='mt-4 mb-8 text-center font-semibold text-2xl'>Scheduled Trainings</p>
                    <div className='flex flex-row items-center justify-center'>
                        <div className='w-1/4 h-64 p-4 flex flex-col bg-white rounded-lg drop-shadow-lg justify-between space-y-4'>
                            <div className='h-3/4 p-2 border border-black border-x-0 border-t-0'>
                                <p className='text-xl mb-4'>CISSP Training Camp</p>
                                <p className='font-bold'>Karachi</p>
                            </div>
                            <div className='h-1/4 flex-grow flex flex-row justify-between items-center px-2'>
                                <p className='font-semibold'>8-15 January, 2024</p>
                                <a className='text-decoration-none' href='#'>
                                    <button className='w-32 h-12 rounded text-white font-semibold bg-red-800 hover:bg-white hover:border-2 hover:border-red-800 hover:text-black hover:-translate-y-1 transition-transform tracking-wider'>Register</button> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[50vh]'>
            <div className='mx-auto h-full w-3/4 flex flex-row items-center justify-center space-x-12'>
                <div className='p-12 h-full w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/business-cont.jpg'></img>
                </div>
                <div className='h-3/4 w-1/2 p-4 flex flex-col space-y-8 items-start'>
                    <div className='flex flex-col space-y-8'>
                        <p className='text-2xl font-semibold tracking-wider'>BUSINESS CONTINUITY AND DISASTER RECOVERY</p>
                        <div className='flex flex-col'>
                            <Link className='text-xl tracking-wide text-red-800 font-semibold transition-transform duration-300 hover:scale-105 hover:underline'>
                                Introduction to Business Continuity and Disaster Recovery
                            </Link>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className='w-full h-[50vh] bg-gray-100 pt-5'>
            <div className='mx-auto h-full w-3/4 flex flex-row items-center justify-center space-x-12'>
                <div className='h-3/4 w-1/2 p-4 flex flex-col space-y-8 items-start'>
                    <div className='flex flex-col space-y-8'>
                        <p className='text-2xl font-semibold tracking-wider'>OPERATING SYSTEMS</p>
                        <div className='flex flex-col'>
                            <Link className='text-xl tracking-wide text-red-800 font-semibold transition-transform duration-300 hover:scale-105 hover:underline'>
                            Linux Advanced Administration Training
                            </Link>
                        </div>
                    </div> 
                </div>
                <div className='p-12 h-full w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/operating-system.jpg'></img>
                </div>
            </div>
        </div>
        <div className='w-full h-[50vh]'>
            <div className='mx-auto h-full w-3/4 flex flex-row items-center justify-center space-x-12'>
                <div className='p-12 h-full w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/startup.jpg'></img>
                </div>
                <div className='h-3/4 w-1/2 p-4 flex flex-col space-y-8 items-start'>
                    <div className='flex flex-col space-y-8'>
                        <p className='text-2xl font-semibold tracking-wider'>INFOSEC CERTIFICATION PREPARATION</p>
                        <div className='flex flex-col space-y-4'>
                            <Link className='text-xl tracking-wide text-red-800 font-semibold transition-transform duration-300 hover:scale-105 hover:underline'>
                                Certified Information Systems Auditor (CISA)
                            </Link>
                            <Link className='text-xl tracking-wide text-red-800 font-semibold transition-transform duration-300 hover:scale-105 hover:underline'>
                                Certified Information Systems Security Professional (CISSP)
                            </Link>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className='w-full h-[50vh] bg-gray-100 pt-5'>
            <div className='mx-auto h-full w-3/4 flex flex-row items-center justify-center space-x-12'>
                <div className='h-3/4 w-1/2 p-4 flex flex-col space-y-8 items-start'>
                    <div className='flex flex-col space-y-8'>
                        <p className='text-2xl font-semibold tracking-wider'>ITSM CERTIFICATION PREPARATION</p>
                        <div className='flex flex-col'>
                            <Link className='text-xl tracking-wide text-red-800 font-semibold transition-transform duration-300 hover:scale-105 hover:underline'>
                                Information Technology Infrastructure Library (ITIL) V3 Foundation Course
                            </Link>
                        </div>
                    </div> 
                </div>
                <div className='p-12 h-full w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/laptop.jpg'></img>
                </div>
            </div>
        </div>
        <div className='w-full h-[50vh]'>
            <div className='mx-auto h-full w-3/4 flex flex-row items-center justify-center space-x-12'>
                <div className='p-12 h-full w-1/2'>
                    <img className='drop-shadow-lg' src='../static/images/information-security.jpg'></img>
                </div>
                <div className='h-3/4 w-1/2 p-4 flex flex-col space-y-8 items-start'>
                    <div className='flex flex-col space-y-8'>
                        <p className='text-2xl font-semibold tracking-wider w-full'>INFORMATION SECURITY</p>
                        <div className='flex flex-col font-semibold space-y-2'>
                            <p className='text-xl tracking-wider text-red-800'>Hacker's Insight for Managers</p>
                            <p className='text-xl tracking-wider text-red-800'>Hacker's Insight for Techies</p>
                            <p className='text-xl tracking-wider text-red-800'>Intrusion Detection and Response</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>

    <section className='w-full bg-gray-800 text-gray-200 h-[10vh]'>
        <div className='mx-auto w-3/4 h-full flex flex-row justify-between items-center'>
            <div className='text-sm'>
                <p>© 2023 Insec Digital Systems™. All Rights Reserved</p>
            </div>
            <div className='flex space-x-4'>
                <a href='https://www.linkedin.com/company/instec-digital-systems/' className='transition-transform hover:-translate-y-1'>
                <img className='w-4 h-4' src='../static/images/linkedin.png'></img>
                </a>
                <a href='mailto:info@instecdigital.com' className='transition-transform hover:-translate-y-1'>
                <img className='w-4 h-4' src='../static/images/email.png'></img>
                </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Trainings
