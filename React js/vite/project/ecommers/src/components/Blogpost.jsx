  import React from 'react'
  import Slider from "react-slick";
  import MainBlogs from '../helpers/MainBlogs';
  import blogpost1 from '../assets/blogpost1.jpg'
  import blogpost2 from '../assets/blogpost2.jpg'
  import blogpost3 from '../assets/blogpost3.jpg'
  import blogpost4 from '../assets/blogpost4.jpg'
  import blogpost5 from '../assets/blogpost5.jpg'


  function Blogpost() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
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
        <div className="slider-container">
          <div className='container-section'>
            <div className='text-[42px] text-center'>Blogs Post</div>
            <div className='flex'>
              <Slider {...settings} className='overflow-hidden'>
                <div className='mainblogimage1'>
                  <MainBlogs image={blogpost1} title={`Pop-punk is back in fashion`} />
                </div>
                <div className='mainblogimage2'>
                  <MainBlogs image={blogpost2} title={`The next generation of leather alternatives`} />
                </div >
                <div className='mainblogimage3'>
                  <MainBlogs image={blogpost3} title={`An Exclusive Cothing Collaboration`} />
                </div>
                <div className='mainblogimage4'>
                  <MainBlogs image={blogpost4} title={`The next generation of leather alternatives`} />
                </div>
                <div className='mainblogimage5'>
                  <MainBlogs image={blogpost5} title={`The next generation of leather alternatives`} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      );
    }

  export default Blogpost
