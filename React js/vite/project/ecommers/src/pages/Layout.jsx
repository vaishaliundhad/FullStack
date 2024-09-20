import React from 'react'
import Home from './Home'
import Products from './Products'
import Shop from './Shop'
import Blog from './Blog'
import BuyNow from './BuyNow'
import Error from './Error'
import Login from './Login'
import Faq from './Faq'
// import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import Checkout from './Checkout'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

 

  /* <Sliderbar/> */
const Layout = () => {
  return (
     <BrowserRouter>
     
     {/* <Navbar/> */}
     <Navbar2/>
  
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/buynow" element={<BuyNow/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/faq" element={<Faq/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/contactus" element={<ContactUs/>}></Route>
            {/* <Route path="/login" element={<Login/>}></Route> */}
            <Route path="*" element={<Error/>}></Route>
       </Routes>
       {/* <Marquee/> */}
       {/* <Login/> */}
     </BrowserRouter>
     
  )
}

export default Layout
