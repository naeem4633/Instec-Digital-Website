import useIntersectionObserver from '../Animations'
import { Link } from 'react-router-dom'
import { ResetPage } from '../ResetPage'
import React, { useRef } from 'react';

const AboutUs = () => {
    const fourthGroupRef = useIntersectionObserver('.fourth-group');

  return (
    <section className='trainings flex flex-col pb-8 space-y-[20vh] items-center min-h-[50vh] w-full text-black'>
        <ResetPage />
        <div className="flex w-full h-[50vh] bg-[url('static/images/about-us-cover.png')]">
            <div className='w-full h-full flex flex-col justify-center'>
                <div className='mx-auto flex flex-row justify-center items-center w-1/2'>
                    <div className='flex flex-col heading items-start'>
                        <p className='text-white text-6xl font-bold'>About Us</p> 
                    </div>
                </div>
            </div>
        </div>
        <div className=' w-full lg:w-3/4 flex flex-col mx-auto p-8 text-black space-y-[20vh]'>
            <div className='w-full flex flex-col lg:flex-row p-4 lg:p-16 rounded lg:tracking-wider text-sm lg:text-lg lg:space-x-8 items-start'>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full' src='../static/images/about-us-hero.jpg' alt=''></img>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col space-y-4'>
                    <p className='text-xl lg:text-3xl font-semibold text-black'>About Us</p>
                    <p className=''>Instec Digital is a creative engineering design and systems integration team based in Karachi, Pakistan. 
                        We help organizations solve their toughest challenges in Information Security, Business Continuity and Disaster Recovery Planning, IT Service Management, 
                        Virtualization & Cloud Migrations and Interactive Web Application Development. Our core team consists of professional engineers having rich and diverse backgrounds.</p>
                    <p className=''>We work on projects with our customers in Energy, Financial, International Development, Health, Manufacturing and Telecom sectors.</p>
                </div>
            </div>
            <div className='mx-auto w-full lg:w-1/2 border flex flex-col lg:flex-row p-4 lg:p-16 items-center justify-center rounded lg:tracking-wider text-sm lg:text-lg lg:space-x-8'>
                <div className='w-full flex flex-col space-y-12 text-lg lg:text-xl'>
                    <p className='text-center w-full font-semibold text-xl lg:text-3xl'>Some Stats About Our Clients</p>
                    <div className='w-full flex flex-col lg:flex-row justify-between items-baseline text-center'>
                        <div className='p-4 space-y-2'>
                            <p className='text-red-800 font-semibold'>300</p>
                            <p className='font-semibold'>Customers</p>
                        </div>
                        <div className='p-4 space-y-2'>
                            <p className='text-red-800 font-semibold'>250,000+</p>
                            <p className='font-semibold'>Users</p>
                        </div>
                        <div className='p-4 space-y-2'>
                            <p className='text-red-800 font-semibold'>450</p>
                            <p className='font-semibold'>Incidents Handled</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div className='w-full bg-red-100 border p-8 lg:p-32 flex flex-row items-center justify-center rounded text-sm lg:text-lg lg:space-x-8'>
            <div className='h-full w-3/4 lg:ml-0 flex flex-col lg:flex-row justify-evenly items-center border-black lg:border-2 lg:border-x-0 lg:border-b-0 font-semibold'>
                <div className='h-20 flex flex-row lg:flex-col items-center justify-start space-y-4 -translate-x-10 lg:-translate-y-10'>
                    <img className='w-20 h-20 bg-red-100 p-4 fourth-group' src='../static/images/security-black.png' alt=''></img>
                    <Link to={'/information-security'} className='flex flex-col'>
                        <p className='w-40 text-center'>Information Security</p>
                    </Link>
                </div>
                <div className='h-20 flex flex-row lg:flex-col items-center justify-start space-y-4 -translate-x-10 lg:-translate-y-10'>
                    <img className='w-20 h-20 bg-red-100 p-4 fourth-group' src='../static/images/cloud-upload-black.png' alt=''></img>
                    <Link to={'/business-continuity'} className='flex flex-col'>
                        <p className='w-40 text-center'>Business Continuity and Disaster Recovery</p>
                    </Link>
                </div>
                <div className='h-20 flex flex-row lg:flex-col items-center justify-start space-y-4 -translate-x-10 lg:-translate-y-10'>
                    <img className='w-20 h-20 bg-red-100 p-4 fourth-group' src='../static/images/circular-black.png' alt=''></img>
                    <Link to={'/data-and-it-service-management'} className='flex flex-col'>
                        <p className='w-40 text-center'>IT Service Management</p>
                    </Link>
                </div>
                <div className='h-20 flex flex-row lg:flex-col items-center justify-start space-y-4 -translate-x-10 lg:-translate-y-10'>
                    <img className='w-20 h-20 bg-red-100 p-4 fourth-group' src='../static/images/virtual-black.png' alt=''></img>
                    <Link to={'/virtualization-and-clouds'} className='flex flex-col'>
                        <p className='w-40 text-center'>Virtualization and Cloud Computing</p>
                    </Link>
                </div>
                <div className='h-20 flex flex-row lg:flex-col items-center justify-start space-y-4 -translate-x-10 lg:-translate-y-10'>
                    <img className='w-20 h-20 bg-red-100 p-4 fourth-group' src='../static/images/coding.png' alt=''></img>
                    <Link to={'/web-design-development'} className='flex flex-col'>
                        <p className='w-40 text-center'>Web Design and Development Services</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className=' w-full lg:w-3/4 flex flex-col mx-auto space-y-[20vh] p-8 text-black'>
            <div className='space-y-8'>
                <div className='w-full items-center lg:tracking-wider'>
                    <p className=' text-xl lg:text-3xl text-center font-semibold text-black'>Industry Leading Partnerships</p>
                </div>
                <div className='w-full flex flex-col space-y-6 min-h-[70vh]'>
                    <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div className='cursor-pointer py-8 flex flex-col px-12 items-center justify-evenly space-y-6 border rounded-lg text-black hover:bg-gray-100 hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            <div className='h-42'>
                                <img className='w-40' src='../static/images/g-suite.png' alt='Google Enterprise'></img>
                                </div>
                                <div>
                                <p className='font-bold'>Google Enterprise</p>
                                <p className='h-1/3'>We do tools built to let people work anywhere, anytime, on any device, without loss of security or control</p>
                            </div>
                        </div>
                        <div className='cursor-pointer py-8 flex flex-col px-12 items-center justify-evenly space-y-6 bg-gray-100 border rounded-lg text-black hover:bg-gray-100 hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            <div className='h-42'>
                                <img className='w-32' src='../static/images/aws.png' alt='Amazon Web Services'></img>
                                </div>
                                <div>
                                <p className='font-bold -mt-4'>Amazon Web Services</p>
                                <p className='h-1/3'>Complete set of infrastructure and application services to run virtually everything in the cloud</p>
                            </div>
                        </div>
                        <div className='cursor-pointer py-8 flex flex-col px-12 items-center justify-evenly space-y-6 bg-gray-100 border rounded-lg text-black hover:bg-gray-100 hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            <div className='h-42 pt-4'>
                                <img className='w-52' src='../static/images/vmware.png' alt='VMware'></img>
                                </div>
                                <div>
                                <p className='font-bold mt-6'>VMware</p>
                                <p className='h-1/3'>We provide software-defined data center technologies and the services to go with it</p>
                            </div>
                        </div>
                        <div className='cursor-pointer py-8 flex flex-col px-12 items-center justify-evenly space-y-6 border rounded-lg text-black hover:bg-gray-100 hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            <div className='h-42 pt-4'>
                                <img className='w-52' src='../static/images/symantec.png' alt='Symantec Enterprise'></img>
                                </div>
                                <div>
                                <p className='font-bold mt-8'>Symantec Enterprise</p>
                                <p className='h-1/3'>We do tools for Backup + Recovery and Security. Enabling confidence wherever information is used or stored</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow h-1/2 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className='cursor-pointer py-8 flex flex-col px-12 items-center justify-center space-y-6 border rounded-lg text-black hover:bg-gray-100 hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            <img className='w-48 pt-6 pb-6' src='../static/images/trend-micro.png' alt='Trend Micro'></img>
                            <p className='font-bold'>Trend Micro</p>
                            <p className='h-1/3'>We do Internet content security and threat management solutions to protect data in physical, virtualized, and cloud environments</p>
                        </div>
                        <div className='cursor-pointer py-8 flex flex-col space-y-6 px-12 items-center justify-center bg-gray-100 border rounded-lg text-black hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            <img className='w-52' src='../static/images/redhat.png' alt='Red Hat'></img>
                            <p className='font-bold'>Red Hat</p>
                            <p className='h-1/3'>We provide open source solutions to complement reliable and high-performing cloud, virtualization, storage, Linux, and middleware technologies</p>
                        </div>
                        <div className='cursor-pointer py-8 flex flex-col px-12 items-center justify-center space-y-6 border rounded-lg text-black hover:bg-gray-100 hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            <img className='w-52' src='../static/images/microsoft.png' alt='Microsoft'></img>
                            <p className='font-bold'>Microsoft</p>
                            <p className='h-1/3'>We combine Microsoft security infrastructure components with IT best practices to create efficient and cost-effective security solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs
