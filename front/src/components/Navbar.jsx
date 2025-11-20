import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} alt="" className='w-36' /></Link>
      <ul className='sm:flex gap-5 text-sm text-gray-700 hidden'>

        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 group cursor-pointer"
        >
          <p>Home</p>
          <hr className="w-0 h-[2px] bg-gray-700 border-none transition-all duration-300 group-hover:w-2/4 " />
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

      <div className="flex items-center gap-6 relative">

        <img onClick={()=> setShowSearch(true)} src={assets.search_icon} alt="" className="w-5 cursor-pointer" />

        <div className="relative group">
          <img src={assets.profile_icon} alt="" className="w-5 cursor-pointer" />

          <div className="absolute top-full right-0 z-50 mt-2 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200">
            <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-white shadow-lg rounded-xl text-gray-600">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5" />

          <p className="absolute -right-2 -bottom-2 w-5 h-5 flex items-center justify-center 
       bg-black text-white rounded-full text-xs font-semibold">
            5
          </p>
        </Link>
        <img onClick={()=> setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden'/>
      </div>

      <div className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all duration-200 ${visible ? 'w-full' : 'w-0'} `}>
        <div className="flex flex-col text-gray-600">
          <div onClick={()=> setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180'/>
            <p className="">Back</p>
          </div>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border-b' to='/'>Home</NavLink>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border-b' to='/collection'>Collection</NavLink>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border-b' to='/about'>About</NavLink>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border-b' to='/contact'>Contact</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar
