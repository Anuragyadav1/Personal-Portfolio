import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-scroll';
import ResumeButton from './ResumeButton';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);
  
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  return (
    <div className={shadow 
      ? 'fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f]/90 text-gray-300 z-50 transition-all ease-in-out duration-300 shadow-lg' 
      : 'fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f]/90 text-gray-300 z-50 transition-all ease-in-out duration-300'}>
      
      <div>
        <h1 className='logo-text font-bold text-2xl text-[#64ffda] cursor-pointer'>
          <span className='text-[#ccd6f6]'>A</span>Y.
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center space-x-2'>
        {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
          <li key={item} className='nav-item'>
            <Link to={item} smooth={true} duration={500} className='nav-link hover:text-[#64ffda] transition-colors duration-300'>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
        <li className='ml-4'>
          <ResumeButton />
        </li>
      </ul>

      {/* Hamburger Icon (for small devices) */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile Menu */}
      <div className={!nav 
        ? 'hidden' 
        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-all duration-500 ease-in-out z-40'}>
        
        {/* Close Icon (Cross) */}
        <div onClick={closeMenu} className='absolute top-4 right-6 cursor-pointer text-gray-300 hover:text-[#64ffda] transition-colors duration-300'>
          <FaTimes size={30} />
        </div>

        <ul className='text-center space-y-6 py-6'>
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
            <li key={item} className='py-2 text-4xl hover:text-[#64ffda] transition-colors duration-300'>
              <Link onClick={closeMenu} to={item} smooth={true} duration={500}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
          <li className='mt-6 flex justify-center'>
            <ResumeButton />
          </li>
        </ul>
        
        {/* Social Icons */}
        <div className='flex space-x-5 mt-6'>
          <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer" 
             className='p-3 rounded-full bg-[#0A66C2] hover:scale-110 transition-transform duration-300'>
            <FaLinkedin size={24} color="#fff" />
          </a>
          <a href='https://github.com/' target="_blank" rel="noreferrer"
             className='p-3 rounded-full bg-[#333333] hover:scale-110 transition-transform duration-300'>
            <FaGithub size={24} color="#fff" />
          </a>
          <a href='mailto:example@email.com'
             className='p-3 rounded-full bg-[#EA4335] hover:scale-110 transition-transform duration-300'>
            <MdEmail size={24} color="#fff" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
