import React from 'react'
import asset11 from '../assets/asset11.jpg'

const ShopCollection = () => {
    return (
        <div className=' justify-center gap-7 ml-12 overflow-hidden'>
            <section className='container-section rounded-lg w-11/12'>
                <div className='grid grid-cols-2 '>
                    <div className='imgHover'>
                        <img src={asset11} alt="" className='h-auto w-auto rounded-tl-lg rounded-bl-lg' />
                    </div>
                    <div style={{ backgroundColor: "var(--primary-color)" }} className='pt-20 pl-20 w-[112%]  rounded-tr-lg rounded-br-lg'>
                        <div className='text-[14px] font-bold leading-4'>ULTIMATE APPLE ACCESSORY.</div>
                        <div className='text-[52px] mt-3'>60% Discount</div>
                        <p className='text-[16px] mt-6 text-gray-500'>Find the latest and greatest gadgets to enhance your electronic devices.</p>
                        <div className='mt-6'><b className='font-black'>Hungry Up !</b> Deals end in:</div>
                        <button className=' mt-8  btn btnDark'>Shop now</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShopCollection
