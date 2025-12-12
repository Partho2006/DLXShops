import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route  } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <hr />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-800 text-base">
          <Routes>
            
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
