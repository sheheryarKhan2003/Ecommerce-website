import React from "react";

const Heroo = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* First Product */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/image 1168.png"
              alt="Cantilever Chair 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Cantilever Chair
              </h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-pink-600">$42.00</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>

          {/* Second Product */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/image 1.png"
              alt="Cantilever Chair 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Cantilever Chair
              </h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-pink-600">$42.00</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>

          {/* Third Product */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/image 1169.png"
              alt="Cantilever Chair 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Cantilever Chair
              </h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-pink-600">$42.00</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>

          {/* Fourth Product */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/image 3.png"
              alt="Cantilever Chair 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Cantilever Chair
              </h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-pink-600">$42.00</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroo;
