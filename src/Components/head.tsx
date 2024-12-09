import React from "react";

const Head: React.FC = () => {
  return (
    <header className="bg-white py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-900">Hekto</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-pink-500 font-medium hover:text-pink-700 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            Pages
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            Products
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            Contact
          </a>
        </nav>

        {/* Search */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Head;
