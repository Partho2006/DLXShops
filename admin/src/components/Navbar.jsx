import React from 'react'
import { assets } from '../assets/assets2'

const Navbar = () => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
  <img
    className="w-[max(20%,80px)]" src={assets.logo} alt=""
  />
  <button type="submit" className='bg-black hover:bg-black/80 text-white text-sm my-8 px-8 py-3 rounded-full duration-300'> Login </button>
</div>

  )
}

export default Navbar
