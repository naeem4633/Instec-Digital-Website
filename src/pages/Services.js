import React from 'react'
import { Link } from 'react-router-dom'
import { ResetPage } from '../ResetPage';

const Services = () => {
  return (
    <>
    <section className='services flex flex-col pb-24 space-y-12 items-center w-full text-black'>
        <ResetPage />
        <div className="flex w-full h-[100vh] bg-[url('static/images/gradient-2.png')]">
          <div className='mx-auto space-x-52 flex flex-row justify-center items-center w-1/2'>
            <div className='flex flex-col space-y-4'>
                <div className='flex flex-col heading items-start'>
                    <p className='text-white text-6xl font-bold '>Our</p>
                    <p className='text-6xl font-bold text-red-800'>Services</p> 
                </div>
            </div>
            <img className='hidden lg:block' src='../static/images/first.png'></img>
          </div>
        </div>
          <div className='w-full 2xl:w-3/4 grid grid-cols-1 lg:grid-cols-3 mx-auto min-h-[100vh] gap-8'>
            <div className='flex flex-col space-y-6 py-4 px-12 justify-center bg-gray-100 border rounded-lg text-black hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/information-security.png' alt=''></img>
              <p className='text-xl font-bold'>INFORMATION SECURITY</p>
              <p className=''>We help you in securing your environment. We leverage real-world techniques to identify exposures and assess their implications on the business</p>
              <Link to={'/information-security'} className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png' alt=''></img>
              </Link>
            </div>
            <div className='flex flex-col py-4 px-12 justify-center space-y-6 bg-red-800 border rounded-lg text-gray-100 hover:text-black hover:bg-gray-100 hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/it-service.png' alt=''></img>
              <p className='text-xl font-bold'>IT SERVICE MANAGEMENT</p>
              <p className=''>We provide ITSM solutions - from strategic planning, assessments and implementation to continuous improvement and beyond. We use ITIL and other best practice frameworks to deliver efficient IT operations</p>
              <Link to={'/data-and-it-service-management'} className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl -translate-y-1'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png' alt=''></img>
              </Link>
            </div>
            <div className='flex flex-col space-y-6 py-4 px-12 justify-center bg-gray-100 border rounded-lg text-black hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/cloud.png' alt=''></img>
              <p className='text-xl font-bold'>VIRTUALIZATION & CLOUD</p>
              <p className=''>We design and implement both Public and Private Cloud Infrastructures for the enterprise. Our solutions are tailored based upon our customer's needs to provide resilience, consolidation, or additional cloud based services</p>
              <Link to={'/virtualization-and-clouds'} className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png' alt=''></img>
              </Link>
            </div>
            <div className='flex flex-col py-4 px-12 justify-center space-y-6 bg-red-800 border rounded-lg text-gray-100 hover:text-black hover:bg-gray-100 hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/code.png' alt=''></img>
              <p className='text-xl font-bold'>Web Development</p>
              <p className=''>We provide strategic web development services for your brand's website, offering responsive design, user-friendly interfaces, mobile apps, and integrated platforms that connect with your social and community channels.</p>
              <Link to={'/web-design-development'} className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png' alt=''></img>
              </Link>
            </div>
            <div className='flex flex-col space-y-6 py-4 px-12 justify-center bg-gray-100 border rounded-lg text-black hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/disaster.png' alt=''></img>
              <p className='text-xl font-bold'>BUSINESS CONTINUITY AND DISASTER RECOVERY</p>
              <p className=''>You can turn to Instec for revitalizing your Business Continuity and Disaster Recovery Plans. Instec has the necessary skills and expertise to jump-start your Business Continuity initiatives or improve upon your existing plans</p>
              <Link to={'/business-continuity'} className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl -translate-y-2'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png' alt=''></img>
              </Link>
            </div>
            <div className='flex flex-col py-4 px-12 justify-center space-y-6 bg-red-800 border rounded-lg text-gray-100 hover:text-black hover:bg-gray-100 hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/data-center.png' alt=''></img>
              <p className='text-xl font-bold'>DATACENTER SERVICES</p>
              <p className=''>Instec delivers the best solutions in datacenter and computer room conceptualization, architecture and design. Our highly customized data center designs are based on the existing state-of-the-art components that go into a modern day data center</p>
              <Link to={'/data-center-services'} className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png' alt=''></img>
              </Link>
            </div>
          </div>
      </section>
    </>
  )
}

export default Services
