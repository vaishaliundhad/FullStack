import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar2 = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
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
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/profile">Userprofile</NavLink></li>
                            {
                                isAuthenticated ? (
                                    <div className='flex'>
                                        <li>
                                            <NavLink>
                                                <button onClick={() => logout({ logoutParams: {returnTo: window.location.origin } })}>logout</button>
                                            </NavLink>
                                        </li>
                                        <li>
                                           <span>{user.nickname}</span>

                                        </li>
                                    </div>
                                )
                                    : (
                                        <li>
                                            <NavLink>
                                                <button onClick={() => loginWithRedirect()}>login</button>
                                            </NavLink>


                                        </li>
                                    )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet />
        </div>

    )
}

export default Navbar2
