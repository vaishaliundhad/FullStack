import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
   <div className='min-width: 1024px'>
     <div className='flex items-center justify-around bg-gray-400'>
       <div>
          <img className='h-20' src={logo} alt="" />
       </div>
       <div>
            <nav>
                <ul className='flex gap-6'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
       </div>
    </div>
   </div>
  )
}

export default Navbar
