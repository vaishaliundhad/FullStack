import React from 'react'
import InnerBanner from '../helpers/InnerBanner'
import Footerwhite from '../components/footerwhite'

const BuyNow = () => {
  return (
    <div>
      <div>
        <InnerBanner innerBannerTile="BuyNow" innerBannerBreadcrumbs="BuyNow" />
      </div>

      {/* footer section */}
      <Footerwhite/>
    </div>
  )
}

export default BuyNow
