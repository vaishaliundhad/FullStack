import React from 'react'
import Home from './Home'
import Products from './Products'
import Shop from './Shop'
import Blog from './Blog'
import BuyNow from './BuyNow'
import Error from './Error'
import Login from './Login'
// import Login from './Login'
// import Page from './Page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import Checkout from './Checkout'

 


  /* <Sliderbar/> */
const Layout = () => {
  return (
     <BrowserRouter>
     
     {/* <Navbar/> */}
     <Navbar2/>
  
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            {/* <Route path="/page" element={<Page/>}></Route> */}
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/buynow" element={<BuyNow/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            {/* <Route path="/conta-ctus" element={<ContactUs/>}></Route> */}
            {/* <Route path="/login" element={<Login/>}></Route> */}
            <Route path="*" element={<Error/>}></Route>
       </Routes>
       {/* <Marquee/> */}
       {/* <Login/> */}
     </BrowserRouter>
     
  )
}

export default Layout
