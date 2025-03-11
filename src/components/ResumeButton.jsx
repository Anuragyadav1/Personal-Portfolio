
import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const ResumeButton = () => {
  return (
    <a 
      href="/Anurag_resume.pdf" 
      download 
      className="flex items-center px-6 py-3 my-2 border-[#64ffda] text-[#64ffda] hover:bg-[#dae7e3] hover:bg-opacity-10"
    >
      <FaFileDownload className="mr-2" />
      Resume
    </a>
  );
};

export default ResumeButton;
