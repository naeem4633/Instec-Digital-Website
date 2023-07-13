import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const InformationSecurity = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');

  return (
    <section className=' flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className='w-full h-[100vh]'>
          <img src='../static/images/gradient-1.png' className='w-full h-full'></img>
          <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-1/2 -translate-y-[90vh]'>
            <div className='flex flex-col heading items-start'>
                <p className='text-white text-6xl font-bold '>Information Security</p>
                <p className='text-6xl font-bold text-red-800'>Services</p> 
            </div>
            <img className='' src='../static/images/first.png'></img>
          </div>
        </div>
        <div className='w-full flex flex-col  text-black space-y-4 p-8'>
            <p className='w-3/4 mx-auto text-3xl text-center font-semibold'>Information Security</p>
            <div className='w-1/2 mx-auto border border-gray-200'></div>
            <p className='w-3/4 mx-auto text-xl text-center'>Instec provides Lifecycle Security support. Lifecycle security support is the ability to design, implement, maintain, 
            and evolve the security architectures we create.</p>
            <p className='w-3/4 mx-auto text-xl p-2 text-center rounded border border-white'>We focus on a risk management approach to engineer effective security solutions that enhance our clients' operations.</p>
            <p className='w-3/4 mx-auto text-xl text-center'>This focus ensures our solutions are practical and efficient; enabling our clients to successfully address and 
            manage their information security risks.</p>
        </div>
            <div className='mx-auto w-3/4 p-20 color-secondary items-center rounded drop-shadow-2xl tracking-wider text-white'>
                <div className='mx-auto w-3/4 flex flex-col justify-start space-y-6 items-center'>
                    <div className='flex flex-col text-white space-y-2'>
                        <p className='w-full text-3xl font-semibold'>Why INSTEC?</p>
                    </div>
                    <div className='w-full first-group'>
                        <p className='text-lg text-left'>We provide Information Security Services across all the facets of our clients' technology infrastructure. 
                        Our approach allows us to determine the business risk posed to information assets and helps build and maintain sustainable security solutions.</p>
                        <p className='mt-8'>We bring value to the client by:</p>
                        <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Providing guidelines to protect information assets from business-specific risks</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Providing advice on how to effectively and efficiently protect critical information assets</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Engendering confidence in critical business systems</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Providing advice on how to protect your organization from electronic threats</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Satisfying information systems audit requirements</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        <div className='w-3/4 flex flex-col mx-auto space-y-[20vh] p-8 text-white'>
            <div className='mt-20 -mb-32 w-3/4 mx-auto text-3xl text-center text-black font-semibold'>OUR OFFERINGS</div>
            <div className='w-full flex flex-row p-16 bg-red-800 items-center rounded drop-shadow-2xl tracking-wider'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <img className='w-20 h-20' src='../static/images/security.png'></img>
                </div>
                <div className='w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <div className='flex flex-col text-white space-y-2'>
                        <p className='text-3xl font-semibold'>Security Testing & Assessment</p>
                    </div>
                    <div className='w-3/4 first-group'>
                        <p className='text-lg text-left'>We help you in assessing your infrastructure to understand where control gaps may be leaving the organization at unacceptable risk.</p>
                        <p className='text-lg text-left'>Our assessment services can be tailored to meet the needs of your unique business requirements and risks that your organization face.</p>
                        <p className='mt-8'>Our Services Include:</p>
                        <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Security Risk Assesment</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Network Architecture Review</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Firewall Assessment</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Active Directory Assessment</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Application Architecture Review</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Database Architecture Review</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Penetration Testing</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Web Application Testing</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row p-16 bg-red-800 drop-shadow-2xl items-center rounded tracking-wider'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <img className='w-20 h-20' src='../static/images/design.png'></img>
                </div>
                <div className='w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <div className='flex flex-col text-white space-y-2'>
                        <p className='text-3xl font-semibold'>Security Engineering: Design & Implementation of Security Architecture</p>
                    </div>
                    <div className='w-3/4 first-group'>
                        <p className='text-lg text-left'>Security engineering is about building systems to remain dependable in the face of intentional misuse, error, or disaster. 
                        We at Instec, focus on the tools, processes, and methods required to design, implement, and test systems, and to adapt existing systems as their environment evolves.</p>
                        <p className='mt-8'>Our Services Include:</p>
                        <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Network Security</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Access Control systems</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Public Key Infrastructure</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Intrusion Detection systems</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Malware Detection and Containment</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Desktop and Server Security</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row p-16 bg-red-800 items-center rounded drop-shadow-2xl tracking-wider'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <img className='w-20 h-20' src='../static/images/applications.png'></img>
                </div>
                <div className='w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <div className='flex flex-col text-white space-y-2'>
                        <p className='text-3xl font-semibold'>Application & Database Security</p>
                    </div>
                    <div className='w-3/4 first-group'>
                        <p className='text-lg text-left'>Instec can help you put information security in your application development lifecycle. We can help in defining Security Objectives, 
                        identifying risks, designing appropriate controls and embedding best practices in your development cycle.</p>
                        <p className='mt-8'>Our Services Include:</p>
                        <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Secure Programming</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Web Application Architecture</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Database Security</p>
                            </li>
                            <li className='flex flex-row items-center space-x-4 second-group'>
                                <img className='w-4 h-4' src='../static/images/point.png'></img>
                                <p>Deployment Review</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row p-16 bg-red-800 items-center rounded drop-shadow-2xl tracking-wider'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <img className='w-20 h-20' src='../static/images/security.png'></img>
                </div>
                <div className='w-3/4 flex flex-col justify-start items-start space-y-12'>
                    <div className='space-y-6'>
                        <div className='flex flex-col text-white space-y-8'>
                            <p className='text-3xl font-semibold'>Information Security</p>
                            <p className='text-xl font-semibold'>Management</p>
                        </div>
                        <div className='w-3/4 first-group'>
                            <p className='text-lg text-left'>The governing principle behind an ISMS is that an organization should design, implement and maintain a coherent 
                            set of policies, processes and systems to manage risks to its information assets, thus ensuring acceptable levels of information security risk.</p>
                            <p className='text-lg text-left'>We help you in formulating an Information Security Strategy for your organization and implementing the strategy 
                            through defining risk management model, policies and procedures, and providing relevant training.</p>
                        </div>
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col text-white space-y-2'>
                            <p className='text-xl font-semibold'>Policies and Procedures</p>
                        </div>
                        <div className='w-3/4 first-group'>
                            <p className='text-lg text-left'>We help our customers comprehend the complexities and implications of security policy development, enforcement, 
                            and risk assessment. When implementing new systems, customers need to reappraise security management across the enterprise. We assist our customers 
                            restate their security policies and procedures to reflect their changing system infrastructure and the new risks they may face.</p>
                            <p className='text-lg text-left'>Security policies and procedures can be redefined, for example, to meet ISO 27001, ISO 22301 certification requirements 
                            and can be implemented as part of customer's security architecture.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InformationSecurity
