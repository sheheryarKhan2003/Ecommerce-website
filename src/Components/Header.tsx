'use client';

import React from 'react';

const Header = () => {
  return (
    <div className="bg-purple-600 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-2 text-sm">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a href="mailto:mishakhan@gmail.com" className="hover:underline">
              mishakhan@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <a href="tel:+1234567890" className="hover:underline">
              (123) 456-7890
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <a href="#" className="hover:underline">
              English
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              USD
            </a>
          </div>
          <div className="flex gap-2">
            <a href="/login" className="hover:underline">
              Login
            </a>
            <span>|</span>
            <a href="/wishlist" className="hover:underline">
              Wishlist
            </a>
          </div>
          <a href="/cart" className="hover:underline">
            🛒
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
