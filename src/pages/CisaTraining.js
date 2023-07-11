import React from 'react'

const CisaTraining = () => {
  return (
    <section className='trainings flex flex-col py-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <div className='w-3/4 mx-auto text-3xl text-center font-semibold'>CISA Training</div>
        <div className='flex flex-row w-3/4 mx-auto items-center text-xl text-center font-bold justify-between'>
            <div>
                <p className='tracking-wide'>Certified Information Systems Auditor (CISA) Course</p>
            </div>
            <div className='space-y-2'>
                <p>Duration</p>
                <div className='flex space-x-4'>
                    <img src='../static/images/clock.png' className='w-8 h-8'></img>
                    <p>5 Days</p>
                </div>
            </div>
        </div>
        <div className='w-3/4 flex flex-col mx-auto space-y-[20vh] p-8 text-gray-200'>

            <div className='w-full flex flex-row bg-gray-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Background</p>
                    <img className='w-20 h-20' src='../static/images/hiring.png'></img>
                </div>
                <div className='w-3/4'>
                    <p className='text-lg text-left'>The technical skills and practices that CISA promotes and evaluates are the building blocks of success in the field. 
                    Possessing the CISA designation demonstrates proficiency and is the basis for measurement in the profession. with a growing demand for professionals possessing IS audit, 
                    control and security skills, CISA has become a preferred certification program by individuals and organizations around the world. CISA certification signifies commitment 
                    to serving an organization and the IS audit, control and security industry with distinction.</p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-gray-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Objectives</p>
                    <img className='w-20 h-20' src='../static/images/objective.png'></img>
                </div>
                <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>To get a detailed understanding and update on today's information systems audit domains as prescribed by  Information Systems Audit and Control Association (ISACA)</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>To get a comprehensive review of the domains covered in the CBK</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>To get the latest on information systems governance challenges and countermeasures thereby making them more effective IS governance professionals</p>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-row bg-gray-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Who Should Attend</p>
                    <img className='w-20 h-20' src='../static/images/question.png'></img>
                </div>
                <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Information systems auditors and security practitioners that want to update their knowledge and skill set in the security space</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>IS audit practitioners who are planning to take the CISA examination</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>IS professionals who want to learn about the latest techniques, technologies and strategies in IS audit</p>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-row bg-gray-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Topics Covered</p>
                    <img className='w-20 h-20' src='../static/images/checklist.png'></img>
                </div>
                <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>The IS Audit Process</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>IT Governance</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Systems and Infrastructure Life Cycle</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>The IS Audit Process</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Protection of Information Assets</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Business Continuity and Disaster Recovery</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default CisaTraining
