import React from 'react';

const Cento = () => {
  const products = [
    { id: 1, name: "Cantilever chair", price: "$26.00", oldPrice: "$42.00", image: "/chair1.png" },
    { id: 2, name: "Cantilever chair", price: "$26.00", oldPrice: "$42.00", image: "/chair2.png" },
    { id: 3, name: "Cantilever chair", price: "$26.00", oldPrice: "$42.00", image: "/chair3.png" },
    { id: 4, name: "Cantilever chair", price: "$26.00", oldPrice: "$42.00", image: "/chair4.png" },
  ];

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-indigo-800">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-green-600 font-bold">{product.price}</span>
              <span className="text-gray-500 line-through">{product.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cento;
