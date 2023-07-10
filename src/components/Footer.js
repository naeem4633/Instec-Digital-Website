import React from 'react'

const Footer = () => {
  return (
    <div>
        <section className='relative bottom-0 w-full bg-gray-800 text-gray-200 h-[10vh]'>
            <div className='mx-auto w-3/4 h-full flex flex-row justify-between items-center'>
                <div className='text-sm'>
                    <p>© 2023 Insec Digital Systems™. All Rights Reserved</p>
                </div>
                <div className='flex space-x-4'>
                    <a href='https://www.linkedin.com/company/instec-digital-systems/' className='transition-transform hover:-translate-y-1'>
                        <img className='w-4 h-4' src='../static/images/linkedin.png'></img>
                    </a>
                    <a href='mailto:info@instecdigital.com' className='transition-transform hover:-translate-y-1'>
                        <img className='w-4 h-4' src='../static/images/email.png'></img>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
