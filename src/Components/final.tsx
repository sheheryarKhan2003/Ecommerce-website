// components/Final.tsx

import React from "react";

const Final: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('Rectangle 102.png')" }}
    >
      {/* Overlay */}
      <div className="bg-white/80 py-12 px-6 md:px-16 lg:px-24 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-blue-900 font-bold text-lg md:text-2xl lg:text-3xl">
            Get Latest Update By Subscribe Our Newsletter
          </h2>

          {/* Button */}
          <button className="mt-6 bg-pink-500 text-white font-semibold py-2 px-6 md:py-3 md:px-10 rounded-lg hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Final;
