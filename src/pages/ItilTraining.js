import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';
import { Link } from 'react-router-dom';

const ItilTraining = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');
    
  return (
    <section className='trainings flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className="flex w-full h-[100vh] bg-[url('static/images/gradient-1.png')]">
            <div className='w-full h-full flex flex-col justify-evenly'>
                <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-1/2 '>
                    <div className='flex flex-col heading items-start'>
                        <p className='text-6xl font-bold text-red-800'>ITIL</p> 
                        <p className='text-white text-6xl font-bold'>Training</p>
                    </div>
                    <img className='hidden lg:block' src='../static/images/training-3.png'></img>
                </div>
                <div className='p-3 lg:p-12 flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:justify-between w-full mx-auto items-center lg:text-xl text-center font-semibold justify-evenly text-white'>
                    <div>
                        <p className='lg:tracking-wide'>Information Technology Infrastructure Library (ITIL) V3 Foundation Course</p>
                    </div>
                    <div className='space-y-2 font-normal'>
                        <p>Duration</p>
                        <div className='flex space-x-4'>
                            <img src='../static/images/clock-white.png' className='w-8 h-8'></img>
                            <p>5 Days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full lg:w-3/4 flex flex-col mx-auto space-y-[10vh] lg:space-y-[20vh] p-0 lg:p-8 text-gray-200'>
            <div className='w-full flex flex-row bg-red-800 items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg space-y-6  p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Description</p>
                    <img className='w-20 h-20' src='../static/images/hiring.png'></img>
                </div>
                <div className='flex flex-col space-y-4 w-full lg:w-3/4'>
                    <p className='lg:hidden text-xl font-bold'>Description</p>
                    <p className='text-left first-group'>This course introduces the concept of IT Service Management (ITSM) with a framework for identifying and inter-relating various 
                    activities/processes involved in developing a framework for delivering measuring and improving IT services to the user community.
                    The course is based on the Information Technology Infrastructure Library (ITIL) which is a set of best practices in the areas of IT Service Support and Service Delivery.
                    ITIL is the basis around which BS15000 and ISO 20000 standards have been developed.</p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-gray-200 text-black items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg space-y-6 p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Who Should Attend</p>
                    <img className='w-20 h-20' src='../static/images/question-black.png'></img>
                </div>
                <ul className='flex flex-col w-full lg:w-3/4 space-y-4 p-4'>
                    <p className='lg:hidden text-xl font-bold'>Who Should Attend</p>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>IT Professionals and Executives who are responsible for the delivery of IT Services required by their company or business, such as System/ Network</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Administrators, IT Managers, Business Managers and Analysts, Business</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Process Specialists, System Analysts, IT Architects and System Integrators</p>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-row bg-red-800 items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg space-y-6  p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Prerequisites</p>
                    <img className='w-20 h-20' src='../static/images/checklist.png'></img>
                </div>
                <div className=' w-full lg:w-3/4 first-group'>
                    <p className='mb-6 lg:hidden text-xl font-bold'>Prerequisites</p>
                    <p className='text-left'>To qualify for participation in this course, students must have experience with the specification, 
                    development, or management of information technology.</p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-gray-200 text-black items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg space-y-6  p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Topics Covered</p>
                    <img className='w-20 h-20' src='../static/images/checklist-black.png'></img>
                </div>
                <ul className='flex flex-col w-full lg:w-3/4 space-y-4 p-4'>
                    <p className='lg:hidden text-xl font-bold'>Topics Covered</p>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>ITIL Fundamentals</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Principles of Service Management</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Service Management as a Practice</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>ITIL V3 Key Principles and Models</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Service Strategy</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Service Design</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Service Transition</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Service Operation</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Continual Service Improvement</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Functions</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Roles and Responsibilities</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Technology and Architecture</p>
                    </li>
                </ul>
            </div>
        </div>
        <Link to={'/contact-us'} className='w-full lg:w-3/4 items-start p-8'>
            <div className='mx-auto flex flex-row items-center justify-evenly w-32 h-12 rounded text-white font-semibold bg-red-800 hover:bg-gray-200 hover:border-2 hover:border-red-800 hover:text-black hover:-translate-y-1 transition-transform tracking-wider'>
                <img className='w-4 h-4' src='../static/images/contact-button.png'></img>
                <button className=''>Contact Us</button>
            </div>
        </Link>
    </section>
  )
}

export default ItilTraining
