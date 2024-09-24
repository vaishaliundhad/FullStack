import React from 'react'
import InnerBanner from '../helpers/InnerBanner'
import Mainblog from '../BlogHelpers/Mainblog'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.jpg'
import blog7 from '../assets/blog7.jpg'
import blog8 from '../assets/blog8.jpg'

const Blog = () => {
  return (
    <div>
      {/* <div>
        <AllinnerBanner title="Blog Grid" Breadcrumbs="Fashion" />
      </div> */}
       <div> 
      <InnerBanner innerBannerTile="Blog Grid" innerBannerBreadcrumbs = "Blog Grid"/> 
    </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 py-9 px-8 '>
        <Mainblog image={blog1} title={`The next generation of leather alternatives`} />
        <Mainblog image={blog2} title={`An Exclusive Clothing Collboration`} />
        <Mainblog image={blog3} title={`Hello Fashion by Colombian-American`} />
        <Mainblog image={blog4} title={`Christine Is A True Style Icon`} />
        <Mainblog image={blog5} title={`Effortlessly Blends the Carefree Style`} />
        <Mainblog image={blog6} title={`The Variety of Styles and Prices are Endless`} />
        <Mainblog image={blog7} title={`Something About This Type of Jeans`} />
        <Mainblog image={blog8} title={`One of The Most Iconic Fashion Bloggers`} />
      </div>
    
    </div>
  )
}

export default Blog
