import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-20 pt-14 pb-6 px-6 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm">

        <div>
          <img src={assets.logo} alt="DLX Logo" className="mb-5 w-36" />
          <p className="text-gray-600 leading-relaxed w-full md:w-4/5">
            DLX Shop brings you a tight lineup of shirts, t-shirts, and jeans built
            for everyday wear. Clean fits, solid quality, and modern styles—nothing
            extra, just pieces that look good and stay reliable.
          </p>

          <div className="flex gap-4 mt-5">
            <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">🛍️</div>
            <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">📸</div>
            <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">💬</div>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold mb-4">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer hover:text-black transition">Home</li>
            <li className="cursor-pointer hover:text-black transition">About Us</li>
            <li className="cursor-pointer hover:text-black transition">Delivery</li>
            <li className="cursor-pointer hover:text-black transition">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-semibold mb-4">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="cursor-pointer hover:text-black transition">+91-12345678</li>
            <li className="cursor-pointer hover:text-black transition">contact@dlx.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t pt-5 text-center text-gray-500 text-xs">
        © 2025 DLX Shop — All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
