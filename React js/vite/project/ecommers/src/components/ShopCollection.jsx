import React from 'react'
import asset11 from '../assets/asset11.jpg'

const ShopCollection = () => {
    return (
        <div class="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl shopcollectionmain" style={{ backgroundColor: "var(--primary-color)" }}>
            <div class="md:flex ">
                <div class="shopcollectionimg ">
                    {/* <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://loremflickr.com/g/320/240/team"> */}
                    <img src={asset11} className=' md:h-full md:w-48 shopcollectionimg' alt="" />
                </div>
                <div class="p-70 w-4">
                    <div class="uppercase  text-sm text-black-500 font-bold">ULTIMATE APPLE ACCESSORY</div>
                    <h1 className='  text-5xl '>60% Discount</h1>
                    <p className='text-gray-700'>Find the latest and greatest gadgets to enhance your electronic devices</p>
                    <span><b>Hungry up !</b>Deals end in :</span>
                    <div className='flex'>
                        <div>
                            <button className=' rounded-3xl bg-black text-white h-10 w-32'>Shop now</button>
                        </div>
                        <div>
                            <button className=' rounded-3xl bg-black text-white h-10 w-32'>hhjkkkkkkkkkkkkkk</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShopCollection
