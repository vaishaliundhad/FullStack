import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Profile from './Profile'
import Login from './Login'
import Error from './Error'
import Navbar from '../Components/Navbar'

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/wishlist' element={<Wishlist/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout