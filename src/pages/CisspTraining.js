import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';
import { Link } from 'react-router-dom';

const CisspTraining = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');
    
  return (
    <section className='trainings flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage/>
        <div className='w-full h-[90vh] lg:h-[100vh]'>
            <img src='../static/images/gradient-1.png' className='w-full h-full'></img>
            <div className='w-full h-full flex flex-col justify-evenly -translate-y-[90vh]'>
                <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-1/2 '>
                    <div className='flex flex-col heading items-start'>
                        <p className='text-6xl font-bold text-red-800'>CISSP</p> 
                        <p className='text-white text-6xl font-bold'>Training</p>
                    </div>
                    <img className='hidden lg:block' src='../static/images/first.png'></img>
                </div>
                <div className='h-1/2 p-3 lg:p-12 flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:justify-between w-full mx-auto items-center lg:text-xl text-center font-semibold justify-evenly text-white'>
                    <div>
                        <p className='lg:tracking-wide'>Certified Information Systems Security Professional (CISSP) Course</p>
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
        <div className=' w-full lg:w-3/4 flex flex-col mx-auto space-y-[10vh] lg:space-y-[20vh] p-8 text-gray-200'>
            <div className='w-full flex flex-row bg-red-800 items-center rounded lg:tracking-wider text-sm lg:text:lg space-y-6  p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className='text-xl lg:text-3xl font-semibold'>Background</p>
                    <img className='w-20 h-20' src='../static/images/hiring.png'></img>
                </div>
                <div className='w-full lg:w-3/4 first-group'>
                    <p className='mb-4 lg:hidden text-xl font-bold'>Background</p>
                    <p className='text-left'>The CISSP certification was launched in 1989 and today it is considered the gold standard in information security certifications. 
                    This course conducted by Instec Digital Systems will prepare the participants to take the CISSP exam. 
                    CISSP holders have the necessary skills and and knowledge of best practices to provide IT leadership in the creation and execution of enterprise-wide security infrastructures.
                    As the first credential accredited by ANSI to ISO Standard 17024 in the field of information security, the Certified Information Systems Security Professional (CISSP) certification 
                    provides information security professionals with not only an objective measure of competence but a globally recognized standard of achievement. The CISSP credential demonstrates 
                    competence in the eight domains of the The International Information Systems Security Certification Consortium, or (ISC)² CISSP Common Body of Knowledge.</p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-red-800 items-center rounded lg:tracking-wider text-sm lg:text:lg space-y-6 p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className='text-xl lg:text-3xl font-semibold'>Prerequisites</p>
                    <img className='w-20 h-20' src='../static/images/checklist.png'></img>
                </div>
                <div className='flex flex-col second-group'>
                    <p className='mb-4 lg:hidden text-xl font-bold'>Prerequisites</p>
                    <div className='flex flex-col'>
                        <p>The CISSP program is targeted at professionals with at least 4 years of experience in the information security field.</p>
                        <p>The training Provides a comprehensive review of information security concepts and industry best practices, covering the 8 domains of the CISSP CBK</p>
                    </div>
                    <ul className='flex flex-col w-full lg:w-3/4 space-y-4 p-4'>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Security and Risk Management (Security, Risk, Compliance, Law, Regulations, Business Continuity)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Asset Security (Protecting Security of Assets)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Security Engineering (Engineering and Management of Security)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Communications and Network Security (Designing and Protecting Network Security infrastructure)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Identity and Access Management (Controlling Access and Managing Identity)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Security Assessment and Testing (Designing, Performing, and Analyzing Security Testing)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Security Operations (Foundational Concepts, Investigations, Incident Management, Disaster Recovery)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Software Development Security (Understanding, Applying, and Enforcing Software Security)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Link to={'/contact-us'} className=' w-full lg:w-3/4 items-start p-8'>
            <div className='mx-auto flex flex-row items-center justify-evenly w-32 h-12 rounded text-white font-semibold bg-red-800 hover:bg-gray-200 hover:border-2 hover:border-red-800 hover:text-black hover:-translate-y-1 transition-transform tracking-wider'>
                <img className='w-4 h-4' src='../static/images/contact-button.png'></img>
                <button className=''>Contact Us</button>
            </div>
        </Link>
    </section>
  )
}

export default CisspTraining
