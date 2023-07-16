import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';
import { Link } from 'react-router-dom';

const BusinessContinuity = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');
    
  return (
    <section className='trainings flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className="flex w-full h-[100vh] bg-[url('static/images/gradient-1.png')]">
            <div className='w-full h-full flex flex-col justify-evenly'>
                <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-1/2 '>
                    <div className='flex flex-col heading items-start'>
                        <p className='text-6xl font-bold text-red-800'>Business Continuity &</p> 
                        <p className='text-white text-6xl font-bold'>Disaster Recovery</p>
                    </div>
                    <img className='hidden lg:block' src='../static/images/training-4.png' alt=''></img>
                </div>
                <div className='p-3 lg:p-12 flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:justify-between w-full mx-auto items-center lg:text-xl text-center font-semibold justify-evenly text-white'>
                    <div>
                        <p className='lg:tracking-wide'>Introduction to Business Continuity & Disaster Recovery</p>
                    </div>
                    <div className='flex space-x-8'>
                        <div className='space-y-2'>
                            <p>Prerequisites</p>
                            <p className='font-normal'>None</p>
                        </div>
                        <div className='space-y-2'>
                            <p>Duration</p>
                            <div className='flex space-x-4'>
                                <img src='../static/images/clock-white.png' className='w-8 h-8' alt=''></img>
                                <p>5 Days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=' w-full lg:w-3/4 flex flex-col mx-auto space-y-[10vh] lg:space-y-[20vh] p-0 lg:p-8 text-gray-200'>
            <div className='w-full flex flex-row bg-red-800 items-center rounded lg:tracking-wider text-sm lg:text-lg space-y-6  p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className='text-xl lg:text-3xl font-semibold'>Description</p>
                    <img className='w-20 h-20' src='../static/images/hiring.png' alt=''></img>
                </div>
                <div className='w-full lg:w-3/4'>
                    <p className='mb-4 lg:hidden text-xl font-bold'>Description</p>
                    <p className='text-left first-group'>Today's businesses rely heavily on a robust and resilient information technology (IT) and telecommunications infrastructure to deliver 
                    essential business services in order to meet the company's mission, objectives, and key targets. This dependence on information technology stems from several requirements 
                    and demands including.</p>
                    <ul className='flex flex-col w-full lg:w-3/4 space-y-4 p-4'>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png' alt=''></img>
                            <p>Security and Risk Management (Security, Risk, Compliance, Law, Regulations, Business Continuity)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png' alt=''></img>
                            <p>Asset Security (Protecting Security of Assets)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png' alt=''></img>
                            <p>Security Engineering (Engineering and Management of Security)</p>
                        </li>
                    </ul>
                    <p className='text-left first-group'>Providing continuous IT services under such operating environments calls for a comprehensive Disaster Recovery planning approach, and an effective IT Disaster Recovery Plan.</p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-gray-200 text-black items-center rounded lg:tracking-wider text-sm lg:text-lg space-y-6  p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Topics Covered</p>
                    <img className='w-20 h-20' src='../static/images/checklist-black.png' alt=''></img>
                </div>
                <ul className='flex flex-col  w-full lg:w-3/4 space-y-4 p-4'>
                    <p className='lg:hidden text-xl font-bold'>Topics Covered</p>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                        <p>Business Continuity Basics</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                        <p>Disaster Recovery</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                        <p>Security Aspects</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                        <p>Underlying Technologies</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                        <p>Business Continuity and DR Planning Fundamentals</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                        <p>Standards and Industry best practices</p>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-row bg-red-800 items-center rounded lg:tracking-wider text-sm lg:text-lg space-y-6 p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Takeaways</p>
                    <img className='w-20 h-20' src='../static/images/badge.png' alt=''></img>
                </div>
                <ul className='flex flex-col  w-full lg:w-3/4 space-y-4 p-4 first-group second-group'>
                    <p className='lg:hidden text-xl font-bold'>Takeaways</p>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png' alt=''></img>
                        <p>Training Slides</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png' alt=''></img>
                        <p>Certificate of attendance</p>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-row bg-gray-200 text-black items-center rounded lg:tracking-wider text-sm lg:text-lg space-y-6 p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className=' text-xl lg:text-3xl font-semibold text-center'>E-Training Requirements</p>
                    <img className='w-20 h-20' src='../static/images/computer-black.png' alt=''></img>   
                </div>
                <ul className='flex flex-col  w-full lg:w-3/4 space-y-4 p-4 first-group'>
                    <p className='lg:hidden text-xl font-bold'>E-Training Requirements</p>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                        <p>PC with camera and mic or your tablet or smartphone</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                        <p>Internet connectivity</p>
                    </li>
                </ul>
            </div>
        </div>
        <Link to={'/contact-us'} className=' w-full lg:w-3/4 items-start p-8'>
            <div className='mx-auto flex flex-row items-center justify-evenly w-32 h-12 rounded text-white font-semibold bg-red-800 hover:bg-gray-200 hover:border-2 hover:border-red-800 hover:text-black hover:-translate-y-1 transition-transform tracking-wider'>
                <img className='w-4 h-4' src='../static/images/contact-button.png' alt=''></img>
                <button className=''>Contact Us</button>
            </div>
        </Link>
    </section>
  )
}

export default BusinessContinuity
