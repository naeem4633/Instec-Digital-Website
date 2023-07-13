import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showTraining, setShowTraining] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [hoveredItem, setHoveredItem] = useState('');
    const [hoveredLink, setHoveredLink] = useState('/');
    const servicesRef = useRef(null);
    const trainingRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleTrainingClick = () => {
    setShowTraining(true);
    setShowServices(false);
  };

  const handleServicesClick = () => {
    setShowTraining(false);
    setShowServices(true);
  };

  const handleItemHover = (item, link) => {
    setHoveredItem(item);
    setHoveredLink(link);
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServices(false);
        setHoveredItem('CISA Training');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (trainingRef.current && !trainingRef.current.contains(event.target)) {
        setShowTraining(false);
        setHoveredItem('Information Security');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <section className='sticky top-0 w-full h-16 color-secondary text-white z-50'>
        <div className='w-full flex justify-between px-2'>
            <div>
              <img className='border border-white w-44 h-16 mr-4' src='' alt='logo'></img>
            </div>
            <div className='flex items-center'>
                <Link to={'/about-us'}>
                  <p className='hidden md:block p-4 hover:bg-red-800 cursor-pointer hover:text-white'>About</p>
                </Link>
                <p className='hidden md:block p-4 hover:bg-red-800 cursor-pointer hover:text-white' onClick={handleTrainingClick}>Trainings</p>
                <p className='hidden md:block p-4 hover:bg-red-800 cursor-pointer hover:text-white' onClick={handleServicesClick}>Services</p>
                <Link to={'/contact-us'}>
                  <p className='hidden md:block p-4 hover:bg-red-800 cursor-pointer hover:text-white'>Contact Us</p>
                </Link>
                <Link to={'/incident-response'}>
                  <p className='hidden md:block p-4 bg-red-800 hover:bg-gray-200 hover:text-black hover:scale-95 transition-all duration-300 cursor-pointer font-semibold'>Incident Response Help</p>
                </Link>
            </div>
            <div className='md:hidden flex items-center space-x-4 w-1/5 justify-end'>
                <img className='w-10 h-10 cursor-pointer' src='../static/images/header-menu.png' alt='menu' onClick={handleMenuClick}></img>
            </div>
        </div>

        {showMenu && (
        <div className='header-mobile md:hidden menu absolute right-0 w-full color-secondary text-white rounded'>
            <div className='flex flex-col items-center'>
                <div className='w-full flex flex-col space-y-4 text-center text-xl font-bold'>
                    <ul>
                        <li className='mx-auto w-3/4 p-6'>
                          <Link to={'/about-us'}>
                            <p>About</p>
                          </Link>
                        </li>
                        <div className='mx-auto w-3/4 border border-gray-400'></div>
                        <li className='mx-auto w-3/4 p-6'>
                            <p>Training</p>
                        </li>
                        <div className='mx-auto w-3/4 border border-gray-400'></div>
                        <li className='mx-auto w-3/4 p-6'>
                            <p>Services</p>
                        </li>
                        <div className='mx-auto w-3/4 border border-gray-400'></div>
                        <li className='mx-auto w-3/4 p-6'>
                        <Link to={'/contact-us'}>
                          <p>Contact Us</p>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )}

        {showServices && (
        <div className='services w-full color-secondary text-white drop-shadow-2xl' ref={servicesRef}>
          <div className='flex flex-row h-full'>
            <div className='w-1/4 flex flex-col justify-center p-4'>
              <Link to={'/services'} className='w-full p-8 flex flex-col items-center space-y-4 hover:-translate-y-3 transition-transform'>
                <p className='text-4xl cursor-pointer'>Services</p>
                <img className='w-20 h-20' src='../static/images/service.png' alt='Training' />
              </Link>
            </div>
            <div className='my-6 border border-gray-400'></div>
            <div className='w-1/4 flex flex-col p-8'>
              <ul className='header h-full'>
              <Link to={'/information-security'}>
                <li onMouseEnter={() => handleItemHover('Information Security', '/information-security')}>Information Security</li>
              </Link>
              <Link to={'/data-and-it-service-management'}>
                <li onMouseEnter={() => handleItemHover('Data and IT Service Management', '/data-and-it-service-management')}>Data and IT Service Management</li>
              </Link>
              <Link to={'/data-center-services'}>
                <li onMouseEnter={() => handleItemHover('Data Center Services', '/data-center-services')}>Data Center Services</li>
              </Link>
              <Link to={'/business-continuity'}>
                <li onMouseEnter={() => handleItemHover('Business Continuity', '/business-continuity')}>Business Continuity</li>
              </Link>
              <Link to={'/cloud-computing'}>
                <li onMouseEnter={() => handleItemHover('Cloud Computing', '/cloud-computing')}>Cloud Computing</li>
              </Link>
              <Link to={'/virtualization-and-clouds'}>
                <li onMouseEnter={() => handleItemHover('Virtualization & Clouds', '/virtualization-and-clouds')}>Virtualization &amp; Clouds</li>
              </Link>
              <Link to={'/web-design-development'}>
                <li onMouseEnter={() => handleItemHover('Web Design & Development', '/web-design-development')}>Web Design &amp; Development</li>
              </Link>
              </ul>
            </div>
            <div className='my-6 border border-gray-400'></div>
            <Link to={hoveredLink} className='w-1/4 flex flex-col p-8 ml-8'>
              <ul className='h-full space-y-8'>
                <p className='text-xl font-bold cursor-pointer'>{hoveredItem}</p>
                <button className='w-32 h-12 rounded text-white font-semibold bg-red-800 hover:bg-gray-200 hover:border-2 hover:border-red-800 hover:text-black hover:-translate-y-1 transition-transform tracking-wider'>Explore</button>              </ul>
            </Link>
          </div>
        </div>
        )}

        {showTraining && (
        <div className='training w-full color-secondary text-white drop-shadow-2xl' ref={trainingRef}>
            <div className='flex flex-row h-full'>
                <div className='w-1/4 flex flex-col justify-center p-4'>
                    <Link to={'/trainings'} className='w-full p-8 flex flex-col items-center space-y-4 hover:-translate-y-3 transition-transform'>
                        <p className='text-4xl cursor-pointer'>Trainings</p>
                        <img className='w-20 h-20' src='../static/images/training.png' alt='Training' />
                    </Link>
                </div>
                <div className='my-6 border border-gray-400'></div>
                <div className='w-1/4 flex flex-col p-8'>
                    <ul className='header h-full'>
                        <Link to={'/cisa-training'}>
                          <li onMouseEnter={() => handleItemHover('CISA Training', '/cisa-training')}>CISA Training</li>
                        </Link>
                        <Link to={'/cissp-training'}>
                          <li onMouseEnter={() => handleItemHover('CISSP Training', '/cissp-training')}>CISSP Training</li>
                        </Link>
                        <Link to={'/introduction-to-business-continuity-disaster-recovery'}>
                          <li onMouseEnter={() => handleItemHover('Business continuity and disaster recovery', '/introduction-to-business-continuity-disaster-recovery')}>Business continuity and disaster recovery</li>
                        </Link>
                        <Link to={'/itil-training'}>
                          <li onMouseEnter={() => handleItemHover('ITIL v3 Foundation Training', '/itil-training')}>ITIL v3 Foundation Training</li>
                        </Link>
                        <Link to={'/linux-training'}>
                          <li onMouseEnter={() => handleItemHover('Linux Training', '/linux-training')}>Linux Training</li>
                        </Link>
                    </ul>
                </div>
                <div className='my-6 border border-gray-400'></div>
                <Link to={hoveredLink} className='w-1/4 flex flex-col p-8 ml-8'>
                    <ul className='h-full space-y-8'>
                        <p className='text-xl font-bold cursor-pointer'>{hoveredItem}</p>
                        <button className='w-32 h-12 rounded text-white font-semibold bg-red-800 hover:bg-gray-200 hover:border-2 hover:border-red-800 hover:text-black hover:-translate-y-1 transition-transform tracking-wider'>Explore</button>
                    </ul>
                </Link>
            </div>
        </div>
        )}
    </section>
  )
}

export default Header
