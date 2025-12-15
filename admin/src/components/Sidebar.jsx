import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets2'

const Sidebar = () => {
  return (
    <div className='w-[20%] min-h-screen border-r'>
      <div className="flex flex-col gap-4 pt-6 pl-[10%] text-[20px]">
        
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to="/add">
           <img className='w-5 h-5' src={assets.add_icon} alt="" />
           <p className="hidden sm:block text-xs md:text-sm lg:text-lg font-bold">Add Items</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to="/list">
           <img className='w-5 h-5' src={assets.order_icon} alt="" />
           <p className="hidden sm:block text-xs md:text-sm lg:text-lg font-bold">List Items</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to="/orders">
           <img className='w-5 h-5' src={assets.order_icon} alt="" />
           <p className="hidden sm:block text-xs md:text-sm lg:text-lg font-bold">Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
