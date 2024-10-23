// import React from 'react'
// import InnerBanner from '../helpers/InnerBanner'

// const AboutUs = () => {
//     return (
//         <div>
//             <div>
//                 <InnerBanner innerBannerTile="About Us" innerBannerBreadcrumbs="About Us" />
//             </div>
//         </div>
//     )
// }

// export default AboutUs

import React from 'react'
import AboutUsBanner from '../components/AboutUsBanner'
import AboutInfo from '../components/AboutInfo'
import OurPriority from '../components/OurPriority'
import AboutShopGram from '../components/AboutShopGram'


const AboutUs = () => {
  return (
    <div>
      {/* Banner Section */}
      <AboutUsBanner />

      {/* About Info */}
      <AboutInfo /> 

      {/* Quality Priority Section */}
      <OurPriority />

      {/* Shop Gram */}
      <AboutShopGram />

      {/* Footer Section */}
      {/* <FooterWhite /> */}
      
    </div>
  )
}

export default AboutUs
