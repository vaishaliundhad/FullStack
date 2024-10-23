import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Cart from './Cart'
import Contact from './Contact'
import Login from './Login'
import Shop from './Shop'
import Navbar2 from '../componets/Navbar2'
import Profile from './Profile'
import { createBrowserRouter, RouterProvider , Route } from 'react-router-dom'
const List = createBrowserRouter([
    {
        path:'/',
        element:<Navbar2/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<AboutUs/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/cart',
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
                path:'profile',
                element:<Profile/>
            },
        ]
    }
])

const Layout1 = () => {
  return (
    <div>
      <RouterProvider router={List}></RouterProvider>
    </div>
  )
}

export default Layout1
