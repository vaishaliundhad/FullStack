import React from 'react'
// import logo from '../assets/logo.jpg'
// import {Link} from  'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowOutward } from "react-icons/md";




const Navbar = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    //  <div>

    //     <div className='bg-black text-white text-center overflow-hidden'>
    //         <div className='ml-10 flex  gap-9'>
    //             <span className='items-center '>(+333) 123-1688</span>
    //             <span>sayhello@ecomus.com</span>
    //         </div>
    //         <div>
    //         <Slider {...settings} >


    //                 <div >
    //                     <h3>Season Sale: Time to refresh your wardrobe. <span className='span inline'>  Shop now  <MdArrowOutward className='inline text-#2cfc03-500' /> </span> </h3>
    //                 </div>
    //                 <div>
    //                     <h3>Discount off 50%.<span className='span inline'>Shop now  <MdArrowOutward className='inline text-#2cfc03-500' /></span> </h3>
    //                 </div>
    //                 <div>
    //                     <h3>Welcome to store. Fantastic theme! Beautifully designe</h3>
    //                 </div>



    //         </Slider>
    //         </div>

    //     </div>

    //     </div>
    <div className='fixed'>
      <div className="topHeader flex justify-between items-center text-white bg-black py-2 containerSection">
        <div className="hidden lg:flex gap-8 text-sm font-medium w-1/4 ml-8">
          <p>(+333)123-1688</p>
          <p className="hidden xl:block">sayhello@ecomus.com</p>
        </div>
        <div className="w-full lg:w-1/2 text-center">
          <Slider {...settings}>
            <div>
              <h3 className="text-xs md:text-sm font-semibold">Welcome to store. Fantastic theme! Beautifully designed</h3>
            </div>
            <div>
              <h3 className="text-xs md:text-sm font-semibold flex justify-center">Season Sale: Time to refresh your wardrobe. <span className="mx-2 text-lime-300 flex items-center underline underline-offset-4">Shop now<MdArrowOutward className="font-black" /></span></h3>
            </div>
            <div>
              <h3 className="text-xs md:text-sm font-semibold flex justify-center">Discount off 50%. <span className="mx-2 text-lime-300 flex items-center underline underline-offset-4">Shop now<MdArrowOutward className="font-black" /></span></h3>
            </div>
          </Slider>
        </div>
        <div className="hidden lg:flex gap-8 text-sm font-semibold w-1/4 justify-end">
          <p>USD</p>
          <p>English</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar
