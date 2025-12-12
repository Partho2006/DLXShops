import React from 'react'
import { assets } from '../assets/assets2'

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="" />
      <button>Logout</button>
    </div>
  )
}

export default Navbar
