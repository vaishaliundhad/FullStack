import React from 'react';
import logo from '../assets/logo.svg';
import { NavLink, Outlet } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoListSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar2 = () => {
    return (
        <div className='h-20 flex bg-white items-center justify-between sticky top-0 z-50 shadow-lg'>

            <div className='lg:hidden'>
                <IoListSharp className='text-3xl lg:mx-5' />
            </div>


            <div className='pl-10'>
                <img src={logo} alt="Logo" className='lg:justify-self-center' />
            </div>


            <div>
                <nav className='max-md:hidden'>
                    <ul className='flex gap-6'>
                        <li><NavLink to="/" className='hover:text-gray-700'>Home</NavLink></li>
                        <li><NavLink to="/shop" className='hover:text-gray-700'>Shop</NavLink></li>
                        <li><NavLink to="/products" className='hover:text-gray-700'>Products</NavLink></li>
                        <li className='relative group'>
                         
                            <NavLink to="#" className='flex hover:text-gray-700 items-center'>
                                Pages
                                <IoIosArrowDown className='pl-1 text-lg' />
                            </NavLink>
                           
                            <div className='absolute left-0 hidden group-hover:flex flex-col bg-white shadow-md px-6 py-2 mt-2 rounded-md'>
                                <NavLink to="/aboutus" className='block px-4 py-2 hover:bg-gray-100'>About Us</NavLink>
                                <NavLink to="/faq" className='block px-4 py-2 hover:bg-gray-100'>FAQ</NavLink>
                                <NavLink to="/contactus" className='block px-4 py-2 hover:bg-gray-100'>ContactUs</NavLink>
                                <NavLink to="/checkout" className='block px-4 py-2 hover:bg-gray-100'>Checkout</NavLink>
                            </div>
                        </li>
                       
                        <li><NavLink to="/blog" className='hover:text-gray-700'>Blog</NavLink></li>
                        <li><NavLink to="/buynow" className='hover:text-gray-700'>Buy Now</NavLink></li>
                        <li><NavLink to="/login" className='hover:text-gray-700'>Login</NavLink></li>
                    </ul>
                </nav>
            </div>

      
            <div className='flex gap-3 text-2xl pr-5'>
                <IoSearch />
                <RxPerson className='max-md:hidden' />
                <FaRegHeart className='max-md:hidden' />
                <RiShoppingBag2Line />
            </div>

            <Outlet />
        </div>
    );
}

export default Navbar2;