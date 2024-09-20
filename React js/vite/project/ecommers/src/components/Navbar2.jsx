import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink, Outlet } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoListSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";



const Navbar2 = () => {
    return (
        <div className=' h-20 flex bg-[#fff]  items-center justify-between sticky top-0 z-10 fixed overflow-hidden z-5' >
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
                        <li className='relative group'>
                            <NavLink to="/#" className='flex '>
                            Pages
                                <div className='pl-2 pt-1.5'><IoIosArrowDown /></div>

                            </NavLink>
                            <div className='absolute hidden group-hover:block  p-2 w-38'>
                                <NavLink to="/aboutus" className='block bg-white p-2'>
                                    AboutUs
                                </NavLink>
                                <NavLink to="/faq" className='block bg-white p-2'>
                                    Faq
                                </NavLink>
                                <NavLink to="/contactus" className='block bg-white p-2'>
                                    ContactUs
                                </NavLink>
                                <NavLink to="/checkout" className='block bg-white p-2'>
                                    CheckOut
                                </NavLink>
                            </div>
                        </li>



                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/buynow">BuyNow</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        
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
