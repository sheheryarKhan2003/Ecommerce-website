import React from 'react';

const Hero = () => {
  return (
    <div className="bg-purple-50 py-16 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 relative">
          <p className="text-sm text-pink-500 font-semibold">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mt-2 leading-tight">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-md shadow-lg hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          {/* Chair Image */}
          <img
            src="sofa.png" // Replace with the chair image URL
            alt="Furniture"
            className="w-full max-w-md mx-auto md:mx-0"
          />

          {/* Discount Badge */}
          <div className="absolute top-6 right-6 md:right-12 bg-blue-500 text-white text-sm font-bold rounded-full px-4 py-2 shadow-md">
            50% Off
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Hero;
