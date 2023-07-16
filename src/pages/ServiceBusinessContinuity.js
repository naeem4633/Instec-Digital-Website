import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const ServiceBusinessContinuity = () => {
    const firstGroupRef = useIntersectionObserver('.first-group');
    const secondGroupRef = useIntersectionObserver('.second-group');

  return (
    <section className='flex flex-col pb-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className="flex w-full h-[100vh] bg-[url('static/images/gradient-1.png')]">
          <div className='mx-auto h-full space-x-52 flex flex-row justify-center items-center w-1/2'>
            <div className='flex flex-col heading items-start'>
                <p className='text-white text-6xl font-bold '>Business Continuity</p>
                <p className='text-6xl font-bold text-red-800'>Services</p> 
            </div>
            <img className='hidden lg:block' src='../static/images/analytics-2.png' alt=''></img>
          </div>
        </div>
        <div className='w-full flex flex-col space-y-4 p-8'>
            <p className='lg:w-3/4 mx-auto text-xl lg:text-3xl text-center font-semibold'>Business Continuity</p>
            <div className='w-1/2 mx-auto border border-gray-200'></div>
            <p className='lg:w-3/4 mx-auto lg:text-xl text-center'>You can turn to Instec for revitalizing your Business Continuity and Disaster Recovery Plans. Instec has the necessary 
            skills and expertise to jump-start your Business Continuity initiatives or improve upon your existing plans. We provide Business Continuity and DR Planning and Management 
            Services on a global scale for large, complex enterprises.</p>
            <p className='lg:w-3/4 mx-auto lg:text-xl text-center'>We combine our resilience experience, technology know-how, and industry knowledge to design and implement continuity 
            programs that focus on what is critical. We help our customers focus their time and resources on the right continuity solutions.</p>
            <p className='lg:w-3/4 mx-auto lg:text-xl text-center'>We are equally adept at formulating Business Continuity strategies growing out of Enterprise Risk and translating 
            Business Continuity into meaningful and actionable Disaster Recovery Plans.</p>
        </div>
        <div className='w-full lg:w-3/4 p-4 lg:p-16 color-secondary items-center rounded drop-shadow-2xl lg:tracking-wider'>
            <div className='mb-12 mx-auto w-3/4 flex flex-col justify-start items-start text-white space-y-12 text-sm lg:text-lg'>
                <p className='w-full text-3xl font-semibold text-center'>Why INSTEC?</p>
                <div className='space-y-6 first-group'>
                    <div className='flex flex-col space-y-8 '>
                        <p className='text-xl lg:text-3xl font-semibold'>Our Core Differentiating Factors</p>
                        <p className='lg:text-xl font-semibold'>Expertise</p>
                    </div>
                    <div>
                        <p className='text-left'>Our consultants have 10+ years of experience in the field. This gives us enough depth to address your most 
                        complex BC/DR requirements. We have expertise of developing BC/DR programs for several industry verticals spanning multiple geographies.</p>
                    </div>
                </div>
                <div className='space-y-6 first-group'>
                    <div className='flex flex-col space-y-2'>
                        <p className='lg:text-xl font-semibold'>Technology Partnerships</p>
                    </div>
                    <div>
                        <p className='text-left'>Many of our customers want not only a consultancy that can provide services as it relates to program management, 
                        strategy, processes etc., but a consultancy that can actually oversee the deployment and integration of technology as it relates to automated 
                        communication and technology recovery services.</p>
                        <p className='text-left'>Instec has partnerships with key technology vendors such as Amazon Web Services, Microsoft, Oracle and Vmware. 
                        These industry leading partnerships enable us to actually implement and guide our customers in implementing a DR plan. We have strong understanding 
                        of core technologies and implementation experience of associated products to enable us to deliver complete DR solutions.</p>
                    </div>
                </div>
                <div className='space-y-6 first-group'>
                    <div className='flex flex-col space-y-2'>
                        <p className='lg:text-xl font-semibold'>Certification, Audit and Assessment Services</p>
                    </div>
                    <div>
                        <p className='text-left'>Instec offers complete range of audit and assessment services for your internal or external audit requirements. 
                        With global recognition of industry standards such as BS 25999 or NFPA 1600, a growing number of enterprises want to understand how their programs 
                        stack up against these standards. Instec provides services to prepare you for an International certification such as BS25999.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full lg:w-3/4 flex flex-col mx-auto space-y-[10vh] lg:space-y-[20vh] p-0 lg:p-8 text-white'>
            <div className='w-full p-4 lg:p-16 bg-red-800 items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg'>
                <div className='w-full flex flex-col justify-start items-start space-y-12'>
                    <div className='space-y-6 second-group'>
                        <div className='flex flex-col text-white space-y-8'>
                            <p className='text-xl lg:text-3xl text-center font-semibold'>Consulting Services</p>
                            <p className='lg:text-xl font-semibold'>Business impact analysis, to catalog your critical assets and processes</p>
                        </div>
                        <div className='w-full'>
                            <p className='text-left'>Instec can help you complete a BIA across a globally distributed enterprise using our proven methodology 
                            assisted with on-site workshops. BIA is actually a business process mapping initiative. The BIA will enable you to understand your business processes, 
                            dependencies, and recovery/resiliency requirements.</p>
                        </div>
                    </div>
                    <div className='space-y-6 second-group'>
                        <div className='flex flex-col text-white space-y-2'>
                            <p className='lg:text-xl font-semibold'>Risk assessments, to identify and measure potential disruptions</p>
                        </div>
                        <div className='w-full'>
                            <p className='text-left'>Instec will help you in identifying, analyzing, and evaluating the risks to your business in a structured 
                            manner using an established risk framework and risk taxonomy. We will help you in quantifying the probability and the impact of the risk so 
                            you can prioritize which risks to mitigate and which you will accept.</p>
                        </div>
                    </div>
                    <div className='space-y-6 second-group'>
                        <div className='flex flex-col text-white space-y-2'>
                            <p className='lg:text-xl font-semibold'>Strategy and plan development, to align efforts with objectives</p>
                        </div>
                        <div className='w-full'>
                            <p className='text-left'>Once you understand your business requirements, dependencies, and most probable, high-impact risks through
                             the BIA and RA, you have to develop mitigating strategies and actionable plans should the risks transpire. Instec will help you in developing 
                             strategies and document plans that encompass people, processes, and technology solutions. Strategy also encompasses how you will organize and 
                             govern your BC management program across the enterprise on an ongoing basis.</p>
                        </div>
                    </div>
                    <div className='space-y-6 second-group'>
                        <div className='flex flex-col text-white space-y-2'>
                            <p className='lg:text-xl font-semibold'>Testing, to provide assurance your plan will function</p>
                        </div>
                        <div className='w-full'>
                            <p className='text-left'>Without testing your plans are useless. Testing helps you validate your capabilities and ensure that everyone is 
                            comfortable with their roles and responsibilities. Instec will help you in creating your overall test strategy. We can develop test methodologies, 
                            define test objectives and scenarios, schedule tests, manage the execution of tests, and debrief after the test. This includes tests such as walkthroughs, 
                            tabletop exercises, simulations, and actual failovers.</p>
                        </div>
                    </div>
                    <div className='space-y-6 second-group'>
                        <div className='flex flex-col text-white space-y-2'>
                            <p className='lg:text-xl font-semibold'>Maintenance and ongoing support, to account for changes in the business and risk profile</p>
                        </div>
                        <div className='w-full'>
                            <p className='text-left'>BC planning is not a one-time event, it's an ongoing program. You will need to regularly update BIAs and risk assessments, 
                            continuously update plans, and test several times a year. Instec will provide knowledge and tool transfer during the engagement and offer continuing support 
                            services in the form of co-sourcing or full outsourcing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row p-4 lg:p-16 bg-gray-200 text-black items-center rounded drop-shadow-2xl lg:tracking-wider text-sm lg:text-lg'>
                <div className='hidden lg:block w-1/4 items-center space-y-6'>
                    <img className='mx-auto w-20 h-20' src='../static/images/customer-service-black.png' alt=''></img>
                </div>
                <div className='w-full lg:w-3/4 flex flex-col justify-start space-y-6 items-start'>
                    <p className='text-xl lg:text-3xl font-semibold'>Other Services</p>
                    <div className='w-full lg:w-3/4'>
                        <ul className='flex flex-col w-full space-y-4 p-4'>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Evaluation and Assessment</p>
                                    <p>We evaluate the strengths and weaknesses of continuity plans, identify and mitigate areas of potential risk</p>
                                </div>
                            </li>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Planning and Design</p>
                                    <p>We improve your resilience capabilities with cost-optimized recovery planning and design</p>
                                </div>
                            </li>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Implementation and Testing</p>
                                    <p>We help customers in execution, testing, and validation of disaster recovery and continuity plans</p>
                                </div>
                            </li>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Business Continuity Management</p>
                                    <p>We help in reducing risks and improving availability while controlling operational expenses</p>
                                </div>
                            </li>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Disaster Recovery</p>
                                    <p>We design, implement and support solutions to safeguard your key business data, maintain productivity, and limit 
                                        financial losses during an outage</p>
                                </div>
                            </li>
                            <li className='flex flex-row space-x-4 second-group'>
                                <img className='mt-1 w-4 h-4' src='../static/images/point-black.png' alt=''></img>
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Cloud based Disaster Recovery</p>
                                    <p>The Cloud offers tremendous options for disaster recovery. We help our customers in building and implementing a 
                                        cloud based disaster recovery infrastructure.</p>
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

export default ServiceBusinessContinuity
