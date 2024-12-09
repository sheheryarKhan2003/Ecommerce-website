// components/End.tsx

import React from "react";

const categories = [
  { id: 1, name: "Mini LCW Chair", price: "$56.00", isFeatured: true, img: "/chair1.png" },
  { id: 2, name: "Mini LCW Chair", price: "$56.00", isFeatured: false, img: "/chair2.png" },
  { id: 3, name: "Mini LCW Chair", price: "$56.00", isFeatured: false, img: "/chair3.png" },
  { id: 4, name: "Mini LCW Chair", price: "$56.00", isFeatured: false, img: "/chair4.png" },
];

const Endo: React.FC = () => {
  return (
    <div className="py-10 px-6 md:px-20 lg:px-32 bg-white">
      <h2 className="text-blue-900 font-bold text-center text-xl md:text-2xl lg:text-3xl">
        Top Categories
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative p-6 rounded-xl shadow-md bg-white ${
              category.isFeatured ? "ring-2 ring-purple-500" : ""
            }`}
          >
            <img
              src={category.img} // Replace with your actual image paths
              alt={category.name}
              className="w-full max-w-[150px] mx-auto object-contain"
            />
            {category.isFeatured && (
              <button className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-sm rounded">
                View Shop
              </button>
            )}
            <h3 className="mt-4 text-center text-gray-700 font-semibold">
              {category.name}
            </h3>
            <p className="text-center text-gray-500 mt-1">{category.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center space-x-2">
        <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default Endo;
