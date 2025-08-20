import React,{useState,useRef } from "react";
import house1 from '../assests/i1.png';
import house2 from '../assests/i2.png';
import house3 from '../assests/i3.png';
import house4 from '../assests/i4.png';
import house5 from '../assests/i5.png';
import house6 from '../assests/i6.png';

import d1 from '../assests/d1.png'
import d2 from '../assests/d2.png'
import d3 from '../assests/d3.png'

import t1 from '../assests/t1.png'
import t2 from '../assests/t2.png'
import t3 from '../assests/t3.png'

import v1 from '../assests/v1.png'
import v2 from '../assests/v2.png'

import threedvideo2 from '../assests/videonew.mp4'

import dtour from "../assests/3dTour.png"

const packages = [
  {
    title: "Bronze",
    price: "$280",
    features: [
      "20 Interior and Exterior Photos",
      "6 Drone Photos",
      "Schematic Floor Plan with Room Measurements",
    ],
    btnStyle: "border border-[#ED1C24] text-[#ED1C24] hover:bg-red-50",
  },
  {
    title: "Gold",
    price: "$550",
    features: [
      "Everything in the Free plan, plus",
      "30 Interior and Exterior Photos",
      "Schematic Floor Plan with Room Measurements",
      "3D Floor Plan Version",
      "Zillow 3D Floor Plan",
      "Walkthrough Social Media Reel",
    ],
    highlight: true,
    btnStyle: "bg-[#ED1C24] text-white hover:bg-red-700",
  },
  {
    title: "Platinum",
    price: "$865",
    features: [
      "Everything in the Pro plan, plus",
      "30 Interior and Exterior Photos",
      "60-Second Cinematic Video",
      "Matterport 3D Tour",
      "Drone Photos",
      "Schematic Floor Plan with 3D Version",
      "2 Virtual Twilight Photos",
    ],
    btnStyle: "border border-[#ED1C24] text-[#ED1C24] hover:bg-red-50",
  },
];
const packages2 = [
  {
    title: "Gold",
    price: "$250",
    features: [
      "2 professional headshot edits",
      "1 look photoshoot",
      "1 Professional retouching",
       "High-resolution delivery"
    ],
    btnStyle: "bg-white text-black border border-gray-300 hover:bg-gray-100",
    highlight: false
  },
  {
    title: "Platinum",
    price: "$350",
    features: [
      "2 professional headshot edits",
      "2 looks photoshoot",
      "1 video reel about yourself",
      "2 Professional retouching",
      "High-resolution delivery"

    ],
    btnStyle: "bg-[#ED1C24] text-white hover:bg-red-700",
    highlight: true,
    popular: true
  },
  {
    title: "Diamond",
    price: "$999.99",
    originalPrice: "$1500",
    features: [
      "2 professional headshots edit",
      "3 look photo shoot",
      "5 vertical video for social media reels",
      "3 Professional retouching",
      "High-resolution delivery"

    ],
    btnStyle: "bg-white text-black border border-gray-300 hover:bg-gray-100",
    highlight: false
  }
];



const PhotoPackages = () => {

  const videoRef = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);

   const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying1(true);
      } else {
        videoRef.current.pause();
        setIsPlaying1(false);
      }
    }
  };
      const images = [house1, house2, house3, house4, house5, house6];
      const images3 = [d1, d2, d3];
      const imagest=[t1,t2,t3];


       const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Photo Media packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border ${
                pkg.highlight ? "border-[#ED1C24]" : "border-gray-300"
              } rounded-lg p-6 shadow-sm transition hover:shadow-md flex flex-col`}
            >
              <h3 className="text-xl font-bold mb-2 text-left">{pkg.title}</h3>
              <p className="text-2xl font-semibold mb-6 pb-2 text-left border-b-2 border-[#D9D9D9]">
                {pkg.price}
              </p>
              <ul className="space-y-3 text-start mb-6">
                {pkg.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm break-words"
                  >
                    <span className="bg-[#FF8E93] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm  shrink-0">
                      ✓
                    </span>
                    <span className="break-words">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-md font-medium transition  ${pkg.btnStyle}`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
