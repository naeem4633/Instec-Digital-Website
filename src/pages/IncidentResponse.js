import React from 'react'
import { Link } from 'react-router-dom'
import Cover from '../components/Cover'

const IncidentResponse = () => {
  return (
    <section className='flex flex-col pb-8 space-y-8 items-center min-h-[150vh] w-full text-white'>
        <div className='w-full h-[150vh]'>
          <img src='../static/images/gradient-2.png' className='w-full h-full'></img>
        </div>
        <div className='w-3/4 flex flex-col mx-auto space-y-[5vh] p-8 text-gray-200 -translate-y-[140vh]'>
            <div className='w-full flex flex-row p-16 bg-tranparent items-start rounded tracking-wider '>
                <div className='w-1/2 flex flex-row justify-start space-y-6 items-start'>
                    <div className='w-3/4 space-y-8'>
                        <img className='w-16 h-16' src='../static/images/warning.png'></img> 
                        <p className='text-left text-4xl font-semibold'>Incident Response Assistance</p>
                        <p className='text-lg text-left'>Need immediate assistance for a possible incident or security breach? You're in the right place.</p>
                        <p className='text-lg text-left'>INSTEC has been the first call for organizations around the world that are actively at risk from the most sophisticated cyber threats.</p>
                        <p className='text-lg text-left'>If you suspect an incident or are experiencing a breach, complete the form or call us directly:</p>
                        <p className='text-lg text-left'>PK: +92-21-34547281</p>
                        <p className='text-lg text-left'>You can also email our incident response team at info@instecdigital.com.</p>
                        <p className='text-lg text-left'>We're always here to help.</p>
                    </div>
                </div>
                <div className='w-1/2 h-full justify-start flex flex-col text space-y-4 border-y-0 border-r-0 p-8'>
                    <form className='w-full flex flex-col space-y-4'>
                        <input className='p-3 rounded border border-white bg-transparent' placeholder='First Name'></input>
                        <input className='p-3 rounded border border-white bg-transparent' placeholder='Last Name'></input>
                        <input className='p-3 rounded border border-white bg-transparent' placeholder='Email Address'></input>
                        <input className='p-3 rounded border border-white bg-transparent' placeholder='Company Name'></input>
                        <input className='p-3 rounded border border-white bg-transparent' placeholder='Phone Number'></input>
                        <input className='p-3 rounded border border-white bg-transparent' placeholder='Job Title'></input>
                        <input className='p-3 rounded border border-white bg-transparent' placeholder='Country'></input>
                        <textarea className='h-32 p-3 rounded border border-white bg-transparent' placeholder='Questions or Comments'></textarea>
                        <div className='flex flex-row items-start p-2 space-x-4'>
                            <input className='w-5 h-5 rounded' type='checkbox'></input>
                            <p className='text-sm'>Sign me up to receive news, product updates, event information, and promotional emails.</p>
                        </div>
                        <div className='bg-gray-100 w-3/5 justify-between text-black font-semibold flex flex-row p-4 items-center tracking-tight rounded'>
                            <div className='flex flex-row space-x-2 items-center'>
                                <input className='rounded w-6 h-6' type='checkbox'></input>
                                <p className=''>I'm not a Robot</p>
                            </div>
                            <img className='w-12 h-12' src='../static/images/capcha-image.png'></img>
                        </div>
                        <div className='cursor-pointer p-4 border rounded w-full bg-red-800 text-white font-semibold hover:bg-gray-200 hover:scale-95 transition-all duration-300 hover:text-black hover:font-bold'>
                            <p className='text-center'>Contact INSTEC</p>
                        </div>
                    </form>
                </div>
            </div>
            <Link to={'/contact-us'} className='mx-auto cursor-pointer p-4 border rounded w-1/2 bg-red-800 text-white font-semibold hover:bg-white transition-all duration-300 hover:text-black hover:font-bold hover:border hover:border-red-800'>
                <p className='text-center'>Contact Information</p>
            </Link>
        </div>
    </section>
  )
}

export default IncidentResponse
