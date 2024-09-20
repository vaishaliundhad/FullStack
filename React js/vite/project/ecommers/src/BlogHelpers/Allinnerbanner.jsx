import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"; 
import { Link } from 'react-router-dom'; 

const AllinnerBanner = ({title , Breadcrumbs}) => {
  return (
    <div className='bginnerbanner'> 
        <div className='text-center innerBannerSection py-12 md:py-16'> 
            <h1 className='text-4xl md:text-5xl mb-5 tracking-wide capitalize'>{title}</h1> 
            <p className='text-sm md:text-base flex items-center justify-center capitalize'><Link to='/'>Home</Link> <MdKeyboardArrowRight className='mx-5'/> {Breadcrumbs}</p> 
        </div> 
    </div> 
  )
}

export default AllinnerBanner
