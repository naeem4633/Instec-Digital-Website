import React from 'react'

const ItilTraining = () => {
  return (
    <section className='trainings flex flex-col py-8 space-y-8 items-center min-h-[100vh] w-full text-black'>
        <div className='w-3/4 mx-auto text-3xl text-center font-semibold'>ITIL V3 FOUNDATION TRAINING</div>
        <div className='flex flex-row w-3/4 mx-auto items-center text-xl text-center font-bold justify-between'>
            <div>
                <p className='tracking-wide'>Information Technology Infrastructure Library (ITIL) V3 Foundation Course</p>
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
                    <p className='text-3xl font-semibold'>Description</p>
                    <img className='w-20 h-20' src='../static/images/hiring.png'></img>
                </div>
                <div className='w-3/4'>
                    <p className='text-lg text-left'>This course introduces the concept of IT Service Management (ITSM) with a framework for identifying and inter-relating various 
                    activities/processes involved in developing a framework for delivering measuring and improving IT services to the user community.
                    The course is based on the Information Technology Infrastructure Library (ITIL) which is a set of best practices in the areas of IT Service Support and Service Delivery.
                    ITIL is the basis around which BS15000 and ISO 20000 standards have been developed.</p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-gray-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Who Should Attend</p>
                    <img className='w-20 h-20' src='../static/images/question.png'></img>
                </div>
                <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>IT Professionals and Executives who are responsible for the delivery of IT Services required by their company or business, such as System/ Network</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Administrators, IT Managers, Business Managers and Analysts, Business</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Process Specialists, System Analysts, IT Architects and System Integrators</p>
                    </li>
                </ul>
            </div>
            <div className='w-full flex flex-row bg-gray-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Prerequisites</p>
                    <img className='w-20 h-20' src='../static/images/checklist.png'></img>
                </div>
                <div className='w-3/4'>
                    <p className='text-lg text-left'>To qualify for participation in this course, students must have experience with the specification, 
                    development, or management of information technology.</p>
                </div>
            </div>
            <div className='w-full flex flex-row bg-gray-800 items-center rounded tracking-wider space-y-6 p-16'>
                <div className='w-1/4 flex flex-col items-center space-y-6'>
                    <p className='text-3xl font-semibold'>Topics Covered</p>
                    <img className='w-20 h-20' src='../static/images/checklist.png'></img>
                </div>
                <ul className='flex flex-col w-3/4 space-y-4 p-4'>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>ITIL Fundamentals</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Principles of Service Management</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Service Management as a Practice</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>ITIL V3 Key Principles and Models</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Service Strategy</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Service Design</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Service Transition</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Service Operation</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Continual Service Improvement</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Functions</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Roles and Responsibilities</p>
                    </li>
                    <li className='flex flex-row items-center space-x-4'>
                        <img className='w-4 h-4' src='../static/images/point.png'></img>
                        <p>Technology and Architecture</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ItilTraining
