import React from 'react';
import asset8 from '../assets/asset8.jpg';

const Discount = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[70vh] text-white overflow-hidden rounded-2xl m-5 md:m-10">
            <div className="absolute inset-0 imgHover">
                <img
                    src={asset8}
                    alt="Background discount image"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="relative z-10 flex flex-col justify-center items-start h-full p-4 md:p-12 text-center">
                <h6 className="text-lg font-semibold mb-2">SALE UP TO 30% OFF TODAY</h6>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">Best Deals Discount</h1>
                <p className="text-base md:tex  t-lg text-gray-300 mb-8">Fast wireless charging on-the-go.</p>
                <a
                    href="#"
                    className="btn btnLight bg-lime-400 text-gray-900  py-2 px-6 rounded-full text-lg font-semibold "
                >
                    Shop Collection
                </a>
            </div>
        </div>

       
      
    );
};

export default Discount;
