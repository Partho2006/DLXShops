import React from 'react'
import { assets } from '../assets/assets2'

const Add = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className="mb-2 font-bold">Upload Image</p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className='w-25 ' src={assets.upload_area} alt="" />
            <input type="file" id='image1' hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-25 ' src={assets.upload_area} alt="" />
            <input type="file" id='image2' hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-25 ' src={assets.upload_area} alt="" />
            <input type="file" id='image3' hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-25 ' src={assets.upload_area} alt="" />
            <input type="file" id='image4' hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2 font-bold">Product Name</p>
        <input className='w-full max-w-500 px-3 py-2' type="text" name="" id="" placeholder='Type here' required />
      </div>

      <div className="w-full">
        <p className="mb-2 font-bold">Product Description</p>
        <textarea className='w-full max-w-500 px-3 py-2' type="text" name="" id="" placeholder='Write content here' required />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">

        <div className="w-full">
          <p className="mb-2 font-bold">Product Category</p>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black focus:border-black transition">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="w-full">
          <p className="mb-2 font-bold">Sub Category</p>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black focus:border-black transition">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winter">Winter</option>
          </select>
        </div>

        <div className="w-full">
          <p className="mb-2 font-bold">Product Price (₹)</p>
          <input
            type="number"
            placeholder="25"
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>
      </div>

      <div className="">
        <p className="mb-2 font-bold">Product Sizes</p>

        <div className="flex gap-3">
          <div className="">
            <p className="bg-slate-300 px-3 py-1 cursor-pointer">S</p>
          </div>
          <div className="">
            <p className="bg-slate-300 px-3 py-1 cursor-pointer">M</p>
          </div>
          <div className="">
            <p className="bg-slate-300 px-3 py-1 cursor-pointer">L</p>
          </div>
          <div className="">
            <p className="bg-slate-300 px-3 py-1 cursor-pointer">XL</p>
          </div>
          <div className="">
            <p className="bg-slate-300 px-3 py-1 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2 ">
        <input type="checkbox" name="" id="bestseller" />
        <label className='cursor-pointer font-bold' htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <button className="bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 w-32">
        ADD
      </button>
    </form>
  )
}

export default Add
