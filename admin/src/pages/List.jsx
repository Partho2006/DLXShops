import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({token}) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')

      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers: {token}});

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
  <>
    <p className="mb-4 text-lg font-semibold text-gray-800">
      All Products
    </p>

    <div className="flex flex-col gap-3">

      {/* Header – desktop only */}
      <div className="hidden md:grid grid-cols-[1.2fr_3fr_1.5fr_1fr_1fr] items-center px-4 py-3 rounded-lg bg-gray-100 text-sm font-semibold text-gray-700 border">
        <span>Product</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-center">Action</span>
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className="
            grid grid-cols-[auto_1fr] md:grid-cols-[1.2fr_3fr_1.5fr_1fr_1fr]
            items-center gap-4
            px-2 py-1
            rounded-xl border bg-white
            shadow-sm hover:shadow-md transition
          "
        >

          <div className="flex items-center gap-3">
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-20 h-20 md:w-24 md:h-24 object-cover"
            />

            <div className="md:hidden">
              <p className="font-medium text-gray-800 line-clamp-1">
                {item.name}
              </p>
              <p className="text-xs text-gray-500">
                {item.category}
              </p>
              <p className="text-sm font-semibold mt-1">
                {currency}{item.price}
              </p>
            </div>
          </div>

          <p className="hidden md:block font-medium text-gray-800">
            {item.name}
          </p>

          <p className="hidden md:block text-gray-600">
            {item.category}
          </p>

          <p className="hidden md:block font-semibold">
            {currency}{item.price}
          </p>

          <div className="hidden md:flex justify-center">
            <button
              onClick={() => removeProduct(item._id)}
              className="
                px-4 py-1.5 rounded-lg
                text-sm font-medium
                text-red-600 border border-red-200
                hover:bg-red-50 hover:border-red-300
                transition
              "
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
);

}

export default List
