import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const ResumeButton = () => {
  return (
    <a
      href="/Anurag_Yadav_CV_04.pdf"
      className="flex items-center px-6 py-3 my-2 border border-[#64ffda] 
                 text-[#64ffda] opacity-40 cursor-not-allowed 
                 pointer-events-none"
      aria-disabled="true"
    >
      <FaFileDownload className="mr-2" />
      Resume
    </a>
  );
};

export default ResumeButton;