import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import asset1 from '../assets/asset1.jpg'
import asset2 from '../assets/asset2.jpg'
import asset3 from '../assets/asset3.jpg'
import Shopbycategory from '../components/Shopbycategory';
import { MdKeyboardArrowRight } from "react-icons/md";
import Scrollsection from '../components/Scrollsection';
import Discount from '../components/Discount';
import Card from '../components/Card'
import ShopCollection from '../components/ShopCollection';
import Trending from '../components/Trending'
import HappyClient from '../components/HappyClient';
import MainBlogs from '../helpers/MainBlogs';
// import Blog from '../pages/Blog'


const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (

        <>
        {/* slider */}

            <div className='overflow-hidden'>
                <div className='slider-container '>

                    <Slider {...settings} className='dots'>

                        <div className='mainslider1 lg:margin-left:0px p-0 m-0 '>
                            <img src={asset1} alt="" />
                            <div className='slide1 '>
                                <p className="text-2xl text">UP TO 40% OFF CHARGERS AND MORE.</p>
                                <h1 className='text-7xl pt-10 '>Saving for <br />dads and grads.</h1>
                                <button className=' bg-black text-white  rounded-full  p-3 px-6 text-lg flex mt-10 '>Shop collection <div className='pl-3 pt-2'><MdKeyboardArrowRight /></div></button>
                            </div>

                        </div>

                        <div className='mainslider2' >
                            <h3><img src={asset2} alt="" /></h3>
                            <div className='slide2'>
                                <p className="text-xl">UP TO 40% OFF CHARGERS AND MORE.</p>
                                <h1 className='text-7xl pt-10  '>Modern design</h1>
                                <button className='bg-black text-white  rounded-full p-3 px-6 text-lg flex mt-10  '>Shop collection <div className='pl-3 pt-2'><MdKeyboardArrowRight /></div></button>
                            </div>

                        </div>
                        <div className='mainslider3'>
                            <h3><img src={asset3} alt="" /></h3>
                            <div className='slide3'>
                                <p className="text-xl">UP TO 40% OFF CHARGERS AND MORE.</p>
                                <h1 className='text-7xl pt-10'>Fast Charging</h1>
                                <button className='bg-black text-white rounded-full  p-3 px-6 text-lg flex mt-10' >Shop collection <div className='pl-3 pt-2'><MdKeyboardArrowRight /></div></button>
                            </div>

                        </div>



                    </Slider>
                </div>
             
            </div>
<Scrollsection />
<Shopbycategory />
<Discount/>
<Card/>
<ShopCollection/>
<Trending/>
<HappyClient/>
<MainBlogs/>
        </>
    );
}



export default Home
