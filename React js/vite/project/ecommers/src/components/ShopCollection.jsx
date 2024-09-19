import React from 'react'
import asset11 from '../assets/asset11.jpg'

const ShopCollection = () => {
    return (
        <div>
        <section className='container-section'>
          <div className='grid grid-cols-2'>
            <div>
              <img src={asset11} alt="" className='h-auto w-auto' />
            </div>
            <div style={{ backgroundColor: "var(--primary-color)" }} className='pt-20 pl-20'>
              <div className='text-[14px] font-bold leading-4'>ULTIMATE APPLE ACCESSORY.</div>
              <div className='text-[52px] mt-3'>60% Discount</div>
              <p className='text-[16px] mt-6 text-gray-500'>Find the latest and greatest gadgets to enhance your electronic devices.</p>
              <div className='mt-6'><strong className='font-black'>Hungry Up !</strong> Deals end in:</div>
              <button className='bg-black mt-8 text-white rounded-full text-[14px] font-medium px-6 py-3'>Shop now</button>
            </div>
          </div>
        </section>
      </div>
    )
}

export default ShopCollection
