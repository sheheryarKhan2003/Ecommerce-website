import React from "react";

const Finalo: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter Signup */}
        <div>
          <h2 className="text-lg font-bold mb-4">Hekto</h2>
          <form className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-auto"
            />
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 ml-0 md:ml-2">
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm">17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-bold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm">
        <p>©Webecy - All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Finalo;
