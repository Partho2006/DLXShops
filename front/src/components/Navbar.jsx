import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} alt="" className='w-36' />
      <ul className='sm:flex gap-5 text-sm text-gray-700'>

        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 group cursor-pointer"
        >
          <p>Home</p>
          <hr className="w-0 h-[2px] bg-gray-700 border-none transition-all duration-300 group-hover:w-2/4" />
        </NavLink>

        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 group cursor-pointer"
        >
          <p>Collection</p>
          <hr className="w-0 h-[2px] bg-gray-700 border-none transition-all duration-300 group-hover:w-2/4" />
        </NavLink>

        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 group cursor-pointer"
        >
          <p>About</p>
          <hr className="w-0 h-[2px] bg-gray-700 border-none transition-all duration-300 group-hover:w-2/4" />
        </NavLink>

        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 group cursor-pointer"
        >
          <p>Contact</p>
          <hr className="w-0 h-[2px] bg-gray-700 border-none transition-all duration-300 group-hover:w-2/4" />
        </NavLink>


      </ul>
    </div>
  )
}

export default Navbar
