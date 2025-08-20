import React from "react";
import house1 from '../assests/R1.png';
import house2 from '../assests/R2.png'
import house3 from '../assests/R3.png'
import house4 from '../assests/R4.png'
import house5 from '../assests/R5.png'
import house6 from '../assests/R6.png'

const GallerySection = () => {
  return (
    <section className="px-4 pt-4 pb-16  max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-3">Check Out Our Work</h2>
        <p className="text-gray-600 text-base sm:text-lg">Real Estate Photography Made Easy</p>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Column - 30% width */}
        <div className="lg:w-[30%] w-full flex flex-col gap-4">
          <img
            src={house1}
            alt="Left Column Image 1"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src={house2}
            alt="Left Column Image 2"
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Column - 70% width */}
        <div className="lg:w-[70%] w-full flex flex-col gap-4">
          {/* First Row in Right Column */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <img
                src={house3}
                alt="Right Image 1"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <img
                src={house4}
                alt="Right Image 2"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Second Row in Right Column */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <img
                src={house5}
                alt="Right Image 3"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <img
                src={house6}
                alt="Right Image 4"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mt-12">
        <button className="bg-[#ED1C24] text-white px-6 py-2 rounded transition hover:bg-red-600">
          See Our Packages
        </button>
        <button className="border border-[#ED1C24] text-[#ED1C24] px-6 py-2 rounded transition hover:bg-red-100">
          Talk To Expert
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
