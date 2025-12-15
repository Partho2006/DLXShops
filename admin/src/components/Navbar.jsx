import React from 'react';
import { assets } from '../assets/assets2';

const Navbar = ({ setToken }) => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4 sticky top-0 z-50">

      <div className="flex items-center">
        <img src={assets.logo} alt="Logo" className="w-24 md:w-28 lg:w-32 object-contain"/>
      </div>

      <div>
        <button onClick={() => setToken('')} className="bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

