
import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const About = () => {
  return (
    <div name='about' className='w-full py-8 md:py-16 bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 border-[#64ffda]'>About</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-8'>
          {/* About me text */}
          <div className='about-text'>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#ccd6f6] mb-4'>Hi, I'm Anurag.</h2>
            <p className='text-[#8892b0] text-lg mb-4'>
              I'm a passionate full-stack developer who loves building web applications.
            </p>
            <p className='text-[#8892b0] text-lg mb-4'>
              With a strong foundation in frontend and backend, I create scalable and efficient solutions.
            </p>
            <p className='text-[#8892b0] text-lg'>
              I enjoy learning new technologies and building clean, user-friendly interfaces.
            </p>

          </div>
          
          {/* Services offered */}
          <div className='mt-4 md:mt-0'>
            <h2 className='text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-6'>What I do</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='service-card p-6 rounded-lg border border-[#233554] hover:border-[#64ffda] transition-all duration-300 bg-[#112240] group'>
                <FaCode className='text-[#64ffda] text-3xl mb-4 group-hover:scale-110 transition-all duration-300' />
                <h3 className='text-xl font-bold mb-2 text-[#ccd6f6]'>Web Development</h3>
                <p className='text-[#8892b0]'>Building modern, responsive websites with clean code and optimal performance.</p>
              </div>
              
              <div className='service-card p-6 rounded-lg border border-[#233554] hover:border-[#64ffda] transition-all duration-300 bg-[#112240] group'>
                <FaServer className='text-[#64ffda] text-3xl mb-4 group-hover:scale-110 transition-all duration-300' />
                <h3 className='text-xl font-bold mb-2 text-[#ccd6f6]'>Backend Development</h3>
                <p className='text-[#8892b0]'>Creating robust server-side applications with secure and scalable architecture.</p>
              </div>
              
              {/* <div className='service-card p-6 rounded-lg border border-[#233554] hover:border-[#64ffda] transition-all duration-300 bg-[#112240] group'>
                <FaMobileAlt className='text-[#64ffda] text-3xl mb-4 group-hover:scale-110 transition-all duration-300' />
                <h3 className='text-xl font-bold mb-2 text-[#ccd6f6]'>Responsive Design</h3>
                <p className='text-[#8892b0]'>Ensuring applications work seamlessly across all devices and screen sizes.</p>
              </div> */}
              
              <div className='service-card p-6 rounded-lg border border-[#233554] hover:border-[#64ffda] transition-all duration-300 bg-[#112240] group'>
                <FaDatabase className='text-[#64ffda] text-3xl mb-4 group-hover:scale-110 transition-all duration-300' />
                <h3 className='text-xl font-bold mb-2 text-[#ccd6f6]'>Database Design</h3>
                <p className='text-[#8892b0]'>Creating efficient data models and implementing optimal database solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
