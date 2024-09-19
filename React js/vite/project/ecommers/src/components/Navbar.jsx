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


        <div className='bg-black text-white text-center overflow-hidden'>
            <div className='ml-10 flex  gap-9'>
                <span className='items-center '>(+333) 123-1688</span>
                <span>sayhello@ecomus.com</span>
            </div>
            <div>
            <Slider {...settings} >

               
                    <div >
                        <h3>Season Sale: Time to refresh your wardrobe. <span className='span inline'>  Shop now  <MdArrowOutward className='inline text-#2cfc03-500' /> </span> </h3>
                    </div>
                    <div>
                        <h3>Discount off 50%.<span className='span inline'>Shop now  <MdArrowOutward className='inline text-#2cfc03-500' /></span> </h3>
                    </div>
                    <div>
                        <h3>Welcome to store. Fantastic theme! Beautifully designe</h3>
                    </div>



            </Slider>
            </div>

        </div>


    );
}

export default Navbar
