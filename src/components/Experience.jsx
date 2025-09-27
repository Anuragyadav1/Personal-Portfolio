import React from 'react';
import { FaCalendarAlt, FaBriefcase, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <div name='experience' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-8 md:py-12'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#64ffda]'>Experience</p>
          <p className='py-6'>My recent work experience</p>
        </div>

        {/* Samunnati Experience */}
        <div className='bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-[#64ffda]/20 transition duration-300 mb-6'>
          <div className='flex justify-between items-start flex-wrap'>
            <h3 className='text-2xl font-bold text-[#ccd6f6]'>Software Engineer Intern</h3>
            <div className='flex items-center text-[#64ffda]'>
              <FaCalendarAlt className='mr-2' />
              <span>Aug 2025 – Present</span>
            </div>
          </div>

          <div className='flex items-center my-2 text-[#8892b0]'>
            <FaBriefcase className='mr-2' />
            <span>Samunnati</span>
          </div>

          <div className='flex items-center my-2 text-[#8892b0]'>
            <FaMapMarkerAlt className='mr-2' />
            <span>Chennai, India</span>
          </div>

          <p className='mt-4 text-[#8892b0]'>
            Developed and maintained scalable backend services and RESTful APIs using <b>TypeScript and NestJS</b>. 
            Designed efficient data models with <b>MySQL and MongoDB</b>, optimized queries, and collaborated with senior developers 
            during code reviews and debugging to improve performance.
          </p>

          <div className='mt-4 flex flex-wrap gap-2'>
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>TypeScript</span>
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>NestJS</span>
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>MySQL</span>
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>MongoDB</span>
          </div>
        </div>

        {/* Edunet Foundation Experience */}
        <div className='bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-[#64ffda]/20 transition duration-300'>
          <div className='flex justify-between items-start flex-wrap'>
            <h3 className='text-2xl font-bold text-[#ccd6f6]'>AI & Cloud Computing Intern</h3>
            <div className='flex items-center text-[#64ffda]'>
              <FaCalendarAlt className='mr-2' />
              <span>Jul 2024 – Aug 2024</span>
            </div>
          </div>

          <div className='flex items-center my-2 text-[#8892b0]'>
            <FaBriefcase className='mr-2' />
            <span>Edunet Foundation (in collaboration with AICTE)</span>
          </div>

          <div className='flex items-center my-2 text-[#8892b0]'>
            <FaMapMarkerAlt className='mr-2' />
            <span>Remote</span>
          </div>

          <p className='mt-4 text-[#8892b0]'>
            Built a <b>used car resale value prediction model</b> with 92% accuracy by processing 8,000+ records using 
            <b>Random Forest Regressor</b>. Designed a <b>Streamlit web app</b> for real-time car price estimation, handled missing 
            data with imputation, and implemented feature scaling to reduce prediction error by 18%.
          </p>

          {/* Certificate Link */}
          <div className='mt-4'>
            <a 
              href='https://drive.google.com/file/d/1JqYa0hSUUQ5YxmX-H7HMmmmuhiBw4Fii/view?usp=sharing' 
              target='_blank' 
              rel='noopener noreferrer'
              className='flex items-center text-[#64ffda] hover:underline transition duration-300'
            >
              <FaExternalLinkAlt className='mr-2' />
              View Certificate
            </a>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>Python</span>
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>AI</span>
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>Streamlit</span>
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>Machine Learning</span>
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>Cloud Computing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
