import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
       
        <div className='bg-white-500 bg-violet-500 text-white w-[100b%]  p-4'>
            <nav>
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
