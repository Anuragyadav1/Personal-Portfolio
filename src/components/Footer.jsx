import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] text-gray-300 py-6 mt-6 sm:mt-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Left Section - Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Anurag Yadav. All rights reserved.</p>

        {/* Right Section - Social Links */}
        {/* <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-[#64ffda]">Facebook</a>
          <a href="#" className="hover:text-[#64ffda]">Twitter</a>
          <a href="#" className="hover:text-[#64ffda]">Instagram</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
