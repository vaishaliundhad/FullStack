import React from 'react';
import asset9 from '../assets/asset9.jpg';
import asset10 from '../assets/asset10.jpg';

const Card = () => {
  return (
    <div className='flex flex-col md:flex-row gap-7 m-10  '>
      <div className='relative overflow-hidden cardproduct'>
        <img src={asset10} className="h-[649px] w-full md:w-[683px] rounded-2xl object-cover cardproductimage" alt="Smart Assistant" />
        <div className='absolute bottom-3 left-1/4 right-1/4 text-center  p-4 rounded'>
          <span className='text-xs font-bold text-black'>HOT ACCESSORIES</span>
          <h4 className='text-2xl font-extrabold text-black mb-2 max-lg:text-xl'>Smart Assistant</h4>
          <div className='ml-20 mt-6'>
          <button className='btn btnLight  bg-lime-400 text-gray-900 hover:bg-lime-300 rounded-full py-2 px-6 '>
            Shop now
          </button>
          </div>
        </div>
      </div>
      <div className='relative overflow-hidden cardproduct rounded-lg'>
        <img src={asset9} className="h-[649px] w-full md:w-[683px] rounded-2xl object-cover cardproductimage" alt="True Earbuds" />
        <div className='absolute bottom-3 left-1/4 right-1/4 text-center  p-4 rounded'>
          <span className='text-sm mt-0 font-bold text-black'>FAST AND FREE SHIPPING</span>
          <h4 className='text-2xl  mt-4 font-extrabold text-black mb-2 max-lg:text-xl'>True Earbuds</h4>
          <div className='ml-20 mt-6'>
          <button className='btn btnLight  bg-lime-400 text-gray-900 hover:bg-lime-300 rounded-full py-2 px-6 '>
            Shop now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
