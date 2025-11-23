import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItems])
  return (
    <div className="border-t pt-14 px-4 sm:px-0">
      <div className="text-2xl mb-6">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="flex flex-col gap-5">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="p-4 bg-white shadow-sm border-b 
                       hover:shadow-md transition 
                       grid grid-cols-[1fr_auto_auto] sm:grid-cols-[2fr_1fr_auto] 
                       items-center gap-6">
              <div className="flex items-start gap-5">
                <img src={productData.image[0]} alt="" className="w-20 sm:w-24 rounded-lg" />

                <div className="flex flex-col gap-2">
                  <p className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
                    {productData.name}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-gray-800 font-medium text-sm sm:text-base">
                      {currency}{productData.price}
                    </span>

                    <span className="px-2 py-1 text-xs sm:text-sm border border-gray-300 bg-gray-200 
                                  rounded-md font-medium text-gray-700">
                      Size: {item.size}
                    </span>
                  </div>
                </div>
              </div>


              <input
                type="number"
                min={1}
                max={8}
                onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                defaultValue={item.quantity}
                className="border border-gray-300 bg-gray-200 rounded-md 
                           w-14 text-center py-1 outline-none"/>
              <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} alt="" className='w-4 mr-4 sm:w-5 cursor-pointer' />
            </div>
          );
        })}
      </div>

      <div className="flex justify-between my-20">
        <div className="w-full ">
          <CartTotal />

          <div className="w-full text-end">
            <button onClick={()=> navigate('/place-order')} className='bg-black hover:bg-black/80 text-white text-sm my-8 px-8 py-3 rounded-xl'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Cart
