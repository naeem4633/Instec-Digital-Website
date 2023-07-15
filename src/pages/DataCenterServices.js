import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const DataCenterServices = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');

  return (
    <section className='flex flex-col pb-8 space-y-8 items-center w-full text-black'>
        <ResetPage />
        <div className="flex w-full h-[100vh] bg-[url('static/images/gradient-1.png')]">
          <div className='mx-auto h-full space-x-52 flex flex-row justify-center items-center w-1/2'>
            <div className='flex flex-col heading items-start'>
                <p className='text-white text-6xl font-bold '>Data Center</p>
                <p className='text-6xl font-bold text-red-800'>Services</p> 
            </div>
            <img className='hidden lg:block' src='../static/images/data-center-cover.png'></img>
          </div>
        </div>
        <div className='w-full flex flex-col space-y-4 p-8 text-sm lg:text-xl'>
            <div className='flex flex-col'>
                <p className='w-3/4 mx-auto text-xl lg:text-3xl text-center font-bold'>Data Center Services</p>
            </div>
            <div className='mx-auto w-1/2 border border-gray-200'></div>
            <p className='w-full lg:w-3/4 mx-auto text-center'>Instec delivers the best solutions in datacenter and computer room conceptualization, architecture and design. 
            Our highly customized data center designs are based on the existing state-of-the-art components that go into a modern day data center.</p>
            <p className='w-full lg:w-3/4 mx-auto text-center'>Every design is unique and simple yet encompasses availability, scalability, redundancy and fault-tolerance to 
            easily manage and maintain mission critical environments.</p>
            <p className='w-full lg:w-3/4 mx-auto text-center'>Be it a small business or an operation supporting thousands of users, our team delivers the solution, aligning 
            it with your true business needs.</p>
        </div>
        <div className='w-full lg:w-3/4 flex flex-col mx-auto space-y-[10vh] lg:space-y-[20vh] p-8 text-white'>
            <div className='w-full flex flex-row p-4 lg:p-16 bg-red-800 items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg'>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto lg:w-20 lg:h-20' src='../static/images/data-center-security.png'></img>
                </div>
                <div className='w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <div className='flex flex-col text-white space-y-2'>
                    <p className='text-xl lg:text-3xl font-semibold'>Security Testing & Assessment</p>
                    </div>
                    <div className='w-full lg:w-3/4 first-group'>
                        <p className='text-left'>Data center is a huge investment. Data center managers are tasked with continually ensuring the upkeep and maintenance of 
                        their data center. Power, cooling and space capacity challenges require focused approach and insight in the workings of a data center.</p>
                        <p className='text-left'>Our Data Center Audit service provides Data center managers an objective view of their infrastructure, and imparts best 
                        practices in the design, management and operation of data center infrastructure.</p>
                        <p className='mt-8'>Our Data Center audit deliverable typically include:</p>
                        <ul className='flex flex-col w-full lg:w-3/4 space-y-4 p-4'>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Technical audit report of the M&E infrastructure</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Environmental conditioning report</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Verification of management systems</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Reliability analysis</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Data Centers Safety profile</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Physical Security assessment</p>
                            </li>
                        </ul>
                        <p className='text-left'>Instec's Data Center Audit services are not only designed for your main data centers needs but also for your remote DR site
                         data centers, be it Hot, Warm or Cold sites.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DataCenterServices
