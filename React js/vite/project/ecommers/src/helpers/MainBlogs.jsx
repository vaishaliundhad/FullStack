import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const MainBlogs = ({ image , title    }) => {
  return (
      <div className='w-[453px] h-[562px] mt-10'>
        <div className='relative'>
          <img src={image} className='object-cover w-[453px] h-[460px]' alt="" />
          <div className='absolute bottom-[18px] left-[18px] bg-white text-black font-bold text-xs h-8 flex px-4 rounded-sm'><button>ACCESSORIES</button></div>
        </div>
        <div className='flex flex-col gap-[15px] pt-[30px] '>
            <p className='hover:text-green-600'>{title}</p>
            <p className='flex items-center gap-1 underline decoration-2 hover:text-green-600'>Read more<GoArrowUpRight className=''/></p>
        </div>
      </div>
  )
}

export default MainBlogs