import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar2 = () => {
    const {loginWithRedirect}=useAuth0();
    return (
        <div>
         
            <div className='flex items-center justify-around bg-gray-400'>
                <div>
                    <img className='h-20' src={logo} alt="" />
                </div>
                <div>
                    <nav>
                        <ul className='flex gap-6'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/cart">Cart</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink onClick={()=>loginWithRedirect()}> Login</NavLink></li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet/>
        </div>

    )
}

export default Navbar2
