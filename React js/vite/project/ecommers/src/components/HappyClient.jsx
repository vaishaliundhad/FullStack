
import React from 'react'
import smtwatch1 from '../assets/smtwatch1.jpg'
import buds2 from '../assets/buds2.png'
import phone1 from '../assets/phone1.png'
import switch1 from '../assets/switch1.png'
import Clients from '../helpers/Clients'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HappyClient() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className=" overflow-hidden  " style={{ border: "var(--secondary-color)" }}>
      <div className='mt-20 mb-24 h-[675px] ' style={{ backgroundColor: "var(--secondary-color)" }} >
        <div className='container-section flex flex-col items-center mb-14'>
          <h2 className='text-[38px] mt-16'>Happy Clients</h2>
          <p className='pt-2 text-gray-700'>See what our satisfied customers have to say about our electronic accessories.</p>
        </div>
        <Slider {...settings} className='container-section happyclient  ml-10 overflow-hidden '>

          <div>
            <Clients heading={`Best Online Fashion Site`} text={`“ I always find something stylish and affordable on this web fashion site ”`} name={`Robert Smith`} meta={`Customer From USA`} image={smtwatch1} title={`3-in-1 Wireless Charger with Official MagSafe Charging 15W`} price={`$105.95`} />
          </div>

          <div>
            <Clients heading={`Great Selection and quality`}
              text={`"I love the variety of styles and the high-quality clothing on this web fashion site."`} name={`Allen Lyn`} meta={`Customer From France`} image={buds2} title={`SoundForm Rise`} price={`$7.95`} />
          </div>

          <div>
            <Clients heading={`Best Customer Service`} text={`"I finally found a web fashion site with stylish and flattering options in my size.`} name={`Peter Rope`} meta={`Customer From USA`} image={phone1} title={`UltraGlass 2 Treated Screen Protector for iPhone 15 Pro`} price={` From $18.95`} />
          </div>

          <div>
            <Clients heading={`Great Selection and quality`}
              text={`"I love the variety of styles and the high-quality clothing on this web fashion site."`} name={`Hellen Ase`} meta={`Customer From Japan`} image={switch1} title={`3-in-1 Wireless Charger with Official MagSafe Charging 15W`} price={`$16.95`} />
          </div>

        </Slider>
      </div>
    </div>
  );
}

export default HappyClient;