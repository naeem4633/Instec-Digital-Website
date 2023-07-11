import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
    <section className='services flex flex-col py-8 space-y-12 items-center h-[120vh] w-full text-black'>
        <div className='w-3/4 mx-auto text-3xl text-center font-semibold'>OUR SERVICES</div>
          <div className='w-1/2 border border-gray-200'></div>
          <div className='w-3/4 grid grid-cols-3 mx-auto h-[85vh] gap-8'>
            <div className='flex flex-col space-y-6 px-12 justify-center bg-gray-100 border rounded-lg text-black hover:drop-shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/information-security.png'></img>
              <p className='text-xl font-bold'>INFORMATION SECURITY</p>
              <p className='h-1/3'>We help you in securing your environment. We leverage real-world techniques to identify exposures and assess their implications on the business</p>
              <Link className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png'></img>
              </Link>
            </div>
            <div className='flex flex-col px-12 justify-center space-y-6 bg-gray-800 border rounded-lg text-gray-100 hover:text-black hover:bg-gray-100 hover:drop-shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/it-service.png'></img>
              <p className='text-xl font-bold'>IT SERVICE MANAGEMENT</p>
              <p className='h-1/3'>We provide ITSM solutions - from strategic planning, assessments and implementation to continuous improvement and beyond. We use ITIL and other best practice frameworks to deliver efficient IT operations</p>
              <Link className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl -translate-y-1'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png'></img>
              </Link>
            </div>
            <div className='flex flex-col space-y-6 px-12 justify-center bg-gray-100 border rounded-lg text-black hover:drop-shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/cloud.png'></img>
              <p className='text-xl font-bold'>VIRTUALIZATION & CLOUD</p>
              <p className='h-1/3'>We design and implement both Public and Private Cloud Infrastructures for the enterprise. Our solutions are tailored based upon our customer’s needs to provide resilience, consolidation, or additional cloud based services</p>
              <Link className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png'></img>
              </Link>
            </div>
            <div className='flex flex-col px-12 justify-center space-y-6 bg-gray-800 border rounded-lg text-gray-100 hover:text-black hover:bg-gray-100 hover:drop-shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/data-management.png'></img>
              <p className='text-xl font-bold'>DATA MANAGEMENT</p>
              <p className='h-1/3'>Today firms need timely access to accurate data for effective decisions. We provide the knowledge, tools and technology to harness the power of data</p>
              <Link className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png'></img>
              </Link>
            </div>
            <div className='flex flex-col space-y-6 px-12 justify-center bg-gray-100 border rounded-lg text-black hover:drop-shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/disaster.png'></img>
              <p className='text-xl font-bold'>BUSINESS CONTINUITY AND DISASTER RECOVERY</p>
              <p className='h-1/3'>You can turn to Instec for revitalizing your Business Continuity and Disaster Recovery Plans. Instec has the necessary skills and expertise to jump-start your Business Continuity initiatives or improve upon your existing plans</p>
              <Link className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl -translate-y-2'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png'></img>
              </Link>
            </div>
            <div className='flex flex-col px-12 justify-center space-y-6 bg-gray-800 border rounded-lg text-gray-100 hover:text-black hover:bg-gray-100 hover:drop-shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <img className='w-12 h-12' src='../static/images/data-center.png'></img>
              <p className='text-xl font-bold'>DATACENTER SERVICES</p>
              <p className='h-1/3'>Instec delivers the best solutions in datacenter and computer room conceptualization, architecture and design. Our highly customized data center designs are based on the existing state-of-the-art components that go into a modern day data center</p>
              <Link className='flex flex-row items-center justify-between w-40 p-2 border-4 border-black border-x-0 border-t-0 text-xl'>
                <p>Get Started</p>
                <img className='w-6 h-6' src='../static/images/right-arrow.png'></img>
              </Link>
            </div>
          </div>
      </section>
    </>
  )
}

export default Services
