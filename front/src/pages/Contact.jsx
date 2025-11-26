import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div className=''>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-8 flex flex-col justify-center md:flex-row gap-8 mb-24">
        <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold  text-xl text-gray-600">Out Store</p>
          <p className="">123 Business Street, Sector 5, Kolkata, West Bengal – 700001</p>
          <p className="">Phone: +91 98765 43210 | Email: support@yourcompany.com</p>
          <p className="">Delivering quality products and reliable service you can trust.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
