import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const VirtualizationClouds = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');

  return (
    <section className='flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className='w-full h-[90vh] lg:h-[100vh]'>
          <img src='../static/images/gradient-1.png' className='w-full h-full'></img>
          <div className='mx-auto h-full space-x-52 flex flex-row justify-center items-center w-1/2 -translate-y-[100vh]'>
            <div className='flex flex-col heading items-start'>
                <p className='text-white text-5xl lg:text-6xl font-bold '>Virtualization &</p>
                <p className='text-5xl lg:text-6xl font-bold text-red-800'>Clouds</p> 
            </div>
            <img className='hidden lg:block' src='../static/images/computer-1.png'></img>
          </div>
        </div>
        <div className='w-full flex flex-col space-y-4 p-8'>
            <p className='w-full lg:w-3/4 mx-auto text-xl lg:text-3xl text-center font-semibold'>Virtualization and Clouds</p>
            <div className='w-1/2 mx-auto border border-gray-200'></div>
            <p className='w-full lg:w-3/4 mx-auto lg:text-xl text-center'>Cloud opens a whole new level of opportunity. IT organizations can now have a scalable and nearly infinite set of resources available for whatever they need to do.</p>
        </div>
        <div className='w-full lg:w-3/4 flex flex-col mx-auto space-y-[10vh] lg:space-y-[20vh] p-0 lg:p-8 text-white'>
            <div className='w-full flex flex-row p-4 lg:p-16 bg-red-800 items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg'>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto w-20 h-20' src='../static/images/datacenter-virtual.png'></img>
                </div>
                <div className='w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <div className='flex flex-col text-white space-y-4'>
                        <p className='text-xl lg:text-3xl font-semibold'>Datacenter Virtualization</p>
                        <p className='lg:text-xl font-semibold'>Transforming Datacenter for Consolidation or Disaster Recovery</p>
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <p className='text-left'>Server consolidation meets the challenges of server sprawls and under utilization by reducing hardware and operating 
                        cost by as much as fifty percent.</p>
                        <p className='mt-8'>Our Services Include:</p>
                        <ul className='flex flex-col w-full lg:w-3/4 space-y-4 p-4'>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Assessment of Infrastructure to define the Cloud strategy</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Consolidation of applications and Hardware to simplify IT Infrastructure and its recovery</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Operation and Design Verification & Validation</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-full   flex flex-row p-4 lg:p-16 bg-gray-200 text-black items-center rounded text-sm lg:text-lg'>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto w-20 h-20' src='../static/images/virtual-black.png'></img>
                </div>
                <div className='w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-xl lg:text-3xl font-semibold'>Desktop Virtualization</p>
                        <p className='lg:text-xl font-semibold'>Virtual Desktops for the end users</p>
                    </div>
                    <div className='w-full lg:w-3/4 first-group'> 
                        <p className='text-left'>Desktop virtualization offers IT organizations the power to deliver rich, personalized virtual desktops as a managed service. 
                        Simplify desktop and application management while increasing security and control with VMware Virtualization. Deliver a personalized high fidelity experience 
                        for end-users across sessions and devices. Enable higher availability and agility of desktop services unmatched by traditional PCs while reducing the total 
                        cost of desktop ownership up to 50%.</p>
                        <p className='text-left'>Instec provides complete Design and Implementation services for your Desktop Virtualization initiatives. We help IT organizations
                        deliver a seamless transition to desktop delivered as a service</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row p-4 lg:p-16 bg-red-800 items-center rounded text-sm lg:text-lg'>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto w-20 h-20' src='../static/images/enterprise.png'></img>
                </div>
                <div className='w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <div className='flex flex-col text-white space-y-4'>
                        <p className='text-xl lg:text-3xl font-semibold'>Virtualize Enterprise Applications</p>
                        <p className='lg:text-xl font-semibold'>Performance and Reliability for Applications</p>
                    </div>
                    <div className='w-full lg:w-3/4 first-group'> 
                        <p className='text-left'>Virtualize Exchange, SQL, SAP, and Oracle, to get breakthrough performance and outstanding reliability. 
                        Protect your applications from downtime with disaster recovery solutions built around virtualization platforms. Maximize the benefits of 
                        virtualizing business critical applications by enabling fully automated disaster recovery, dynamic security, automated operations and performance management.</p>
                        <p className='text-left'>IInstec provides comprehensive migration services for migrating your business critical applications from physical to 
                        virtual infrastructure.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VirtualizationClouds
