// components/Center.tsx

import React from "react";

const End: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white py-10 px-6 md:px-20 lg:px-32">
      {/* Text Section */}
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-blue-900 font-bold text-xl md:text-2xl lg:text-3xl">
          Discount Item
        </h2>
        <div className="mt-2 text-pink-500 font-medium">
          <a href="#" className="hover:underline">Wood Chair</a> • 
          <a href="#" className="hover:underline ml-2">Plastic Chair</a> • 
          <a href="#" className="hover:underline ml-2">Sofa Collection</a>
        </div>
        <h3 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
          20% Discount Of All Products
        </h3>
        <p className="text-pink-500 mt-2 text-lg font-semibold">Eams Sofa Compact</p>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="text-blue-600 font-bold mr-2">✓</span> Material expose like metals
          </li>
          <li className="flex items-center">
            <span className="text-blue-600 font-bold mr-2">✓</span> Clear lines and geometric figures
          </li>
          <li className="flex items-center">
            <span className="text-blue-600 font-bold mr-2">✓</span> Simple neutral colours
          </li>
        </ul>
        <button className="mt-6 bg-pink-500 text-white font-semibold py-2 px-6 rounded hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0">
        <div className="relative rounded-full bg-pink-100 p-10">
          <img
            src="/uni.png" // Replace with actual image path
            alt="Chair"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default End;
