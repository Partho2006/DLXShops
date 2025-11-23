import React, { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Placeorder = () => {
  const [method, setMethod] = useState('cod')

  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-10 pt-12 min-h-[80vh] border-t">

      <div className="flex flex-col gap-5 w-full max-w-xl">

        <div className="text-xl sm:text-2xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-4">

          <div onClick={()=> setMethod('')} className="flex gap-4">
            <input type="text" placeholder="First name"
              className="outline-none border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-1 focus:ring-black" />
            <input type="text" placeholder="Last name"
              className="outline-none border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-1 focus:ring-black" />
          </div>

          <input type="email" placeholder="Email address"
            className="outline-none border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-1 focus:ring-black" />

          <input type="text" placeholder="Street"
            className="outline-none border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-1 focus:ring-black" />

          <div className="flex gap-4">
            <input type="text" placeholder="City"
              className="outline-none border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-1 focus:ring-black" />
            <input type="text" placeholder="State"
              className="outline-none border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-1 focus:ring-black" />
          </div>

          <div className="flex gap-4">
            <input type="number" placeholder="Zipcode"
              className="outline-none border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-1 focus:ring-black" />
            <input type="text" placeholder="Country"
              className="outline-none border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-1 focus:ring-black" />
          </div>

          <input type="number" placeholder="Phone"
            className="outline-none border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-1 focus:ring-black" />
        </div>
      </div>

      <div className="w-full max-w-md">

        <div className="min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          <div className="flex flex-col lg:flex-row gap-4 mt-4">

            <div onClick={()=> setMethod('stripe')} className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 cursor-pointer bg-white hover:shadow-md transition">
              <p className={`min-w-4 h-4 border border-gray-300  rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} alt="" className="h-5" />
            </div>

            <div onClick={()=> setMethod('razorpay')} className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 cursor-pointer bg-white hover:shadow-md transition">
              <p className={`min-w-4 h-4 border border-gray-300  rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} alt="" className="h-5" />
            </div>

            <div onClick={()=> setMethod('cod')} className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 cursor-pointer bg-white hover:shadow-md transition">
              <p className={`min-w-4 h-4 border border-gray-300  rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-600 text-sm font-medium">
                CASH ON DELIVERY
              </p>
            </div>

          </div>

          <div className="w-full text-end">
            <button onClick={()=> navigate('/orders')} className='bg-black hover:bg-black/80 text-white text-sm my-8 px-8 py-3 rounded-xl'>Place Order</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Placeorder
