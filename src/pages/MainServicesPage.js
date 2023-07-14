import React from 'react'
import { Link } from 'react-router-dom'
import { ResetPage } from '../ResetPage';
import Cover from '../components/Cover';

const MainServicesPage = () => {
  return (
    <>
    <section className='flex flex-col pb-8 space-y-12 items-center min-h-[100vh] w-full text-black bg-gray-100'>
        <ResetPage />
        <div className='w-full h-[100vh]'>
          <img src='../static/images/gradient-2.png' className='w-full h-full'></img>
          <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-3/4 -translate-y-[70vh]'>
            <div className='flex flex-col space-y-4 w-full'>
                <div className='flex flex-col heading items-start flex-grow'>
                    <p className='text-6xl font-bold text-red-800'>INSTEC</p> 
                    <p className='text-white text-6xl font-bold '>Digital Systems</p>
                    <p className='text-white text-2xl font-bold mb-6 mt-16'>All Your IT Needs in One Place</p>
                </div>
                <Link to={'/services'} className='w-3/4 p-3 text-white bg-red-800 font-semibold hover:bg-red-950 rounded transitition-all duration-200'>
                    <p className='text-center'>View all services</p>
                </Link>
            </div>
            <img className='hidden lg:block w-3/5 h-[45vh]' src='../static/images/earth-2.jpg'></img>
          </div>
        </div>
        <div className='w-full min-h-[100vh] lg:min-h-[50vh]'>
            <div className='mx-auto h-full w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-center space-x-2 lg:space-x-12'>
                <div className='p-4 lg:p-16 h-full w-full lg:w-1/2'>
                    <img className='rounded drop-shadow-lg' src='../static/images/analytics.png'></img>
                </div>
                <div className='h-3/4 w-full lg:w-1/2 p-4 flex flex-col space-y-8 items-start'>
                    <div className=' w-full lg:w-3/4 flex flex-col space-y-8'>
                        <p className='text-2xl font-semibold lg:tracking-wide'>Fight evil alongside the cyber security titans</p>
                        <div className='flex flex-col space-y-4'>
                            <p>Cyber security incidents require diligent preparation, rapid action and critical asset protection. INSTEC Consultants help organizations get
                                 back to business after a security incident. They apply their frontline expertise to help organizations transform their cyber defense capabilities 
                                 to mitigate threats and reduce business risk - before, during and after an incident.</p>
                                 <button className='drop-shadow-xl w-2/3 lg:w-1/3 p-3 text-white bg-red-800 font-semibold hover:bg-red-900 rounded transitition-all duration-200'>
                                    <p className='text-center'>View all services</p>
                                </button>
                            <p className='text-red-800 font-semibold'>Schedule Consultation</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col space-y-12'>
            <div className='mx-auto w-full lg:w-3/4 flex flex-col lg:flex-row items-center space-x-2 lg:space-x-12 justify-evenly'>
                <div className='flex flex-col items-center space-y-4 p-4 lg:p-8'>
                    <p className='text-xl lg:text-3xl font-semibold'>INSTEC Consulting</p>
                    <p>Most frequently publicly named incident response provider.</p>
                </div>
                <div className='flex flex-col items-center space-y-4 p-4 lg:p-8'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Fortune 100</p>
                    <p>More than 75% of Fortune 100 companies rely on INSTEC services.</p>
                </div>
            </div>
            <div className='mx-auto  w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-12 p-4 lg:p-16'>
                <div className='w-80 h-96 flex flex-col border bg-white py-4 p-2 lg:p-8 space-y-4'>
                    <p className='font-bold text-lg'>Incident Response</p>
                    <ul className='pl-6'>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Resolve incidents quickly with unmatched expertise.</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Confirm a compromise</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Stop breaches and investigate</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Manage and respond to a crisis</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Recover after a breach</p>
                        </li>
                    </ul>
                    <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                        <p className='font-bold text-red-800'>Explore</p>
                        <img src='../static/images/right-arrow.png' className='w-3 h-4'></img>
                    </button>
                </div>
                <div className='w-80 h-96 flex flex-col border bg-white py-4 p-2 lg:p-8 space-y-4'>
                    <p className='font-bold text-lg'>Incident Response</p>
                    <ul className='pl-6'>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Resolve incidents quickly with unmatched expertise.</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Confirm a compromise</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Stop breaches and investigate</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Manage and respond to a crisis</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Recover after a breach</p>
                        </li>
                    </ul>
                    <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                        <p className='font-bold text-red-800'>Explore</p>
                        <img src='../static/images/right-arrow.png' className='w-3 h-4'></img>
                    </button>
                </div>
                <div className='w-80 h-96 flex flex-col border bg-white py-4 p-2 lg:p-8 space-y-4'>
                    <p className='font-bold text-lg'>Incident Response</p>
                    <ul className='pl-6'>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Resolve incidents quickly with unmatched expertise.</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Confirm a compromise</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Stop breaches and investigate</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Manage and respond to a crisis</p>
                        </li>
                        <li className='flex flex-row items-baseline space-x-3'>
                            <img className='w-3 h-3' src='../static/images/point-black.png'></img>
                            <p>Recover after a breach</p>
                        </li>
                    </ul>
                    <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                        <p className='font-bold text-red-800'>Explore</p>
                        <img src='../static/images/right-arrow.png' className='w-3 h-4'></img>
                    </button>
                </div>
            </div>
            <div className=' w-full lg:w-3/4 mx-auto px-8'>
                <div className=' w-full lg:w-3/4 mx-auto p-4 lg:p-12 flex flex-col space-y-4 bg-white'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Transform your cyber defense operations</p>
                    <p>Develop and mature your organization's security posture through improved processes and technologies that up-level threat detection, containment and remediation capabilities. 
                        Receive hands-on support to implement critical changes and best practices for functional and staff readiness.</p>
                    <button className='flex p-3 w-fit bg-red-800 hover:bg-red-900 space-x-4 items-center rounded'>
                        <p className='text-white'>Explore Cyber Security Transformation</p>
                        <img className='w-4 h-4' src='../static/images/right-arrow-white.png'></img>
                    </button>
                </div>
            </div>
            <div className=' w-full lg:w-3/4 mx-auto px-8'>
                <div className='w-full lg:w-1/2 mx-auto p-4 lg:p-12 flex flex-col space-y-6 items-center'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Address the challenges your business faces</p>
                    <button className='flex p-3 w-fit bg-red-800 hover:bg-red-900 space-x-4 items-center rounded'>
                        <p className='text-white'>View All Consulting</p>
                        <img className='w-4 h-4' src='../static/images/right-arrow-white.png'></img>
                    </button>
                </div>
            </div>
            <div className='mx-auto  w-full lg:w-3/4 grid grid-cols-1'>
                <div className='flex flex-col lg:flex-row justify-evenly lg:space-x-16'>
                    <div className='w-full lg:w-1/3 p-12 flex flex-col space-y-6 items-start'>
                        <p className='w-full text-xl font-semibold'>Ransomware</p>
                        <p className=''>Defend against multifaceted extortion and prepare your team to respond to an attack.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>Learn More</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                    <div className='w-full lg:w-1/3 p-12 flex flex-col space-y-6 items-start'>
                        <p className='w-full text-xl font-semibold'>Ransomware</p>
                        <p className=''>Defend against multifaceted extortion and prepare your team to respond to an attack.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>Learn More</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-evenly lg:space-x-16'>
                    <div className='w-full lg:w-1/3 p-12 flex flex-col space-y-6 items-start'>
                        <p className='w-full text-xl font-semibold'>Ransomware</p>
                        <p className=''>Defend against multifaceted extortion and prepare your team to respond to an attack.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>Learn More</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                    <div className='w-full lg:w-1/3 p-12 flex flex-col space-y-6 items-start'>
                        <p className='w-full text-xl font-semibold'>Ransomware</p>
                        <p className=''>Defend against multifaceted extortion and prepare your team to respond to an attack.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>Learn More</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-evenly lg:space-x-16'>
                    <div className='w-full lg:w-1/3 p-12 flex flex-col space-y-6 items-start'>
                        <p className='w-full text-xl font-semibold'>Ransomware</p>
                        <p className=''>Defend against multifaceted extortion and prepare your team to respond to an attack.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>Learn More</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                    <div className='w-full lg:w-1/3 p-12 flex flex-col space-y-6 items-start'>
                        <p className='w-full text-xl font-semibold'>Ransomware</p>
                        <p className=''>Defend against multifaceted extortion and prepare your team to respond to an attack.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>Learn More</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                </div>
            </div>
            <div className=' w-full lg:w-3/4 mx-auto px-2 lg:px-8'>
                <div className='w-full lg:w-1/2 mx-auto p-4 lg:p-12 flex flex-col space-y-6 items-center'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Frequently requested</p>
                    <p className='text-sm'>These are frequently requested engagements that organizations need help with today.</p>
                    <button className='flex p-3 w-fit bg-red-800 hover:bg-red-900 space-x-4 items-center rounded'>
                        <p className='text-white'>View All Consulting</p>
                        <img className='w-4 h-4' src='../static/images/right-arrow-white.png'></img>
                    </button>
                </div>
            </div>
            <div className=' w-full lg:w-3/4 mx-auto grid grid-cols-1'>
                <div className='flex flex-col lg:flex-row justify-evenly items-center'>
                    <div className='w-full lg:w-1/4 p-4 lg:p-12 flex flex-col lg: items-start'>
                        <p className='w-full text-xl font-semibold'>Accelerate incident response times.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>View All Consulting</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                    <div className='w-full lg:w-1/4 p-4 lg:p-12 flex flex-col lg: items-start'>
                        <p className='w-full text-xl font-semibold'>Accelerate incident response times.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>View All Consulting</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                    <div className='w-full lg:w-1/4 p-4 lg:p-12 flex flex-col lg: items-start'>
                        <p className='w-full text-xl font-semibold'>Accelerate incident response times.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>View All Consulting</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-evenly items-center'>
                    <div className='w-full lg:w-1/4 p-4 lg:p-12 flex flex-col lg: items-start'>
                        <p className='w-full text-xl font-semibold'>Accelerate incident response times.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>View All Consulting</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                    <div className='w-full lg:w-1/4 p-4 lg:p-12 flex flex-col lg: items-start'>
                        <p className='w-full text-xl font-semibold'>Accelerate incident response times.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-semibold text-sm'>View All Consulting</p>
                            <img className='w-4 h-4' src='../static/images/right-arrow.png'></img>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mx-auto w-full lg:w-3/4 grid grid-cols-1'>
                <div className='flex flex-col space-y-4 lg:flex-row justify-evenly items-center lg:space-x-16'>
                    <div className='w-3/4 lg:w-96 h-52 lg:h-72 flex flex-col border bg-white  p-2 lg:p-8 space-y-4'>
                        <p className='font-bold text-lg'>Explore the full portfolio</p>
                        <p>Explore the various ways Mandiant Consulting can help your organization achieve its security goals.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-bold text-red-800'>Learn More</p>
                            <img src='../static/images/right-arrow.png' className='w-3 h-4'></img>
                        </button>
                    </div>
                    <div className='w-3/4 lg:w-96 h-52 lg:h-72 flex flex-col border bg-white  p-2 lg:p-8 space-y-4'>
                        <p className='font-bold text-lg'>Explore the full portfolio</p>
                        <p>Explore the various ways Mandiant Consulting can help your organization achieve its security goals.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-bold text-red-800'>Learn More</p>
                            <img src='../static/images/right-arrow.png' className='w-3 h-4'></img>
                        </button>
                    </div>
                    <div className='w-3/4 lg:w-96 h-52 lg:h-72 flex flex-col border bg-white  p-2 lg:p-8 space-y-4'>
                        <p className='font-bold text-lg'>Explore the full portfolio</p>
                        <p>Explore the various ways Mandiant Consulting can help your organization achieve its security goals.</p>
                        <button className='flex p-2 w-fit text-red-800 hover:bg-red-200 hover:translate-x-4 space-x-2 items-center rounded transition-all duration-300'>
                            <p className='font-bold text-red-800'>Learn More</p>
                            <img src='../static/images/right-arrow.png' className='w-3 h-4'></img>
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-[100vh] lg:min-h-[50vh]'>
                <div className='mx-auto h-full  w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-center space-x-2 lg:space-x-12'>
                    <div className='p-4 lg:p-16 h-full w-full lg:w-1/2'>
                        <img className='rounded drop-shadow-lg' src='../static/images/analytics.png'></img>
                    </div>
                    <div className='h-3/4 w-full lg:w-1/2 p-4 flex flex-col space-y-8 items-start'>
                        <div className=' w-full lg:w-3/4 flex flex-col space-y-8'>
                            <p className='text-2xl font-semibold lg:tracking-wide'>Why choose INSTEC Consulting?</p>
                            <div className='flex flex-col space-y-4'>
                                <div className='flex flex-col font-semibold'>
                                    <p>Get peace of mind about your organization's ability to securely maintain uninterrupted business</p>
                                    <p>operations despite the evolving threat landscape - before, during and after an incident.</p>
                                </div>
                                <p>Cyber security incidents require diligent preparation, rapid action and critical asset protection. INSTEC Consultants help organizations get
                                    back to business after a security incident. They apply their frontline expertise to help organizations transform their cyber defense capabilities 
                                    to mitigate threats and reduce business risk - before, during and after an incident.</p>
                                <button className='flex flex-row items-center justify-evenly drop-shadow-xl  w-full lg:w-3/4 p-3 text-white bg-red-800 font-semibold hover:bg-red-900 rounded transitition-all duration-200'>
                                    <p className='text-center'>Get The Latest M-Trends Report</p>
                                    <img src='../static/images/right-arrow-white.png' className='w-5 h-5'></img>
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='w-full min-h-[50vh]'>
                <div className='min-h-[50vh]'>
                    <img className='rounded mx-auto w-full lg:w-3/5 h-full lg:h-80' src='../static/images/gradient-2.png'></img>
                    <div className='mx-auto h-full w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center space-x-2 lg:space-x-12 -translate-y-[20vh] text-white'>
                        <div className='w-full flex flex-col lg:flex-row justify-between'>
                            <div className='w-full text-2xl lg:text-5xl pl-4 lg:pl-0'>
                                <p className=''>Have Questions? Contact Us.</p>
                            </div>
                            <div className='w-full flex flex-col space-y-4 items-center'>
                                <p>INSTEC experts are ready to anwer your questions</p>
                                <Link to={'/contact-us'} className='flex flex-row items-center justify-start space-x-3 drop-shadow-xl w-3/4 p-4 text-white bg-red-800 font-semibold hover:bg-red-900 rounded transitition-all duration-200'>
                                    <p className='text-center'>Contact Us</p>
                                    <img src='../static/images/right-arrow-white.png' className='w-5 h-5'></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </>
  )
}

export default MainServicesPage
