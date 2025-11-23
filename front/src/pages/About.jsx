import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const About = () => {
  return (
    <div className='border-t'>
      <div className="text-2xl text-center pt-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-8 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">We are a contemporary fashion label committed to designing premium jeans, shirts, and modern essentials that merge refined craftsmanship with everyday comfort, giving you style that feels effortless and lasts far beyond the trends.</p>
          <p className="">We deliver contemporary jeans and shirts designed for bold self-expression, giving you the perfect balance of trend, comfort, and durability.</p>

          <b className="text-gray-800 text-2xl text-center">Our Mission</b>

          <p className="">Our mission is to redefine everyday fashion by offering meticulously crafted jeans, shirts, and apparel that combine superior quality, modern aesthetics, and long-lasting comfort. We are committed to creating clothing that not only elevates your personal style but also matches the pace of your life—strong in durability, rich in detail, and refined in character. With a focus on honest craftsmanship, continuous innovation, and customer-first values, we strive to inspire confidence, celebrate individuality, and build a brand that people trust, wear proudly, and return to again and again.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US?"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-8">

  <div className="border border-gray-300 px-12 py-4 flex flex-col gap-6 rounded-2xl">
    <b className="">Quality Assurance:</b>
    <p className="text-gray-600">
      Our Quality Assurance process leaves no room for compromise—every stitch, fabric, and detail is rigorously inspected to ensure you receive clothing that meets the highest standards of durability, comfort, and craftsmanship.
    </p>
  </div>

  <div className="border border-gray-300 px-12 py-4 flex flex-col gap-6 rounded-2xl">
    <b className="">Customer Service:</b>
    <p className="text-gray-600">
      We’re committed to providing reliable, responsive support at every step, ensuring your questions are answered quickly and your shopping experience always feels personal and stress-free.
    </p>
  </div>

  <div className="border border-gray-300 px-12 py-4 flex flex-col gap-6 rounded-2xl">
    <b className="">Convenience:</b>
    <p className="text-gray-600">
      We focus on making your shopping experience effortless and smooth, offering easy navigation, quick support, and simple checkout so you can find what you need without wasting a single moment.
    </p>
  </div>

</div>

    </div>
  )
}

export default About
