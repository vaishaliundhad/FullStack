import React from 'react'
import Navbar from '../componets/Navbar'
import Home from './Home'
import Shop from './Shop'
import Login from './Login'
import Cart from './Cart'
import Contact from './Contact'
import { createBrowserRouter , RouterProvider , Route } from 'react-router-dom'
const List = createBrowserRouter([
   {
    path:'/',
    element:<Navbar/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'cart',
            element:<Cart/>
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'shop',
            element:<Shop/>
        },
        {
            path:'contact',
            element:<Contact/>
        }
    ]
   }
])

const Layout = () => {
  return (
    <div>
      
    </div>
  )
}

export default Layout