<section className="py-16 px-4 bg-white text-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Agent Media Branding Kit Packages
    </h2>
    <p className="text-base md:text-xl mb-12">
      Professional headshots and personal branding content to elevate your real estate business
    </p>

    <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages2.map((pkg, idx) => (
        <div
          key={idx}
          className={`relative border ${
            pkg.highlight ? "border-[#ED1C24]" : "border-gray-300"
          } rounded-lg p-6 pt-10 shadow-sm transition hover:shadow-md flex flex-col`}
        >
          {/* MOST POPULAR BADGE */}
          {pkg.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ED1C24] text-white text-xs font-semibold px-4 py-2 rounded-md shadow-md z-10">
              Most Popular
            </div>
          )}

          <h3 className="text-xl font-semibold mb-2 text-center">{pkg.title}</h3>
          <p className="text-2xl font-bold mb-6 pb-2 text-center">
            {pkg.price}{" "}
            {pkg.originalPrice && (
                
              <span className="text-sm block text-gray-400 line-through ml-2">
                {pkg.originalPrice}
              </span>
            )}
          </p>

          <ul className="space-y-3 text-start mb-6">
            {pkg.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm break-words"
              >
                <span className="text-[#00C950] rounded-full w-6 h-6 flex items-center justify-center text-sm shrink-0">
                  ✓
                </span>
                <span className="break-words">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-2 px-4 rounded-md font-medium transition ${pkg.btnStyle}`}
          >
            {pkg.title === "Gold"
              ? "Choose Gold"
              : pkg.title === "Platinum"
              ? "Choose Platinum"
              : "Choose Diamond"}
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

   <section className="px-4 py-16  bg-white text-center">
     <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-manrope font-semibold mb-6">
          A La Carte Services – Images + A Floor Plan for Every Shoot
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          We offer simple flat rate pricing for our real estate images.{' '}
          <strong>For our 25 photos we charge $190</strong> and,{' '}
          <strong>for 40 photos we charge $220</strong>
        </p>
        </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={img}
                alt={`House ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-4  bg-white text-center">
     <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-manrope font-semibold mb-6">
    Drone Photos
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          <strong>We charge just $120 for our 6 drone photo package .</strong>
 Our photographers are FAA Part 107 Certified so you can rest
easily knowing you will not only get high quality drone photos, but also legal drone photos!
        </p>
        </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images3.map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={img}
                alt={`House ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

       <section className="px-4 my-20  bg-white text-center">
     <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-manrope font-semibold mb-6">
    Twilight & Virtual Twilight Photos
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
 We offer both standard twilight photos (taken at dusk) and virtual twilight photos (daylight photos edited to resemble dusk photos).
          <strong>Our virtual twilight photo package is $125 for 3 photos.</strong>

</p>

        </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imagest.map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={img}
                alt={`House ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>


  <section className=" px-4  bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-manrope font-semibold mb-4">Videos</h2>
        <p className="text-gray-700 text-base max-w-3xl mx-auto">
          Listing videos are a great way to bring a listing to life and is a great social media asset!
          <span className="font-semibold">
            Our 60 second videos, which include both standard and drone footage, are just $275.
          </span>{" "}
          <span className="font-semibold">
            We also offer vertical video for Instagram & FB reels – these videos are $150.
          </span>
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Video 1 */}
          <div className="relative">
            <img
              src={v1}
              alt="House Exterior"
              className="w-full h-auto rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/70 rounded-full p-4 hover:bg-white">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Video 2 */}
          <div className="relative">
            <img
              src={v2}
              alt="Interior View"
              className="w-full h-auto rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/70 rounded-full p-4 hover:bg-white">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
          <div className="max-w-5xl mx-auto text-center py-20">
        <h2 className="text-4xl font-manrope font-semibold mb-4">3D Tours</h2>
        <p className="text-gray-700 text-base max-w-3xl mx-auto">
         There's nothing quite like a 3D tour when it comes to assets a prospective buyer will love, but not only that, 3D tours
are a great tool to show your sellers to win more listings! 
          <span className="font-semibold">
 Our 3D tours start at just $190!
          </span>{" "}
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Video 1 */}
           <div className="relative w-full "> {/* set height as needed */}
      {isPlaying ? (
        // Show iframe when play clicked
        <iframe
          src="https://my.matterport.com/show/?m=75qbXX1MCEb"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full rounded-md"
          title="3D Tour"
        />
      ) : (
        // Show thumbnail + play button
        <div className="relative w-full h-full">
          {/* Background image */}
      <iframe
  src="https://my.matterport.com/show/?m=75qbXX1MCEb"
  frameBorder="0"
  allowFullScreen
  className="w-full h-full rounded-md"
/>


          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="bg-white/70 rounded-full p-4 hover:bg-white"
            >
              <svg
                className="w-8 h-8 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
          {/* Video 2 */}
    <div className="relative">
      <video
        ref={videoRef}
        src={threedvideo2}
        controls
        autoPlay={false}
        muted
        loop
        className="w-full h-full rounded-md"
      >
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handlePlayPause}
          className="bg-white/70 rounded-full p-4 hover:bg-white"
        >
          {isPlaying1 ? (
            // Pause icon
            <svg
              className="w-8 h-8 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            // Play icon
            <svg
              className="w-8 h-8 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
        </div>
             <p className="text-gray-700 text-base max-w-3xl mx-auto pt-8">
 We also provide more than just the standard services that most real estate media companies offer. From floorplans & virtual staging.       </p>
      <div className="flex justify-center mt-8">
  <button className="bg-[#ED1C24] text-white px-6 py-3 rounded-md  transition">
    Explore Our All Services
  </button>
</div>
      </div>
      

    </section>

    </>
  );
};

export default PhotoPackages;
