import React from 'react'
import asset8 from '../assets/asset8.jpg'

const Discount = () => {
    return (
        <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[70vh]  text-white overflow-hidden rounded-2xl m-10">
            <div class="absolute inset-0">
                <img src={asset8} alt="Background Image" class="object-cover object-center w-full h-[100vh]" />
                <div class="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div class="relative z-10 flex flex-col justify-center items-start h-full ml-12 text-center">
                <h6>SALE UP TO 30% OFF TODAY </h6>
                <h1 class="text-5xl font-bold leading-tight mb-4">Best Deals Discount</h1>
                <p class="text-lg text-gray-300 mb-8">Fast Wirless charging on-the-go.</p>
                <a href="#" class=" bg-lime-400 text-gray-900 hover:bg-lime-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ">Shop Collection</a>
            </div>
        </div>
    )
}

export default Discount

