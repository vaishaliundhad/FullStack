// import React from 'react';
// import asset4 from '../assets/asset4.jpg';
// import asset5 from '../assets/asset5.jpg';
// import asset6 from '../assets/asset6.jpg';
// import asset7 from '../assets/asset7.jpg';

// const Shopbycategory = () => {
//   return (
//     <div className='mainshop justify-between overflow-hidden'>
//       <div>
//         <h1 className='text-4xl m-10 heading text-center'>Shop by category</h1>
//       </div>

//       <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-2'>
//         {[
//           { img: asset4, title: 'Screen protection', items: 6 },
//           { img: asset5, title: 'Cables', items: 6 },
//           { img: asset6, title: 'Adapters', items: 6 },
//           { img: asset7, title: 'Headphones', items: 6 },
//         ].map((category, index) => (
//           <div key={index} className='cardSection card overflow-hidden rounded-lg '>
//             <div className='cardimg'>
//               <img
//                 className='w-54 h-auto rounded hover:scale-105 transition-transform duration-300'
//                 src={category.img}
//                 alt={category.title}
//               />
//             </div>
//             <div className='cardinfo p-4 text-center'>
//               <h3 className='text-lg font-semibold'>{category.title}</h3>
//               <p className='mt-2 text-xs'>{category.items} items</p>
//               <div className='mt-4'>
//                 <button className='rounded-3xl bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-300'>
//                   Shop now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shopbycategory;

import React from 'react'
import asset4 from '../assets/asset4.jpg';
import asset5 from '../assets/asset5.jpg';
import asset6 from '../assets/asset6.jpg';
import asset7 from '../assets/asset7.jpg';
import asset22 from '../assets/asset22.jpg'
import { GoArrowUpRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Shopbycategory = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };  

return (
<div className="containerSection mt-0 lg:mt-6 pb-10 md:pb-3 xl:pb-0 ml-4">
<div>
  <h1 className="text-3xl ml-3 md:py-8 lg:py-12">Shop by category.</h1>
</div>
<div className="slider-container shopCategory">
  <Slider {...settings}>
    <div>
        <div className="shopMain overflow-hidden relative rounded-md m-3">
            <img src={asset4} className="shopimg z-0 h-full w-full rounded-md object-cover"/>
            <div className="absolute top-7 left-6 text-left">
                <h1 className="text-md lg:text-lg font-medium mb-1">Screen Protection</h1>
                <p className='text-[13px] text-gray-700  font-thin'>6 items</p>
            </div>
            <div className="flex items-center absolute bottom-7 left-6 text-left bg-white rounded-full px-6 py-3 shopbtn hover:bg-black hover:text-white">
                <button className="text-sm">Shop now </button>
                <p className='shopicon text-white'><GoArrowUpRight /></p>
            </div>
        </div>
    </div>
    <div>
        <div className="shopMain overflow-hidden relative rounded-md m-3">
            <img src={asset5} className="shopimg first:z-0 h-full w-full rounded-md object-cover"/>
            <div className="absolute top-7 left-6 text-left">
                <h1 className="text-md lg:text-lg font-medium mb-1">Headphone</h1>
                <p className='text-[13px] text-gray-700  font-thin'>6 items</p>
            </div>
            <div className="flex items-center absolute bottom-7 left-6 text-left bg-white rounded-full px-6 py-3 shopbtn hover:bg-black hover:text-white">
                <button className="text-sm">Shop now </button>
                <p className='shopicon text-white'><GoArrowUpRight /></p>
            </div>
        </div>
    </div>
    <div>
        <div className="shopMain overflow-hidden relative rounded-md m-3">
            <img src={asset6} className="shopimg z-0 h-full w-full rounded-md object-cover"/>
            <div className="absolute top-7 left-6 text-left">
                <h1 className="text-md lg:text-lg font-medium  mb-1">Cables</h1>
                <p className='text-[13px] text-gray-700  font-thin'>6 items</p>
            </div>
            <div className="flex items-center absolute bottom-7 left-6 text-left bg-white rounded-full px-6 py-3 shopbtn hover:bg-black hover:text-white">
                <button className="text-sm">Shop now </button>
                <p className='shopicon text-white'><GoArrowUpRight /></p>
            </div>
        </div>
    </div>
    <div>
        <div className="shopMain overflow-hidden relative rounded-md m-3">
            <img src={asset7} className="shopimg z-0 h-full w-full rounded-md object-cover"/>
            <div className="absolute top-7 left-6 text-left">
                <h1 className="text-md lg:text-lg font-medium tracking-wide mb-1">Adapters</h1>
                <p className='text-[13px] text-gray-700 tracking-wider font-thin'>6 items</p>
            </div>
            <div className="flex items-center absolute bottom-7 left-6 text-left bg-white rounded-full px-6 py-3 shopbtn hover:bg-black hover:text-white">
                <button className="text-sm">Shop now </button>
                <p className='shopicon text-white'><GoArrowUpRight /></p>
            </div>
        </div>
    </div>
    <div>
        <div className="shopMain overflow-hidden relative rounded-md m-3">
            <img src={asset22} className="shopimg z-0 h-full w-full rounded-md object-cover"/>
            <div className="absolute top-7 left-6 text-left">
                <h1 className="text-md lg:text-lg font-medium tracking-wide mb-1">Docks and hubs</h1>
                <p className='text-[13px] text-gray-700 tracking-wider font-thin'>6 items</p>
            </div>
            <div className="flex items-center absolute bottom-7 left-6 text-left bg-white rounded-full px-6 py-3 shopbtn hover:bg-black hover:text-white">
                <button className="text-sm">Shop now </button>
                <p className='shopicon text-white'><GoArrowUpRight /></p>
            </div>
        </div>
    </div>
  </Slider>
</div>
</div>
)
}

export default Shopbycategory
