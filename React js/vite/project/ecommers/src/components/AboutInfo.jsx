import React from 'react'
import aboutImg1 from '../assets/about1.jpg'
import aboutImg2 from '../assets/about2.jpg'
import aboutImg3 from '../assets/about3.jpg'

const AboutInfo = () => {
  return (
    <div>
      <div className='containerSection text-center'>
        <div className='w-[100%] md:w-[65%] lg:w-[50%] xl:w-[35%] mx-auto py-6 md:py-10 lg:py-16'>
          <h1 className='text-4xl mb-4'>We are Ecomus</h1>
          <p className='text-gray-500 tracking-wider text-sm'>Welcome to our classic women's clothing store, where we believe that timeless style never goes out of fashion. Our collection features classic pieces that are both stylish and versatile, perfect for building a wardrobe that will last for years.</p>
        </div>
      </div>

      <hr />

      <div className='containerSection py-6 md:py-10 lg:py-16 grid lg:grid-cols-2 grid-cols-1 gap-5 items-center overflow-hidden'>
        <div className='imgHover'>
          <img src={aboutImg1} alt="" className='h-full w-full object-cover' />
        </div>
        <div className='w-[100%] py-2 lg:py-0'>
          <div className='w-[100%] lg:w-[70%] mx-auto'>
            <h1 className='text-3xl mb-4'>Established - 1995</h1>
            <p className='text-gray-500 tracking-wider text-sm'>Ecomus was founded in 1995 by Jane Smith, a fashion lover with a passion for timeless style. Jane had always been drawn to classic pieces that could be worn season after season, and she believed that there was a gap in the market for a store that focused solely on classic women's clothing. She opened the first store in a small town in New England, where it quickly became a local favorite.</p>
          </div>
        </div>
      </div>

      <div className='containerSection py-0 md:py-0 lg:py-16 grid lg:grid-cols-2 grid-cols-1 gap-5 items-center overflow-hidden'>
        <div className='w-[100%] pb-2 lg:pb-0'>
          <div className='w-[100%] lg:w-[70%] mx-auto'>
            <h1 className='text-3xl mb-4'>Our mission</h1>
            <p className='text-gray-500 tracking-wider text-sm'>Our mission is to empower people through sustainable fashion. We want everyone to look and feel good, while also doing our part to help the environment.We believe that fashion should be stylish, affordable and accessible to everyone. Body positivity and inclusivity are values that are at the heart of our brand.</p>
          </div>
        </div>
        <div className='w-full relative'>
          <div className='imgHover w-full xl:w-[75%] hover:z-50 '>
            <img src={aboutImg2} alt="" className='h-full w-full object-cover' />
          </div>
          <div className='hidden xl:block imgHover absolute right-0 -bottom-14'>
            <img src={aboutImg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo