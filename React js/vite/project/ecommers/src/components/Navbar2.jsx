import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink, Outlet } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoListSharp } from "react-icons/io5";



const Navbar2 = () => {
    return (
        <div className=' h-20 flex  items-center justify-between sticky fixed' >
            <div className='lg:hidden'>
                <IoListSharp className='text-3xl lg:mx-5' />
            </div>
            <div className='pl-10 lg:items-center  md:items-center'>
                <img src={logo} alt="" className='lg:justify-self-center' />
            </div>

            <div>
                <nav className='max-md:hidden'>
                    <ul className='flex gap-6'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/page">Page</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/buynow">BuyNow</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/checkout">Checkout</NavLink></li>
                        <li><NavLink to="/contactus">ContactUs</NavLink></li>
                        {/* <li><NavLink to="/Login">Login</NavLink></li> */}
                    </ul>
                </nav>

            </div>
            <div className='flex gap-3 text-2xl'>
                <IoSearch />
                <RxPerson className='max-md:hidden' />
                <FaRegHeart className='max-md:hidden' />
                <RiShoppingBag2Line />

            </div>
            <Outlet />
        </div>


    )
}




export default Navbar2
