import React from 'react'
import Zoomsection from '../helpers/Zoomsection'
import InnerBanner from '../helpers/InnerBanner'
import Footerwhite from '../components/footerwhite'



const Products = () => {
  return (
    <div>
      <div>
        <InnerBanner innerBannerTile="Product" innerBannerBreadcrumbs="Product" />
      </div>
      <Zoomsection />
      <Footerwhite/>
    </div>
  )
}

export default Products
