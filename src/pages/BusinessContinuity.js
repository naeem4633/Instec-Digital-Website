import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const BusinessContinuity = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');

  return (
    <section className='trainings flex flex-col py-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className='w-3/4 mx-auto text-3xl text-center font-semibold'>BUSINESS CONTINUITY & DISASTER RECOVERY</div>
        <div className='flex flex-row w-3/4 mx-auto items-center text-xl text-center font-bold justify-between'>
            <div>
                <p className='tracking-wide'>INTRODUCTION TO BUSINESS CONTINUITY & DISASTER RECOVERY</p>
            </div>
            <div className='flex space-x-8'>
                <div className='space-y-2'>
                    <p>Prerequisites</p>
                    <p className='font-normal'>None</p>
                </div>
                <div className='space-y-2'>
                    <p>Duration</p>
                    <div className='flex space-x-4'>
                        <img src='../static/images/clock.png' className='w-8 h-8'></img>
                        <p>5 Days</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-3/4 flex flex-col mx-auto space-y-[20vh] p-8 text-gray-200'>

            <div className='w-full flex flex-row bg-red-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Description</p>
                    <img className='w-20 h-20' src='../static/images/hiring.png'></img>
                </div>
                <div className='w-3/4'>
                    <p className='text-lg text-left first-group'>Today's businesses rely heavily on a robust and resilient information technology (IT) and telecommunications infrastructure to deliver 
                    essential business services in order to meet the company's mission, objectives, and key targets. This dependence on information technology stems from several requirements 
                    and demands including.</p>
                    <ul className='flex flex-col w-3/4 space-y-4 p-4'>
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
                    </ul>
                    <p className='text-lg text-left first-group'>Providing continuous IT services under such operating environments calls for a comprehensive Disaster Recovery planning approach, and an effective IT Disaster Recovery Plan.</p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-red-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Topics Covered</p>
                    <img className='w-20 h-20' src='../static/images/checklist.png'></img>
                </div>
                <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Business Continuity Basics</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Disaster Recovery</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Security Aspects</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Underlying Technologies</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Business Continuity and DR Planning Fundamentals</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Standards and Industry best practices</p>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-row bg-red-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6 second-group'>
                    <p className='text-3xl font-semibold'>Takeaways</p>
                    <img className='w-20 h-20' src='../static/images/badge.png'></img>
                </div>
                <ul className='flex flex-col w-3/4 space-y-4 p-4 first-group second-group'>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Training Slides</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Certificate of attendance</p>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-row bg-red-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold text-center'>E-Training Requirements</p>
                    <img className='w-20 h-20' src='../static/images/computer.png'></img>
                </div>
                <ul className='flex flex-col w-3/4 space-y-4 p-4 first-group'>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>PC with camera and mic or your tablet or smartphone</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4 second-group'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Internet connectivity</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default BusinessContinuity
