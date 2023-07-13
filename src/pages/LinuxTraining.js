import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';
import { Link } from 'react-router-dom';

const LinuxTraining = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');

  return (
    <section className='trainings flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className='flex flex-col h-[100vh]'>
            <img src='../static/images/gradient-1.png' className='w-full h-[100vh]'></img>
            <div className='w-full h-full flex flex-col -translate-y-[90vh]'>
            <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-1/2 '>
                <div className='flex flex-col heading items-start'>
                    <p className='text-6xl font-bold text-red-800'>Linux</p> 
                    <p className='text-white text-6xl font-bold'>Training</p>
                </div>
                <img className='' src='../static/images/first.png'></img>
            </div>
            <div className='p-12 flex flex-row w-full mx-auto items-center text-xl text-center font-bold justify-between text-white'>
                    <div>
                        <p className='tracking-wide'>Linux System Administration Training</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-3/4 flex flex-col mx-auto space-y-[20vh] p-8 text-gray-200'>

            <div className='w-full flex flex-row bg-red-800 items-center rounded drop-shadow-2xl tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Background</p>
                    <img className='w-20 h-20' src='../static/images/hiring.png'></img>
                </div>
                <div className='w-3/4 first-group'>
                    <p className='text-lg text-left'>Linux System Administration Training by Instec Digital Systems is designed for IT professionals who are new to Linux and require core Enterprise Linux skills.
                    Focused on administration tasks that will be encountered in the workplace, this course will actively engage students in task focused activities, lab based knowledge 
                    checks and facilitative discussions to ensure maximum skill transfer and retention. In addition, GUI based tools will be featured to build on the students existing 
                    technical knowledge, while key command line concepts will be introduced to provide a foundation for students planning to become full time Linux system administrators.
                    By the end of the five day course, students will be able to perform installation, establish network connectivity, manage physical storage and perform basic security administration.
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-red-800 items-center rounded drop-shadow-2xl tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Traget Audience</p>
                    <img className='w-20 h-20' src='../static/images/objective.png'></img>
                </div>
                <div className='flex flex-col'>
                    <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Microsoft Windows system administrators who need to quickly learn core Enterprise Linux proficiencies</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>System administrators, network administrators, and other IT professionals who require proficiency performing core tasks in Linux</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4 second-group'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Non Linux IT professionals on the path to becoming a full time Linux System Administrator</p>
                        </li>
                    </ul>
                    <p className='font-semibold'>Prerequisites:</p>
                    <p>Previous operating system administration experience is helpful.</p>
                </div>
            </div>
        </div>
        <Link to={'/contact-us'} className='w-3/4 items-start p-8'>
            <div className='flex flex-row items-center justify-evenly w-32 h-12 rounded text-white font-semibold bg-red-800 hover:bg-gray-200 hover:border-2 hover:border-red-800 hover:text-black hover:-translate-y-1 transition-transform tracking-wider'>
                <img className='w-4 h-4' src='../static/images/contact-button.png'></img>
                <button className=''>Contact Us</button>
            </div>
        </Link>
    </section>
  )
}

export default LinuxTraining
