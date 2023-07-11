import React from 'react'

const LinuxTraining = () => {
  return (
    <section className='trainings flex flex-col py-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <div className='w-3/4 mx-auto text-3xl text-center font-semibold'>LINUX TRAINING</div>
        <div className='flex flex-row w-3/4 mx-auto items-center text-xl text-center font-bold justify-center'>
            <div>
                <p className='tracking-wide'>Linux System Administration Training</p>
            </div>
        </div>
        <div className='w-3/4 flex flex-col mx-auto space-y-[20vh] p-8 text-gray-200'>

            <div className='w-full flex flex-row bg-gray-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Background</p>
                    <img className='w-20 h-20' src='../static/images/hiring.png'></img>
                </div>
                <div className='w-3/4'>
                    <p className='text-lg text-left'>The CISSP certification was launched in 1989 and today it is considered the gold standard in information security certifications. 
                    This course conducted by Instec Digital Systems will prepare the participants to take the CISSP exam. 
                    CISSP holders have the necessary skills and and knowledge of best practices to provide IT leadership in the creation and execution of enterprise-wide security infrastructures.
                    As the first credential accredited by ANSI to ISO Standard 17024 in the field of information security, the Certified Information Systems Security Professional (CISSP) certification 
                    provides information security professionals with not only an objective measure of competence but a globally recognized standard of achievement. The CISSP credential demonstrates 
                    competence in the eight domains of the The International Information Systems Security Certification Consortium, or (ISC)² CISSP Common Body of Knowledge.</p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-gray-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Prerequisites</p>
                    <img className='w-20 h-20' src='../static/images/checklist.png'></img>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <p>The CISSP program is targeted at professionals with at least 4 years of experience in the information security field.</p>
                        <p>The training Provides a comprehensive review of information security concepts and industry best practices, covering the 8 domains of the CISSP CBK</p>
                    </div>
                    <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                        <li className='flex flex-row items-center space-x-4'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Security and Risk Management (Security, Risk, Compliance, Law, Regulations, Business Continuity)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Asset Security (Protecting Security of Assets)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Security Engineering (Engineering and Management of Security)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Communications and Network Security (Designing and Protecting Network Security infrastructure)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Identity and Access Management (Controlling Access and Managing Identity)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Security Assessment and Testing (Designing, Performing, and Analyzing Security Testing)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Security Operations (Foundational Concepts, Investigations, Incident Management, Disaster Recovery)</p>
                        </li>
                        <li className='flex flex-row items-center space-x-4'>
                            <img className='w-4 h-4' src='../static/images/point.png'></img>
                            <p>Software Development Security (Understanding, Applying, and Enforcing Software Security)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LinuxTraining
