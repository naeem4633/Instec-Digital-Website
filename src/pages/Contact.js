import React from 'react'
import useIntersectionObserver from '../Animations';
import { ResetPage } from '../ResetPage';

const Contact = () => {
    const thirdGroupRef = useIntersectionObserver('.third-group');

  return (
    <section className='services flex flex-col py-8 space-y-12 items-center min-h-[100vh] w-full text-black'>
        <ResetPage />
        <div className='w-3/4 mx-auto text-3xl text-center font-semibold'>Contact Us</div>
            <div className='w-1/2 border border-gray-200'></div>
            <div className='w-3/4 grid grid-cols-1 lg:grid-cols-3 mx-auto min-h-[40vh] gap-8'>
                <div className='flex flex-col py-20 items-center space-y-6 bg-red-800 rounded-lg text-gray-100 transition-all duration-300 hover:-translate-y-2 third-group'>
                    <img className='w-12 h-12' src='../static/images/pin.png'></img>
                    <p className='text-xl font-bold'>ADDRESS</p>
                    <div className='flex flex-col items-center'>
                        <p>904 Fortune Center, 45A Block-6</p>
                        <p>PECHS, Sharah-e-Faisal</p>
                        <p>Karachi-75400 PAKISTAN</p>
                    </div>
                </div>
                <div className='flex flex-col py-20 items-center space-y-6 bg-red-800 rounded-lg text-gray-100 transition-all duration-300 hover:-translate-y-2 third-group'>
                    <img className='w-12 h-12' src='../static/images/phone.png'></img>
                    <p className='text-xl font-bold'>PHONE & FAX</p>
                    <div className='flex flex-col items-center'>
                        <p>Phone: +92-21-34547281</p>
                        <p>Fax: +92-21-34547282</p>
                    </div>
                </div>
                <div className='flex flex-col py-20 items-center space-y-6 bg-red-800 rounded-lg text-gray-100 transition-all duration-300 hover:-translate-y-2 third-group'>
                    <img className='w-12 h-12' src='../static/images/mail.png'></img>
                    <p className='text-xl font-bold'>EMAIL</p>
                    <a href='mailto:info@instecdigital.com' className='flex flex-col items-center'>
                        <p>info@instecdigital.com</p>
                    </a>
                </div>
            </div>
      </section>
  )
}

export default Contact
