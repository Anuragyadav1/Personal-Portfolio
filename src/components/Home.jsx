
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from 'react-icons/md';
import profileImage from '../assets/my_prof.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full'>
        <div className='home-content-wrapper flex flex-col md:flex-row items-center md:items-start gap-8'>
          {/* Text content */}
          <div className='md:w-2/3 order-2 md:order-1 text-center md:text-left'>
            <p className='text-[#64ffda] font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6] mt-2'>
              Anurag Yadav
            </h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0] mt-2'>
              I'm a Full Stack Developer.
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] text-lg'>
              {/* I specialize in building exceptional digital experiences. Currently, I'm focused on
              building responsive full-stack web applications that deliver value and solve real-world problems. */}
              I'm a final-year CSE student at IIIT Sri City, passionate about building full-stack web applications.
            </p>
            
            <div className='flex gap-4 mt-2 justify-center md:justify-start'>
              <Link to="projects" smooth={true} duration={500}>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] transition-all duration-300 rounded'>
                  View Work
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </Link>
            </div>
            
            {/* Social icons for mobile */}
            <div className='flex justify-center md:hidden mt-6 space-x-4'>
              <a href='https://www.linkedin.com/in/anurag-yadav-39a7b9223/' target="_blank" rel="noreferrer" 
                 className='hover:scale-125 transition-transform duration-300 text-[#0A66C2] bg-gray-200 p-2 rounded-full'>
                <FaLinkedin size={24} />
              </a>
              <a href='https://github.com/Anuragyadav1' target="_blank" rel="noreferrer"
                 className='hover:scale-125 transition-transform duration-300 text-[#333333] bg-gray-200 p-2 rounded-full'>
                <FaGithub size={24} />
              </a>
              <a href='mailto:10anuragyadav2002@gmail.com'
                 className='hover:scale-125 transition-transform duration-300 text-[#EA4335] bg-gray-200 p-2 rounded-full'>
                <MdEmail size={24} />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className='order-1 md:order-2 md:w-1/3 flex justify-center'>
            <div className='w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-[#64ffda] overflow-hidden p-1 bg-[#112240] shadow-lg hover:shadow-[#64ffda]/30 transition-all duration-300 hover:scale-105'>
              <img src={profileImage} alt="Profile" className='w-full h-full object-cover rounded-full' />
            </div>
          </div>
        </div>
        
        {/* Social icons for desktop */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
              <a className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/anurag-yadav-39a7b9223/' target="_blank" rel="noreferrer">
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/Anuragyadav1' target="_blank" rel="noreferrer">
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4a7077]'>
              <a className='flex justify-between items-center w-full text-gray-300'
                href='https://leetcode.com/u/Anurag102002/' target="_blank">
                LeetCode <SiLeetcode size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4335]'>
              <a className='flex justify-between items-center w-full text-gray-300'
                href='mailto:10anuragyadav2002@gmail.com'>
                Email <MdEmail size={30} />
              </a>
            </li>
       
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
