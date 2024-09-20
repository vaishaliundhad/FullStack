import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const Mainblog = ({image, title}) => {
  return (
   
        <div className='px-12 '>
          <div className='-mx-12'>
            <div className=' px-4  '>
            {/* <div className='col-xl-4 col-md-6 col-12 pl-4 pr-4 w-1/3 border-2 border-solid border-black w-[483px] h-[430px]'> */}
              <div className='relative '>
                <img src={image} alt="" className=' rounded-lg object-cover imghover' />
                {/* <div className='absolute bottom-[18px] left-[18px] bg-white text-black font-bold text-xs h-8 flex px-4 rounded-sm'><button>ACCESSORIES</button></div> */}
              </div>
              <div className='flex flex-col gap-[15px] pt-[30px] '>
                <p className='text-xl font-normal'>{title}</p>
                <p className='flex items-center gap-1 underline decoration-2'>Read more<GoArrowUpRight className='' /></p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Mainblog
