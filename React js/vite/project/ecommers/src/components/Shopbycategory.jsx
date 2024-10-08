import React from 'react'
import asset4 from '../assets/asset4.jpg'
import asset5 from '../assets/asset5.jpg'
import asset6 from '../assets/asset6.jpg'
import asset7 from '../assets/asset7.jpg'
import { MdArrowOutward } from "react-icons/md";


const Shopbycategory = () => {
  return (
    <div className='mainshop justify-between overflow-hidden'>
      <div>
        <h1 className='text-4xl m-10 '>Shop by category.</h1>
      </div>

      <div className='container flex justify-evenly gap-4 overflow-hidden '>

        <div className='cardSection'>
          <div className='cardimg overflow-hidden'>
            <img className='rounded hover:scale-125 duration-[5s]' src={asset4} alt="" />
          </div>
          <div className='cardinfo'>

            <h3>Screen protection</h3>
            <p className='mt-2 text-xs'>6 items</p>

            <div className='mb-0 '>
              <button className=' rounded-3xl shopbycategorybtn   '>Shop now <div className='shopicons'></div></button>
            </div>
          </div>

        </div>

        <div className='cardSection'>
          <div className='overflow-hidden'>
            <img className='rounded hover:scale-125 duration-[5s]' src={asset5} alt="" />
          </div>

          <div className='cardinfo'>
            <h4>Cables</h4>
            <p className='mt-2 text-xs	'>6 items</p>
            <div>
              <button className='rounded-3xl shopbycategorybtn'>Shop now</button>
            </div>
          </div>
        </div>

        <div className='cardSection '>
          <div className='overflow-hidden'>
            <img className='rounded hover:scale-125 duration-[5s]' src={asset6} alt="" />
          </div>



          <div className='cardinfo'>
            <h4>Adapters</h4>
            <p className='mt-2 text-xs	'>6 items</p>
            <div>
              <button className=' rounded-3xl shopbycategorybtn'>Shop now</button>
            </div>
          </div>

        </div>


        <div className='cardSection'>
          <div className='overflow-hidden'>
            <img className='rounded hover:scale-125 duration-[5s]' src={asset7} alt="" />
          </div>
         

          <div className='cardinfo'>
            <h4>Headphone</h4>
            <p className='mt-2 text-xs'>6 items</p>

            <div>
              <button className=' rounded-3xl shopbycategorybtn'>Shop now</button>
            </div>


          </div>
        </div>

      </div>



    </div>
  )
}

export default Shopbycategory
