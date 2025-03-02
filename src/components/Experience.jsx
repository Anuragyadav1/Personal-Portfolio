
import React from 'react';
import { FaCalendarAlt, FaBriefcase, FaMapMarkerAlt,  FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <div name='experience' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-8 md:py-12'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#64ffda]'>Experience</p>
          <p className='py-6'>My recent work experience</p>
        </div>

        <div className='bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-[#64ffda]/20 transition duration-300'>
          <div className='flex justify-between items-start flex-wrap'>
            <h3 className='text-2xl font-bold text-[#ccd6f6]'>Emerging Technologies (AI & Cloud) Intern</h3>
            <div className='flex items-center text-[#64ffda]'>
              <FaCalendarAlt className='mr-2' />
              <span>July 08 - August 05, 2024</span>
            </div>
          </div>
          
          <div className='flex items-center my-2 text-[#8892b0]'>
            <FaBriefcase className='mr-2' />
            <span>Edunet Foundation in collaboration with AICTE</span>
          </div>
          
          <div className='flex items-center my-2 text-[#8892b0]'>
            <FaMapMarkerAlt className='mr-2' />
            <span>Remote</span>
          </div>
          
          <p className='mt-4 text-[#8892b0]'>
            I successfully completed a 4-week internship in Emerging Technologies (AI & Cloud), leveraging IBM Cloud Platform and SkillsBuild.
            This internship provided me with hands-on experience in AI and Cloud technologies, enhancing my technical skills and problem-solving abilities.
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
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>IBM Cloud</span>
            <span className='bg-[#172a45] px-3 py-1 rounded text-sm text-[#64ffda]'>Cloud Computing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
