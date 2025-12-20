import React, { useState } from 'react'
import { assets } from '../assets/assets2'

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subcategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new formData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subcategory",subcategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      
    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className="mb-2 font-bold">Upload Image</p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className='w-25 ' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=> setImage1(e.target.files[0])} type="file" id='image1' hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-25 ' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-25 ' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>  setImage3(e.target.files[0])} type="file" id='image3' hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-25 ' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=> setImage4(e.target.files[0])} type="file" id='image4' hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2 font-bold">Product Name</p>
        <input onChange={(e)=> setName(e.target.value)} value={name} className='w-full max-w-500 px-3 py-2' type="text" name="" id="" placeholder='Type here' required />
      </div>

      <div className="w-full">
        <p className="mb-2 font-bold">Product Description</p>
        <textarea onChange={(e)=> setDescription(e.target.value)} value={description} className='w-full max-w-500 px-3 py-2' type="text" name="" id="" placeholder='Write content here' required />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">

        <div className="w-full">
          <p className="mb-2 font-bold">Product Category</p>
          <select onChange={(e)=> setCategory(e.target.value)} value={category}  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black focus:border-black transition">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="w-full">
          <p className="mb-2 font-bold">Sub Category</p>
          <select onChange={(e)=> setSubCategory(e.target.value)} value={subcategory}  className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black focus:border-black transition">
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
            onChange={(e)=> setPrice(e.target.value)} 
            value={price} 
          />
        </div>
      </div>

      <div className="">
        <p className="mb-2 font-bold">Product Sizes</p>

        <div className="flex gap-3">
          <div className="" onClick={()=> setSizes(prev => prev.includes('S') ? prev.filter(item => item !== 'S') : [...prev,'S'])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('S') ? 'bg-pink-200' : 'bg-slate-300'}`}>S</p>
          </div>
          <div className="" onClick={()=> setSizes(prev => prev.includes('M') ? prev.filter(item => item !== 'M') : [...prev,'M'])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('M') ? 'bg-pink-200' : 'bg-slate-300'}`}>M</p>
          </div>
          <div className="" onClick={()=> setSizes(prev => prev.includes('L') ? prev.filter(item => item !== 'L') : [...prev,'L'])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('L') ? 'bg-pink-200' : 'bg-slate-300'}`}>L</p>
          </div>
          <div className="" onClick={()=> setSizes(prev => prev.includes('XL') ? prev.filter(item => item !== 'XL') : [...prev,'XL'])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('XL') ? 'bg-pink-200' : 'bg-slate-300'}`}>XL</p>
          </div>
          <div className="" onClick={()=> setSizes(prev => prev.includes('XXL') ? prev.filter(item => item !== 'XXL') : [...prev,'XXL'])}>
            <p className={`px-3 py-1 cursor-pointer ${sizes.includes('XXL') ? 'bg-pink-200' : 'bg-slate-300'}`}>XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2 ">
        <input type="checkbox" name="" id="bestseller" onChange={()=> setBestseller(prev => !prev)} checked={bestseller}/>
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
