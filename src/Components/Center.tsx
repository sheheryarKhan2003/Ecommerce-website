import React from "react";

const Center = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-6">Latest Products</h2>

        {/* Categories */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <button className="bg-green-100 text-green-700 font-medium px-4 py-2 rounded-md hover:bg-green-200">
            New Arrival
          </button>
          <button className="text-gray-700 hover:text-blue-600 font-medium">
            Best Seller
          </button>
          <button className="text-gray-700 hover:text-blue-600 font-medium">
            Featured
          </button>
          <button className="text-gray-700 hover:text-blue-600 font-medium">
            Special Offer
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/image 1166.png"
              alt="Comfort Handy Craft"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Comfort Handy Craft
              </h3>
              <p className="text-gray-500 line-through">$65.00</p>
              <p className="text-lg font-bold text-pink-600">$42.00</p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src="/image 15.png"
                alt="Comfort Handy Craft"
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                Sale
              </span>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Comfort Handy Craft
              </h3>
              <p className="text-gray-500 line-through">$65.00</p>
              <p className="text-lg font-bold text-pink-600">$42.00</p>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/Frame 1.png"
              alt="Comfort Handy Craft"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Comfort Handy Craft
              </h3>
              <p className="text-gray-500 line-through">$65.00</p>
              <p className="text-lg font-bold text-pink-600">$42.00</p>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/image 23.png"
              alt="Comfort Handy Craft"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Comfort Handy Craft
              </h3>
              <p className="text-gray-500 line-through">$65.00</p>
              <p className="text-lg font-bold text-pink-600">$42.00</p>
            </div>
          </div>

          {/* Product Card 5 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/image 32 (1).png"
              alt="Comfort Handy Craft"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Comfort Handy Craft
              </h3>
              <p className="text-gray-500 line-through">$65.00</p>
              <p className="text-lg font-bold text-pink-600">$42.00</p>
            </div>
          </div>

          {/* Product Card 6 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/image 3 (1).png"
              alt="Comfort Handy Craft"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Comfort Handy Craft
              </h3>
              <p className="text-gray-500 line-through">$65.00</p>
              <p className="text-lg font-bold text-pink-600">$42.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Center;
