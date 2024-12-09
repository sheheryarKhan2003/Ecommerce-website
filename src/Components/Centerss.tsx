import React from "react";

const Centerss = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">
          What Shopex Offer!
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <img
              src="/Group.png"
              alt="Free Delivery"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <img
              src="/cashback 1.png"
              alt="Secure Payment"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <img
              src="/premium-quality 1.png"
              alt="Best Quality"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <img
              src="/hours.png"
              alt="24/7 Support"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Centerss;
