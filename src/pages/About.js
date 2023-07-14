import React from 'react'
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const About = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');
    const thirdGroupRef = useIntersectionObserver('.third-group');
    const fourthGroupRef = useIntersectionObserver('.fourth-group');

  return (
    <section className='trainings flex flex-col py-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <div className=' w-full lg:w-3/4 mx-auto text-3xl text-center font-semibold'>About Us</div>
        <div className=' w-full lg:w-3/4 flex flex-col mx-auto space-y-[20vh] p-8 text-gray-200'>
            <div className='w-full flex flex-col lg:flex-row p-4 lg:p-16 bg-red-800 items-center rounded lg:tracking-wider text-sm lg:text-lg'>
                <div className=' w-full lg:w-3/4 flex flex-row justify-start space-y-6 items-start'>
                    <div className='w-full lg:w-3/4 space-y-8 first-group'> 
                        <p className='text-left'>Instec Digital is a creative engineering design and systems integration team based in Karachi, Pakistan. 
                        We help organizations solve their toughest challenges in Information Security, Business Continuity and Disaster Recovery Planning, IT Service Management, 
                        Virtualization & Cloud Migrations and Interactive Web Application Development. Our core team consists of professional engineers having rich and diverse backgrounds.</p>
                        <p className='text-left'>We work on projects with our customers in Energy, Financial, International Development, Health, Manufacturing and Telecom sectors.</p>
                        <p className='text-left'>Today's businesses rely heavily on a robust and resilient information technology (IT) and telecommunications infrastructure to deliver 
                        essential business services in order to meet the company's mission, objectives, and key targets. This dependence on information technology stems from several requirements 
                        and demands including:</p>
                        <ul className='hidden lg:flex flex-col  w-full lg:w-3/4 space-y-4 p-4'>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Information Security</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Business Continuity and Disaster Recovery Planning</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>IT Service Management</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Virtualization and Cloud Computing</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Interactive Web Application Development</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='h-full justify-start my-20 ml-20 lg:ml-0 flex flex-col flex-grow text space-y-4 border-4 border-white border-y-0 border-r-0'>
                    <div className='h-20 flex flex-row items-center justify-start space-x-4 -translate-x-6 bg-red-800 fourth-group'>
                        <img className='w-12 h-12' src='../static/images/security.png'></img>
                        <Link to={'/information-security'} className='flex flex-col'>
                            <p>INFORMATION SECURITY</p>
                        </Link>
                    </div>
                    <div className='h-20 flex flex-row items-center justify-start space-x-4 -translate-x-6 bg-red-800 fourth-group'>
                        <img className='w-12 h-12' src='../static/images/backup.png'></img>
                        <Link to={'/business-continuity'} className='flex flex-col'>
                            <p>BUSINESS CONTINUITY AND DISASTER RECOVERY</p>
                        </Link>
                    </div>
                    <div className='h-20 flex flex-row items-center justify-start space-x-4 -translate-x-6 bg-red-800 fourth-group'>
                        <img className='w-12 h-12' src='../static/images/circular.png'></img>
                        <Link to={'/data-and-it-service-management'} className='flex flex-col'>
                            <p>IT SERVICE MANAGEMENT</p>
                        </Link>
                    </div>
                    <div className='h-20 flex flex-row items-center justify-start space-x-4 -translate-x-6 bg-red-800 fourth-group'>
                        <img className='w-12 h-12' src='../static/images/desktop-virtual.png'></img>
                        <Link to={'/virtualization-and-clouds'} className='flex flex-col'>
                            <p>VIRTUALIZATION AND CLOUD COMPUTING</p>
                        </Link>
                    </div>
                    <div className='h-20 flex flex-row items-center justify-start space-x-4 -translate-x-6 bg-red-800 fourth-group'>
                        <img className='w-12 h-12' src='../static/images/web-dev.png'></img>
                        <Link to={'/web-design-development'} className='flex flex-col'>
                            <p>WEB DESIGN & DEVELOPMENT SERVICES</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col bg-red-800 items-center font-semibold rounded space-y-6 p-4 lg:p-16 text-sm lg:text-lg'>
                <div className='w-full flex flex-col items-center mb-8 space-y-4 lg:tracking-wider'>
                    <p className=' text-xl lg:text-3xl font-semibold'>Meet The Team</p>
                    <p className='font-semibold'>We are a team of dedicated professionals, ready to do what ever it takes to make your business grow</p>
                </div>
                <div className='w-full first-group grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className='flex flex-col border-2 border-white rounded drop-shadow-2xl p-6 transition-all duration-300 third-group'>
                        <p className='text-center text-xl font-bold mb-8 lg:tracking-wider'>NASIR FARHAT KHAN, CEO</p>
                        <div className='flex flex-col space-y-4'>
                            <p>Nasir is the co-founder and Chief Executive Officer of Instec. In 1987, while studying at N.E.D. University, Nasir founded Instec to focus on helping 
                                organizations improve their security posture, respond to,and contain computer intrusions - making Instec the first company to offer information security 
                                services in Pakistan. He has spent over 18 years in information security, and has been on the front lines helping organizations in addressing their information 
                                security challenges including security architecture, incident response and resilience. Nasir also has experience of design and implementation of Distributed 
                                Control and factory automation systems.</p>
                            <p>Nasir has also developed and delivered specialized security course for several organizations in Pakistan and the Middle East. He teaches Hacker's Insight for
                                Managers and Intrusion Detection & Response courses.</p>
                            <p>Nasir holds a Bachelor of Engineering in Computer Systems from N.E.D. university of Engineering and Technology. He is a Certified Information System Security 
                                Professional (CISSP).</p>
                        </div>
                    </div>
                    <div className='flex flex-col border-2 border-white rounded drop-shadow-2xl p-6 transition-all duration-300 third-group'>
                        <p className='text-center text-xl font-bold mb-8 lg:tracking-wider'>MUDASSIR FARHAT KHAN, COO</p>
                        <div className='flex flex-col space-y-4'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, mi sed sollicitudin sagittis, elit eros sollicitudin lorem, ut tristique enim ipsum vitae ex. 
                                Aenean euismod nunc mauris, vitae consequat turpis tristique nec. Ut vestibulum sagittis mi, vel ullamcorper massa aliquam in. Quisque id dui vel sapien ultricies lobortis. 
                                Nam venenatis purus at lectus tristique, at varius est pulvinar. Integer eleifend elit ac est viverra, ac congue metus vestibulum. Nullam sit amet fringilla elit.</p>
                            <p>Vestibulum sodales consequat justo, nec tempor nisi hendrerit eget. Fusce rhoncus enim eu tellus condimentum, non consequat erat malesuada. Etiam id urna mauris. 
                                Suspendisse nec urna ac odio finibus varius. Morbi venenatis ultricies eleifend. Sed interdum arcu a viverra auctor. Mauris semper iaculis nulla, vitae vulputate 
                                purus tincidunt a. Aenean in metus sit amet arcu consectetur venenatis id vitae augue. Vivamus pellentesque, velit id tincidunt lacinia, ipsum ipsum facilisis turpis, 
                                sit amet dapibus risus ligula nec ante.</p>
                        </div>
                    </div>
                    <div className='flex flex-col border-2 border-white rounded drop-shadow-2xl p-6 transition-all duration-300 third-group'>
                        <p className='text-center text-xl font-bold mb-8 lg:tracking-wider'>RATANSHAW MAKUJINA, CTO</p>
                        <div className='flex flex-col space-y-4'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, mi sed sollicitudin sagittis, elit eros sollicitudin lorem, ut tristique enim ipsum vitae ex. 
                                Aenean euismod nunc mauris, vitae consequat turpis tristique nec. Ut vestibulum sagittis mi, vel ullamcorper massa aliquam in. Quisque id dui vel sapien ultricies lobortis. 
                                Nam venenatis purus at lectus tristique, at varius est pulvinar. Integer eleifend elit ac est viverra, ac congue metus vestibulum. Nullam sit amet fringilla elit.</p>
                            <p>Vestibulum sodales consequat justo, nec tempor nisi hendrerit eget. Fusce rhoncus enim eu tellus condimentum, non consequat erat malesuada. Etiam id urna mauris. 
                                Suspendisse nec urna ac odio finibus varius. Morbi venenatis ultricies eleifend. Sed interdum arcu a viverra auctor. Mauris semper iaculis nulla, vitae vulputate 
                                purus tincidunt a. Aenean in metus sit amet arcu consectetur venenatis id vitae augue. Vivamus pellentesque, velit id tincidunt lacinia, ipsum ipsum facilisis turpis, 
                                sit amet dapibus risus ligula nec ante.</p>
                        </div>
                    </div>
                </div>
            </div>

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

export default About
