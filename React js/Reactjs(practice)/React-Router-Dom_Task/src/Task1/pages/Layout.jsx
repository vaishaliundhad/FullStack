import React from "react";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Wishlist from "./Wishlist";
import Faq from "./Faq";
import Error from "./Error";
import Navbar from "../components/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HelpLayout from "./HelpLayout";
import CareerLayout from "./CareerLayout";
import Career, { CareerLoader } from "./Career";
import CareerDetails, { CareerDetailsData } from "./CareerDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
      <Route path="career" element={<CareerLayout />}>
        <Route index element={<Career />} loader={CareerLoader} />
        <Route path=":id" element={<CareerDetails />} loader={CareerDetailsData} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const Layout = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Layout;
