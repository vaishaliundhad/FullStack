import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const InnerBanner = ({innerBannerTile , innerBannerBreadcrumbs}) => { 
  return (
    <div> 
        <div className='text-center innerBannerSection py-12 md:py-16'> 
            <h1 className='text-4xl md:text-5xl mb-5 tracking-wide capitalize'>{innerBannerTile}</h1> 
            <p className='text-sm md:text-base flex items-center justify-center capitalize'><NavLink to='/'>Home</NavLink> <MdKeyboardArrowRight className='mx-5' /> {innerBannerBreadcrumbs}</p> 
        </div> 
       
    </div> 
  )
}

export default InnerBanner
