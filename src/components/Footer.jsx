import React from 'react';
import logo from '../assests/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white  px-4 md:px-10">
      <div className="max-w-7xl mx-auto py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Logo */}
        <div className="flex justify-center sm:justify-start">
          <img src={logo} alt="ATL Media Pros Logo" className="h-10" />
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm text-gray-800 font-medium text-center">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">About Us</li>
          <li className="hover:text-red-500 cursor-pointer">Services</li>
          <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-gray-200 pt-4 pb-6 text-center text-sm text-gray-500 max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-2 px-2">
        <p>© 2025 ATL Real Estate. All rights reserved.</p>
        <p>
          <a href="#" className="hover:underline">Terms & Conditions</a> | <a href="#" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
