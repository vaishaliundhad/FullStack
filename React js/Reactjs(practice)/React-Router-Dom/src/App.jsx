import './App.css'
import Aboutus from './Pages/Aboutus'
import Blog from './Pages/Blog'
import CareerLayout from './Pages/CareerLayout'
import Cart from './Pages/Cart'
import Contactus from './Pages/Contactus'
import Error from './Pages/Error'
import Faq from './Pages/Faq'
import HelpLayout from './Pages/HelpLayout'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Career ,{CareerLoader}  from './Pages/Career'
// import { CareerLoader } from './Pages/Career'
import Navbar from './components/Navbar'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Aboutus />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contactus />} />

      </Route>
      <Route path="career" element={<CareerLayout />}>
        <Route index element={<Career />} Loader={CareerLoader} />
      </Route>
    </Route>


  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App