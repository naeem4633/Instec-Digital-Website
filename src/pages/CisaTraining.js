import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';
import { Link } from 'react-router-dom';

const CisaTraining = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');

  return (
    <section className='flex flex-col pb-8 space-y-8 items-center w-full text-black'>
        <ResetPage />
        <div className='w-full h-[90vh] lg:h-[100vh]'>
            <img src='../static/images/gradient-1.png' className='w-full h-full'></img>
            <div className='w-full h-full flex flex-col justify-evenly -translate-y-[90vh]'>
                <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-1/2 '>
                    <div className='flex flex-col heading items-start'>
                        <p className='text-6xl font-bold text-red-800'>CISA</p> 
                        <p className='text-white text-6xl font-bold'>Training</p>
                    </div>
                    <img className='hidden lg:block' src='../static/images/training-1.png'></img>
                </div>
                <div className='h-1/2 p-3 lg:p-12 flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:justify-between w-full mx-auto items-center lg:text-xl text-center font-semibold justify-evenly text-white'>
                    <div>
                        <p className='lg:tracking-wide'>Certified Information Systems Auditor (CISA) Course</p>
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
        <div className=' w-full lg:w-3/4 flex flex-col mx-auto space-y-[10vh] lg:space-y-[20vh] p-0 lg:p-8 text-white'>
            <div className='w-full flex flex-row bg-gray-200 text-black items-center rounded lg:tracking-wider space-y-6 text-sm lg:text-lg p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Background</p>
                    <img className='w-20 h-20' src='../static/images/hiring-black.png'></img>
                </div>
                <div className='flex flex-col space-y-4 w-full lg:w-3/4'>
                    <p className='lg:hidden text-xl font-bold'>Background</p>
                    <p className='text-left first-group'>The technical skills and practices that CISA promotes and evaluates are the building blocks of success in the field. 
                    Possessing the CISA designation demonstrates proficiency and is the basis for measurement in the profession. with a growing demand for professionals possessing IS audit, 
                    control and security skills, CISA has become a preferred certification program by individuals and organizations around the world. CISA certification signifies commitment 
                    to serving an organization and the IS audit, control and security industry with distinction.</p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-red-800 items-center rounded lg:tracking-wider space-y-6 text-sm lg:text-lg p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Objectives</p>
                    <img className='w-20 h-20' src='../static/images/objective.png'></img>
                </div>
                <ul className='flex flex-col w-full lg:w-3/4 space-y-4 p-4'>
                    <p className='lg:hidden text-xl font-bold'>Objectives</p>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>To get a detailed understanding and update on today's information systems audit domains as prescribed by  Information Systems Audit and Control Association (ISACA)</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>To get a comprehensive review of the domains covered in the CBK</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>To get the latest on information systems governance challenges and countermeasures thereby making them more effective IS governance professionals</p>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-row bg-gray-200 text-black items-center rounded lg:tracking-wider space-y-6 text-sm lg:text-lg p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Who Should Attend</p>
                    <img className='w-20 h-20' src='../static/images/question-black.png'></img>
                </div>
                <ul className='flex flex-col w-full lg:w-3/4 space-y-4 p-4'>
                    <p className='lg:hidden text-xl font-bold'>Who Should Attend</p>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>Information systems auditors and security practitioners that want to update their knowledge and skill set in the security space</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>IS audit practitioners who are planning to take the CISA examination</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                        <p>IS professionals who want to learn about the latest techniques, technologies and strategies in IS audit</p>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-row bg-red-800 items-center rounded lg:tracking-wider space-y-6 text-sm lg:text-lg p-4 lg:p-16'>
                <div className='hidden w-1/4 lg:flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Topics Covered</p>
                    <img className='w-20 h-20' src='../static/images/checklist.png'></img>
                </div>
                <ul className='flex flex-col w-full lg:w-3/4 space-y-4 p-4 second-group'>
                    <p className='lg:hidden text-xl font-bold'>Topics Covered</p>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>The IS Audit Process</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>IT Governance</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Systems and Infrastructure Life Cycle</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Protection of Information Assets</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Business Continuity and Disaster Recovery</p>
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

export default CisaTraining
