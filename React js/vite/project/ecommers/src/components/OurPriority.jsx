import React from 'react'
import { PiLeaf } from "react-icons/pi";
import { TbPyramid } from "react-icons/tb";
import { LiaSquarespace } from "react-icons/lia";

const OurPriority = () => {
  return (
    <div className='containerSection my-10 md:my-14 lg:my-5 xl:my-20'>
        <div className='bg-[#fbf7f0] rounded-lg py-10 lg:py-14 xl:py-20 px-4'>
            <div className='text-center w-[100%] lg:w-[80%] xl:w-[52%] mx-auto'>
                <h1 className='text-4xl mb-5'>Quality is our priority</h1>
                <p className='text-lg tracking-wider'>Our talented stylists have put together outfits that are perfect for the season. They've variety of ways to inspire your next fashion-forward look.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-5 mt-14'>
                <div className='text-center'>
                    <PiLeaf className='text-8xl w-fit border border-black rounded-full p-5 mx-auto mb-6'  />
                    <h1 className='text-2xl xl:text-3xl mb-4'>High-Quality Materials</h1>
                    <p className='text-gray-500 tracking-wider text-sm'>Crafted with precision and excellence, our activewear is meticulously engineered using premium materials to ensure unmatched comfort and durability.</p>
                </div>
                <div className='text-center'>
                    <TbPyramid className='text-8xl w-fit border border-black rounded-full p-5 mx-auto mb-6'  />
                    <h1 className='text-2xl xl:text-3xl mb-4'>Laconic Design</h1>
                    <p className='text-gray-500 tracking-wider text-sm'>Simplicity refined. Our activewear embodies the essence of minimalistic design, delivering effortless style that speaks volumes.</p>
                </div>
                <div className='text-center'>
                    <LiaSquarespace className='text-8xl w-fit border border-black rounded-full p-5 mx-auto mb-6'  />
                    <h1 className='text-2xl xl:text-3xl mb-4'>Various Sizes</h1>
                    <p className='text-gray-500 tracking-wider text-sm'>Designed for every body and anyone, our activewear embraces diversity with a wide range of sizes and shapes, celebrating the beauty of individuality.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurPriority