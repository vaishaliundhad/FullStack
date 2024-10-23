import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
// import blogpost1 from '../assets/blogpost1'


const MainBlogs = ({ image, title }) => {
  return (
    <div className='mt-10 ml-[60px] overflow-hidden '>
      <div className='relative overflow-hidden'>
        <div className='overflow-hidden'>
          <img src={image} className='object-cover w-[410px] h-[410px] hover:scale-125 duration-[4s] ' alt="" />
        </div>

        <div className='absolute bottom-[18px] left-[18px] bg-white text-black font-bold text-xs h-8 flex px-4 rounded-sm btn btnLight'><button>ACCESSORIES</button></div>
      </div>
      <div className='flex flex-col gap-[15px] pt-[30px] '>
        <p className='hover:text-lime-500'>{title}</p>
        <p className='flex items-center gap-1 underline decoration-2 hover:text-lime-500'>Read more<GoArrowUpRight className='' /></p>
      </div>
    </div>
  )
}

export default MainBlogs