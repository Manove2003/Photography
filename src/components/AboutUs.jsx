import React from "react";
import "./AboutUs.css";
import House1 from '../assests/2.png';
import Drone from '../assests/3.png';
import House3 from '../assests/1.png';

const AboutUs = () => {
  return (
    <div className="bg-[#1C1A1A] text-white py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center relative">
        
        {/* Red vertical line was replaced by custom CSS arrow */}

        {/* Image Grid with red arrow line effect */}
   <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full image-grid-decorated">
  <img
    src={House1}
    alt="House 1"
    className="rounded-lg object-cover w-full h-full"
  />
  <img
    src={Drone}
    alt="Drone"
    className="rounded-lg object-cover w-full h-full"
  />
  <img
    src={House3}
    alt="House 3"
    className="rounded-lg object-cover col-span-2 w-full h-full"
  />
</div>


        {/* Text Content */}
     <div className="lg:w-1/2 w-full text-center lg:text-left">
  <h2 className="text-4xl font-bold mb-4">About Us</h2>
  <h3 className="text-lg font-semibold mb-4 text-gray-300">
    Professional Real Estate Media Experts
  </h3>
  <p className="mb-4 text-gray-400">
    Alt Media Pros is a trusted, on-demand real estate photography and media company dedicated to helping agents, brokers, and property managers elevate their listings with ease and professionalism.
  </p>
  <p className="mb-4 text-gray-400">
    Our services go beyond stunning HDR photos — we offer cinematic walkthrough videos, immersive 3D tours, detailed floor plans, cost-effective virtual staging, and fully licensed aerial drone coverage.
  </p>
  <p className="mb-6 text-gray-400">
    Fast, reliable, and always quality-focused — we deliver visual content that sells.
  </p>

  <div className="button-with-lines inline-block">
    <button className="bg-[#ED1C24] w-36 text-white px-5 py-2 rounded">About Us</button>
  </div>
</div>

      </div>
    </div>
  );
};

export default AboutUs;
