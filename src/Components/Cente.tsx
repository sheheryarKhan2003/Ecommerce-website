import React from "react";

const Cente = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-purple-50 py-8 px-4">
      {/* Sofa Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="/sofaa.png" // Replace with the actual image path
          alt="Blue Sofa"
          className="w-3/4 md:w-2/3"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">
          Unique Features Of Latest & Trending Products
        </h2>
        <ul className="text-sm md:text-base text-gray-700 mb-6 space-y-2">
          <li className="flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            Arms, backs, and seats are structurally reinforced
          </li>
        </ul>
        <div>
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded hover:bg-pink-600">
            Add To Cart
          </button>
          <p className="text-gray-600 mt-2 font-semibold">B&B Italian Sofa - $32.00</p>
        </div>
      </div>
    </div>
  );
};

export default Cente;
