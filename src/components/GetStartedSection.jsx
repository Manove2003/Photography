import React from "react";
import { MdEmail, MdLocationOn, MdCheckCircle } from "react-icons/md";

const GetStartedSection = () => {
  return (
    <div className="px-4 bg-white">
      <section className="max-w-6xl mx-auto bg-[#232323] text-white py-12 px-4 rounded-lg">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300">
            Get a specific quote or book a shoot today
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center md:px-8 px-4">
          {/* Left side: Contact Info */}
          <div className="w-full max-w-md mx-auto lg:mx-0 space-y-6 text-sm text-gray-300">
            <div className="pl-0 md:pl-8">
              <p className="font-semibold text-white text-lg mb-2">
                Contact Information
              </p>
              <p className="flex items-center gap-2">
                <MdEmail size={20} className="text-blue-400" />
                atlmediapros1@gmail.com
              </p>
              <p className="flex items-center gap-2 mt-2">
                <MdLocationOn size={20} className="text-red-400" />
                Atlanta, GA & Surrounding Areas
              </p>
            </div>

            <div className="pl-0 md:pl-8">
              <p className="font-semibold text-white text-lg mb-2">
                Why Choose ATL Media Pros?
              </p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <MdCheckCircle size={18} className="text-green-400" />
                  Fast turnaround times
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle size={18} className="text-green-400" />
                  Professional quality guaranteed
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle size={18} className="text-green-400" />
                  Experienced with Atlanta market
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle size={18} className="text-green-400" />
                  Trusted by top agents
                </li>
              </ul>
            </div>
          </div>

          {/* Right side: Form */}
          <div className="bg-white text-black p-4 md:p-8 rounded-lg shadow-md w-full max-w-md mt-8 md:mt-0 mx-auto lg:mx-0">
            <h3 className="text-center text-lg font-semibold mb-2">
              Get Your Quote
            </h3>
            <p className="text-center text-sm text-gray-600 mb-6">
              Tell us about your project and we’ll get back to you quickly
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Property location"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Bronze Package ($280)</option>
                <option>Gold Package ($380)</option>
                <option>Platinum Package ($500)</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
              >
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedSection;
