import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    if (!products || products.length === 0) return;

    const item = products.find(p => p._id === productId);

    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }

  }, [productId, products]);

  // ⭐ ONLY design classes modified — structure & logic untouched.

  return productData ? (
    <div className='border-t-2 pt-10 px-4 sm:px-0 transition-opacity ease-in duration-300 opacity-100'>

      <div className="flex gap-10 sm:gap-14 flex-col sm:flex-row">

        <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row">

          <div className="flex-1 sm:flex-col overflow-x-auto sm:overflow-y-auto sm:max-h-[500px] gap-3 flex sm:block">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                alt=""
                className='w-[25%] sm:w-full sm:mb-3 cursor-pointer rounded-lg  hover:opacity-80 transition'
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%] rounded-xl shadow-sm overflow-hidden bg-white">
            <img src={image} alt="" className='w-full h-auto object-cover' />
          </div>
        </div>

        <div className="flex-1">
          <h1 className='font-semibold text-3xl tracking-wide'>{productData.name}</h1>

          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} className='w-4' />
            <img src={assets.star_icon} className='w-4' />
            <img src={assets.star_icon} className='w-4' />
            <img src={assets.star_icon} className='w-4' />
            <img src={assets.star_dull_icon} className='w-4' />
            <p className="pl-2 text-gray-500 text-sm">(122)</p>
          </div>

          <p className="mt-5 text-4xl font-bold text-gray-900">{currency}{productData.price}</p>

          <p className="mt-4 text-gray-600 leading-relaxed md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-3 my-8">
            <p className="font-medium">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-5 rounded-lg text-sm hover:bg-gray-300 transition ${item === size ? "bg-gray-300 border-orange-400" : "bg-gray-100"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button className='bg-black text-white px-10 py-4 text-sm font-medium rounded-xl hover:bg-gray-800 transition'>
            ADD TO CART
          </button>

          <hr className='mt-10 sm:w-4/5 text-gray-300' />

          <div className="text-sm text-gray-500 flex flex-col gap-1 mt-3">
            <p>Original product.</p>
            <p>Easy return policy within 7 days.</p>
          </div>

        </div>
      </div>

      <div className="mt-20">
        <div className="flex">
          <b className="px-6 py-3 text-sm bg-gray-100 rounded-t-md">Description</b>
          <p className="px-6 py-3 text-sm text-gray-600">(122)</p>
        </div>

        <div className="flex flex-col gap-4 p-6 text-gray-600 text-sm leading-relaxed rounded-b-md bg-white shadow-sm">
          <p>Discover products crafted with care, curated for those who appreciate the finer things.</p>
          <p>Where quality, design, and sophistication come together effortlessly.</p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
