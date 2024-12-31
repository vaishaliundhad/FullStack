import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import Cart from "../pages/Cart";
import ContactUs from "../pages/ContactUs";
import Error from "../pages/Error";
import Faq from "../pages/Faq";
import Shop from "./Shop";
import Navbar from "../Components/Navbar"
import HelpLayout from "./HelpLayout";
import LoaderLayout from "./LoaderLayout";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom";
import Loaderpage,{LoaderpageData}  from "./Loaderpage";
import Loader , {LoadingLoader} from "./Loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />}></Route>
      <Route path="cart" element={<Cart />}>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
      <Route path="about" element={<AboutUs />}>  </Route>
    
    
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<ContactUs  />} />

      </Route>
      <Route path="*" element={<Error />}></Route>
      {/* <Route path="loader" element={<Loaderpage />} loader={Loader}></Route> */}
      <Route path="loader" element={<LoaderLayout />}>
        <Route index element={<Loader />} loader={LoadingLoader} />
        <Route path=":id" element={<Loaderpage />} loader={LoaderpageData} />
      </Route>
    </Route>
  )
);

const Layout = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Layout;
