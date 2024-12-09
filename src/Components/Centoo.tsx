import React from 'react';

const Centoo = () => {
  const sideProducts = [
    { id: 1, name: "Executive Seat chair", price: "$32.00", image: "/chair11.png" },
    { id: 2, name: "Executive Seat chair", price: "$32.00", image: "/chair22.png" },
    { id: 3, name: "Executive Seat chair", price: "$32.00", image: "/chair33.png" },
  ];

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Block */}
      <div className="bg-pink-100 rounded-lg p-6 flex flex-col items-center justify-between">
        <h2 className="text-xl font-bold text-indigo-800 mb-4 text-center">
          23% off in all products
        </h2>
        <img src="/che1.png" alt="Product" className="w-2/3 h-auto mb-4" />
        <a href="#" className="text-pink-500 font-medium underline">
          Shop Now
        </a>
      </div>

      {/* Center Block */}
      <div className="bg-blue-100 rounded-lg p-6 flex flex-col items-center justify-between">
        <h2 className="text-xl font-bold text-indigo-800 mb-4 text-center">
          23% off in all products
        </h2>
        <img
          src="/che.png"
          alt="Product"
          className="w-full h-auto border-2 border-pink-500 rounded-lg"
        />
        <a href="#" className="text-pink-500 font-medium underline mt-4">
          View Collection
        </a>
      </div>

      {/* Right Block */}
      <div>
        {sideProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center mb-4 bg-gray-50 rounded-lg shadow p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <span className="text-gray-600">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Centoo;
