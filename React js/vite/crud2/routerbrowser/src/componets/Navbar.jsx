import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, Link  } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
       <div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <nav>
            <ul>
                <li ><NavLink to="/">Home</NavLink></li>
                <li ><NavLink to="/cart">Cart</NavLink></li>
                <li ><NavLink to="/shop">Shop</NavLink></li>
                <li ><NavLink to="/login">Login</NavLink></li>
                <li ><NavLink to="/contact">Contac</NavLink></li>
            </ul>
        </nav>
      </div>
    </div>
    </div>
  )
}

export default Navbar
