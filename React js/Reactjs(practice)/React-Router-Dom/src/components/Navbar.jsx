import React from 'react'
import { NavLink,  Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
  <div className='bg-orange-400'>
    <div className='p-4 space-x-8 flex justify-center bg-gray-400 text-white font-bold'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Aboutus</NavLink>
        <NavLink to="/help">Help</NavLink>
        <NavLink to="/carrer">Career</NavLink>
    </div>
    <Outlet/>
  </div>
  </>
  )
}

export default Navbar
