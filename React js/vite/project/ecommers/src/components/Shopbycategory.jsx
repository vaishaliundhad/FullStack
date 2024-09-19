import React from 'react'
import asset4 from '../assets/asset4.jpg'
import asset5 from '../assets/asset5.jpg'
import asset6 from '../assets/asset6.jpg'
import asset7 from '../assets/asset7.jpg'
import { MdArrowOutward } from "react-icons/md";


const Shopbycategory = () => {
  return (
    <div className='mainshop justify-between'>
      <div>
        <h1 className='text-4xl m-20 10'>Shop by category.</h1>
      </div>

      <div className='container flex justify-evenly gap-4 '>

        <div className='cardSection'>
          <div className='cardimg'>
            <img className='rounded ' src={asset4} alt="" />
          </div>
          <div className='cardinfo'>

            <h3>Screen protection</h3>
            <p className='mt-2 text-xs'>6 items</p>

            <div>
              <button className=' rounded-3xl shopbycategorybtn'>Shop now <div className='shopicons'><MdArrowOutward /></div></button>
            </div>
          </div>

        </div>

        <div className='cardSection'>
          <img className='rounded' src={asset5} alt="" />
          <div className='cardinfo'>
            <h4>Cables</h4>
            <p className='mt-2 text-xs	'>6 items</p>
            <div>
              <button className='rounded-3xl shopbycategorybtn'>Shop now</button>
            </div>
          </div>
        </div>

        <div className='cardSection'>

          <img className='rounded' src={asset6} alt="" />

          <div className='cardinfo'>
            <h4>Adapters</h4>
            <p className='mt-2 text-xs	'>6 items</p>
            <div>
              <button className=' rounded-3xl shopbycategorybtn'>Shop now</button>
            </div>
          </div>

        </div>


        <div className='cardSection'>
          <img className='rounded' src={asset7} alt="" />

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
