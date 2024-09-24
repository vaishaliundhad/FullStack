import React from 'react'
import asset8 from '../assets/asset8.jpg'

const Discount = () => {
    return (
        <div class="relative bg-gradient-to-r discount from-purple-600 to-blue-600 h-[70vh]  text-white overflow-hidden rounded-2xl m-10">
            <div class="absolute inset-0 ">
                <img src={asset8} alt="Background  discountimage " class="object-cover object-center w-full h-[100vh]" />
                {/* <div class="absolute inset-0 bg-black opacity-50"></div> */}
            </div>

            <div class="relative z-10 flex flex-col justify-center items-start h-full ml-12 text-center">
                <h6>SALE UP TO 30% OFF TODAY </h6>
                <h1 class="text-5xl font-bold leading-tight mb-4">Best Deals Discount</h1>
                <p class="text-lg text-gray-300 mb-8">Fast Wirless charging on-the-go.</p>
                <a href="#" class=" bg-lime-400 text-gray-900 hover:bg-lime-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ">Shop Collection</a>
            </div>
        </div>

    //     <div className='containerSection discoutCounter grid grid-cols-1 lg:grid-cols-2 content-center overflow-hidden rounded-lg my-10'>
    //     <div className='discoutCounterImg'>
    //         <img src={asset8} alt="" className='rounded-t-lg lg:rounded-t-none lg:rounded-l-lg rounded-l-none h-full w-full object-cover' />
    //     </div>
    //     <div className='bg-[var(--primary-color)] flex'>
    //         <div className='self-center p-10 lg:p-16'>
    //             <p className='text-xs md:text-md font-semibold'>ULTIMATE APPLE ACCESSORY.</p>
    //             <h2 className='text-3xl lg:text-5xl font-medium my-5'>60% Discount</h2>
    //             <p className='text-xs md:text-base text-gray-600'>Find the latest and greatest gadgets to enhance your electronic devices.</p>
    //             <p className='font-light my-6'><span className='font-semibold'>Hungry up ! </span>Deals end in :</p>
    //             <button className='btn btnDark'>Shop Now</button>
    //         </div>
    //     </div>
    // </div>
    )
}

export default Discount

