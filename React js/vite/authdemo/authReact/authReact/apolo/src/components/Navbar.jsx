import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-gray-600 text-white p-4'>
            <ul className='flex justify-around'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signup">SignUp</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar