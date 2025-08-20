import React, { useState } from "react";
import logoimg from "../assests/logo.png"
import houseBg from '../assests/hero1.png';
import img1 from '../assests/hero2.png';
import img2 from '../assests/hero3.png';


const RealEstateHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${houseBg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-45"></div>

      {/* New Modern Navbar */}
      <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 w-[95%] max-w-5xl bg-white bg-opacity-90 rounded-xl shadow-md">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoimg} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-black text-sm font-medium">
            <a href="#" className="hover:text-gray-600">About Us</a>
            <a href="#" className="hover:text-gray-600">Pricing</a>
            <a href="#" className="hover:text-gray-600">Commercial</a>
            <div className="relative group">
              <button className="hover:text-gray-600">Home Services ▾</button>
              <div className="absolute hidden group-hover:block mt-2 bg-white text-black rounded shadow-md py-2 w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Photography</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Videography</a>
              </div>
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <button className="bg-black text-white text-sm px-6 py-2 rounded-lg font-medium">
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-2xl">☰</button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 text-sm text-black font-medium">
            <a href="#" className="block py-2">About Us</a>
            <a href="#" className="block py-2">Pricing</a>
            <a href="#" className="block py-2">Commercial</a>
            <div className="py-2">
              <span className="block pb-1 font-semibold">Home Services</span>
              <a href="#" className="block pl-4 py-1">Photography</a>
              <a href="#" className="block pl-4 py-1">Videography</a>
            </div>
            <button className="mt-2 bg-black text-white w-full py-2 rounded-lg">
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40  text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold max-w-xl font-manrope font-800 leading-tight">Real Estate Media</h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl">
              Where Every Home Shines Through the Lens<br />
              Your Secret Weapon for Photos That Turn Clicks Into Closing
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-red-600 hover:bg-[#ED1C24] text-white px-6 py-3 rounded font-medium">
                Schedule Shoot
              </button>
              <button className="bg-white text-[#ED1C24] px-6 py-3 rounded font-medium">
                Talk to expert
              </button>
            </div>
          </div>

          {/* Floating Images */}
          <div className="flex flex-col space-y-16 mb-4 md:mb-0 items-center">
            <img src={img1} alt="House1" className="w-32 h-36 rounded-lg shadow-lg border-2 border-white transform -rotate-9" />
            <img src={img2} alt="House2" className="w-32 h-36 rounded-lg shadow-lg border-2 border-white transform rotate-18" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default RealEstateHero;