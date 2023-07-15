import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const WebDesign = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');

  return (
    <section className='flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className="flex w-full h-[100vh] bg-[url('static/images/gradient-1.png')]">
          <div className='mx-auto h-full space-x-52 flex flex-row justify-center items-center w-1/2'>
            <div className='flex flex-col heading items-start'>
                <p className='text-white text-5xl lg:text-6xl font-bold '>Web Design &</p>
                <p className='text-5xl lg:text-6xl font-bold text-red-800'>Development</p> 
            </div>
            <img className='hidden lg:block' src='../static/images/webDev.png'></img>
          </div>
        </div>
        <div className='w-full flex flex-col space-y-4 p-8'>
            <p className='w-3/4 mx-auto  text-xl lg:text-3xl text-center font-semibold'>Web Design & Development</p>
            <div className='mx-auto w-1/2 border border-gray-200'></div>
            <p className=' w-full lg:w-3/4 mx-auto lg:lg:text-xl text-center'>Your website is a gateway to your brand - a critical communication channel for your audience, 
            and often a major contributor to your bottom line. Whether it's a winning responsive design you're after, a user-friendly interface, the next killer mobile app, 
            or an integrated platform that ties in with your social and community channels - we have done it all!</p>
        </div>
        <div className=' w-full lg:w-3/4 flex flex-col mx-auto space-y-[20vh] p-8 text-white'>
            <div className='w-full flex flex-row  p-4 lg:p-16 bg-red-800 items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg '>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto w-20 h-20' src='../static/images/web-dev.png'></img>
                </div>
                <div className=' w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <p className=' text-xl lg:text-3xl font-semibold text-white'>Strategic Web Development</p>
                    <div className='w-full first-group'>
                        <p className='text-left'>Your website is a gateway to your brand - a critical communication channel for your audience, and often a major contributor
                         to your bottom line. Whether it's a winning responsive design you're after, a user-friendly interface, the next killer mobile app, or an integrated platform
                          that ties in with your social and community channels - we have done it all!</p>
                        <p className='mt-8'>Our Services Include:</p>
                        <ul className='flex flex-col w-full space-y-4 p-4'>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point.png'></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Content Management</p>
                                    <p>Easy-to-use CMS options for content managers, yet scalable and powerful for advanced functionality.</p>
                                </div>
                            </li>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point.png'></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Information Architecture</p>
                                    <p>Thorough process for sitemap development, taxonomy, and wireframing to define user pathways and content hierarchies.</p>
                                </div>
                            </li>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point.png'></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Usability Testing</p>
                                    <p>Expert, unbiased user experience evaluations employing questionnaires, focus groups, and functional prototypes.</p>
                                </div>
                            </li>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point.png'></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Web Strategy</p>
                                    <p>Expert, unbiased user experience evaluations employing questionnaires, focus groups, and functional prototypes.</p>
                                </div>
                            </li>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point.png'></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Responsive & Mobile</p>
                                    <p>Standardized responsive design solutions for tablet and smartphone users. Need a branded app? We've got you covered.</p>
                                </div>
                            </li>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point.png'></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Life Cycle Support</p>
                                    <p>Expert user and technical support services provided by dedicated, in-house support staff.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebDesign
