import React from 'react'
import bgBanner from '../assets/about-banner.jpg'

const AboutUsBanner = () => {
  return (
    <div className='flex justify-center items-center h-[80vh] md:h-[90vh] lg:h-screen containerSection' style={{backgroundImage: `url(${bgBanner})`,backgroundSize: 'cover', backgroundPosition:'center'}}>
        <p className='text-white text-3xl md:text-5xl xl:text-7xl text-center px-0 md:px-18 lg:px-24'>Empowering women to achieve fitness goals with style</p>
    </div>
  )
}

export default AboutUsBanner