import React from 'react';
import houseSample from '../assests/newimage.png';
import avatar1 from '../assests/p1.jpg';
import avatar2 from '../assests/p2.jpg';
import avatar3 from '../assests/p3.jpg';
import avatar4 from '../assests/p4.jpg';
import logo1 from '../assests/Shape.jpg';
import logo2 from '../assests/Shape1.jpg';
import logo3 from '../assests/Shape3.jpg';

export const SecondComp = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Centered heading with limited width */}
        <h2 className="text-5xl font-semibold font-manrope leading-tight text-center mx-auto max-w-lg mb-16">
          Why Choose ALT Media Pros
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          {/* Left Text */}
          <div className="flex flex-col justify-center h-full space-y-6 text-center sm:text-left items-center sm:items-start">
            <div>
              <h3 className="text-xl font-semibold">Show You The Quality</h3>
              <p className="mt-2 text-gray-600">
                At Alt Media Pros, we specialize in high-impact real estate media that helps agents,
                brokers, and property managers stand out in a competitive market. Our focus is on
                delivering quality, speed, and results — every time.
              </p>
            </div>
            <button className="bg-[#ED1C24] w-40 text-white px-5 py-2 rounded">About Us</button>

            <div className="pt-10">
              <p className="font-medium text-sm text-gray-700">Our Partner:</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-2 text-gray-600">
                <span className="flex items-center gap-2">
                  <img src={logo1} alt="Polymath" className="w-5 h-5" />Polymath
                </span>
                <span className="flex items-center gap-2">
                  <img src={logo2} alt="Boltshift" className="w-5 h-5" />Boltshift
                </span>
                <span className="flex items-center gap-2">
                  <img src={logo3} alt="Quotient" className="w-5 h-5" />Quotient
                </span>
              </div>
            </div>
          </div>

          {/* Center Image */}
    <div className="flex justify-center items-center h-full">
<img
  src={houseSample}
  alt="House"
  className="rounded-xl shadow-md w-full max-w-sm h-[90%] object-cover"
/>

</div>


          {/* Right Features */}
          <div className="flex flex-col justify-center h-full space-y-6 text-center sm:text-left items-center sm:items-start">
            <div className="border-b border-[#484848]">
              <h4 className="text-lg font-semibold">Premium Real Estate Media</h4>
              <p className="text-[#696969] text-[14px] pb-2">
                We provide stunning photography, cinematic video tours, drone footage, and 3D
                walkthroughs — all designed to showcase your listings in the best light.
              </p>
            </div>
            <div className="border-b border-[#484848]">
              <h4 className="text-lg font-semibold">Trusted Local Experts</h4>
              <p className="text-[#696969] text-[14px] pb-2">
                Our network of experienced, professionally vetted photographers ensures your
                property is captured with precision and local market insight.
              </p>
            </div>
            <div className="border-b border-[#484848]">
              <h4 className="text-lg font-semibold">Quick Turnaround, Big Impact</h4>
              <p className="text-[#696969] text-[14px] pb-2">
                Time is money. That’s why we deliver all your visual content within 24 hours —
                helping you list faster, attract more buyers, and close deals quicker.
              </p>
            </div>
            <div className="w-full flex flex-col items-center sm:items-start">
              <p className="text-sm font-medium text-gray-700 mb-2">Reviews:</p>
              <div className="flex items-center justify-center sm:justify-start -space-x-2">
                <img src={avatar1} alt="user1" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src={avatar2} alt="user2" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src={avatar3} alt="user3" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src={avatar4} alt="user4" className="w-8 h-8 rounded-full border-2 border-white" />
                <span className="ml-6 text-gray-700 text-sm font-semibold">
                  4.9 <br />Customer Ratings
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
