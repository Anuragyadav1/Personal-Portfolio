
import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt,
  FaJsSquare, FaPython, FaDatabase
} from 'react-icons/fa';
import { 
  SiCplusplus, SiC, SiTailwindcss, SiExpress, 
  SiMongodb, SiPostman, SiLeetcode
} from 'react-icons/si';

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#64ffda]'>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#e34c26]'><FaHtml5 /></div>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#264de4]'><FaCss3Alt /></div>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#f7df1e]'><FaJsSquare /></div>
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#61dafb]'><FaReact /></div>
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#38bdf8]'><SiTailwindcss /></div>
                  <p className='my-4'>Tailwind</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#3c873a]'><FaNodeJs /></div>
                  <p className='my-4'>Node.js</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-white'><SiExpress /></div>
                  <p className='my-4'>Express.js</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#4DB33D]'><SiMongodb /></div>
                  <p className='my-4'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#00599C]'><SiC /></div>
                  <p className='my-4'>C</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#044F88]'><SiCplusplus /></div>
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#3776AB]'><FaPython /></div>
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#336791]'><FaDatabase /></div>
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#F05032]'><FaGitAlt /></div>
                  <p className='my-4'>Git</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#FF6C37]'><SiPostman /></div>
                  <p className='my-4'>Postman</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <div className='flex justify-center text-4xl text-[#FFA116]'><SiLeetcode /></div>
                  <p className='my-4'>DSA</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
