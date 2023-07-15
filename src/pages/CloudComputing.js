import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const CloudComputing = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');

  return (
    <section className='flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage/>
        <div className="flex w-full h-[100vh] bg-[url('static/images/gradient-1.png')]">
          <div className='mx-auto h-full space-x-52 flex flex-row justify-center items-center w-1/2'>
            <div className='flex flex-col heading items-start'>
                <p className='text-white text-6xl font-bold '>Cloud Computing</p>
                <p className='text-6xl font-bold text-red-800'>Services</p> 
            </div>
            <img className='hidden lg:block' src='../static/images/online-training.png'></img>
          </div>
        </div>
        <div className='w-full flex flex-col space-y-4 p-8'>
            <p className=' w-full lg:w-3/4 mx-auto  text-xl lg:text-3xl text-center font-semibold'>Cloud Computing</p>
            <div className='w-1/2 mx-auto border border-gray-200'></div>
            <p className='w-3/4 lg:w-1/2 mx-auto lg:text-xl text-center'>Cloud opens a whole new level of opportunity. IT organizations can now have a scalable and nearly infinite set of resources available for whatever they need to do.</p>
        </div>
        <div className=' w-full lg:w-3/4 flex flex-col mx-auto space-y-[20vh] p-0 lg:p-8 text-white'>
            <div className='w-full flex flex-row  p-4 lg:p-16 bg-gray-200 text-black items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg'>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto w-20 h-20' src='../static/images/cloud-service-black.png'></img>
                </div>
                <div className=' w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Your Datacenter in the Cloud</p>
                    <div className=' w-full lg:w-3/4 first-group'>
                        <p className='text-left'>Cloud computing is a style of computing in which scalable and elastic IT-enabled capabilities are delivered as a service using 
                        Internet technologies. Cloud infrastructure as a service (IaaS) is a type of cloud computing service; it parallels the infrastructure and data center initiatives of IT. 
                        Instec helps you in building your data center in the cloud where you retain most of the IT operations responsibilities.</p>
                        <p className='mt-8'>Our Services Include:</p>
                        <ul className='flex flex-col  w-full lg:w-3/4 space-y-4 p-4'>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                                <p>Assessment of Infrastructure to define the Cloud strategy</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                                <p>Migration of applications to simplify IT Infrastructure and its recovery</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point-black.png'></img>
                                <p>Operation and Design Verification & Validation</p>
                            </li>
                        </ul>
                    </div>
                </div>  
            </div>

            <div className='w-full flex flex-row  p-4 lg:p-16 bg-red-800 items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg'>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto w-20 h-20' src='../static/images/backup.png'></img>
                </div>
                <div className=' w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <p className=' text-xl lg:text-3xl font-semibold text-white'>Disaster Recovery in the Cloud</p>
                    <div className=' w-full lg:w-3/4 first-group'> 
                        <p className='text-left'>We design and implement disaster recovery infrastructure using relevant cloud computing features. 
                        Instec provides recommendations about how you can improve your DR plan and leverage the full potential of Cloud Computing for your 
                        Disaster Recovery processes</p>
                        <p className='text-left'>Moving your disaster recovery setup in the cloud means minimal investment in the recovery infrastructure and faster recovery. 
                        In the event of a disaster, you can quickly launch resources in in the cloud to ensure business continuity</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row  p-4 lg:p-16 bg-gray-200 text-black items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg'>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto w-20 h-20' src='../static/images/cloud-upload-black.png'></img>
                </div>
                <div className=' w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Migrate Enterprise Applications to the Cloud</p>
                    <div className=' w-full lg:w-3/4 first-group'> 
                        <p className='text-left'>We help you in migrating your mission-critical enterprise applications that may be complex, performance-sensitive or contain
                         highly sensitive data. This has an added advantage of protecting your applications from downtime with disaster recovery solutions built around Cloud technologies.
                          Maximize the benefits of virtualizing business critical applications by enabling fully automated disaster recovery, dynamic security, automated operations and
                           performance management.</p>
                        <p className='text-left'>Instec provides comprehensive migration services for migrating your business critical applications from physical to cloud infrastructure.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CloudComputing
