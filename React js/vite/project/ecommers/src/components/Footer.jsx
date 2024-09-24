import React from "react";
import asset1 from '../assets/asset1.jpg'
import { BiLogoBehance } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";


import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";
import { FaArrowRight } from 'react-icons/fa';
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";
import { IoLogoPinterest } from "react-icons/io";

function Footer() {
    return (
        <MDBFooter bgColor="black" className="text-lg-start text-muted mt-6">
            <section className="pb-5 text-white">
                <MDBContainer className="px-4 sm:px-6 lg:px-8 pt-14">
                    <MDBRow className="flex flex-col md:flex-row justify-between">
                        {/* ecomous Section */}

                        <MDBCol md="2" lg="2" className="mt-0 text-sm">
                            <h6 className="FooterTitle text-bold text-4xl font-serif ">Ecomous</h6>
                            <ul className="space-y-2 text-gray-400 mt-4">
                                <li><a href="#" className=" hover:text-lime-400 ">Address: 1234 Fashion Street, Suite 567, <br className="mt-2" />New York, NY 10001</a></li>
                                <li><a href="#" className=" hover:text-lime-400 ">Email: info@fashionshop.com</a></li>
                                <li><a href="#" className=" hover:text-lime-400">Phone: (212) 555-1234</a></li>
                                <li className="flex underline hover:text-lime-400 ">
                                    <a href="#" className=" underline ">Get direction </a>
                                    <a href="#"><div className='mt-[6px] pt-[1px] ml-2 '><MdArrowOutward /></div></a>
                                </li>

                                <li className="mt-[30px]">
                                    <div className="flex space-x-4 text-white text-2xl ">
                                        <a href="#" className="hover:text-blue-600 border hover:border-blue-600 rounded-full p-1"><TiSocialFacebook /></a>
                                        <a href="#" className="hover:text-gray-500 border hover:border-gray-500  rounded-full p-1 "><FaXTwitter /></a>
                                        <a href="#" className="hover:text-red-600 border hover:border-red-600 rounded-full p-1"><AiOutlineInstagram /></a>
                                        <a href="#" className="hover:text-red-600 border hover:border-red-600 rounded-full p-1"><AiOutlineTikTok /></a>
                                        <a href="#" className="hover:text-red-600 border hover:border-red-600 rounded-full p-1"><IoLogoPinterest /></a>
                                    </div>
                                </li>
                            </ul>
                        </MDBCol>

                        {/* help Section */}

                        <MDBCol md="2" lg="2" className="mb-4">
                            <h6 className="FooterTitle text-xl">help</h6>
                            <ul className="space-y-2 text-gray-400 text-sm mt-6">
                                <li><a href="#" className=" hover:text-lime-400">Privacy Policy</a></li>
                                <li><a href="#" className=" hover:text-lime-400">Returns + Exchanges</a></li>
                                <li><a href="#" className=" hover:text-lime-400">Shipping </a></li>
                                <li><a href="#" className=" hover:text-lime-400">Terms & Conditions  </a></li>
                                <li><a href="#" className=" hover:text-lime-400">FAQ’s</a></li>
                                <li><a href="#" className=" hover:text-lime-400">Compare</a></li>
                                <li><a href="#" className=" hover:text-lime-400">My Wishlist</a></li>

                            </ul>
                        </MDBCol>

                        {/* About Us Section */}

                        <MDBCol md="2" lg="2" className="mb-4">
                            <h6 className="FooterTitle text-xl">About us </h6>
                            <ul className="space-y-2 text-gray-400 text-sm mt-6">
                                <li><a href="#" className=" hover:text-lime-400">Our Story</a></li>
                                <li><a href="#" className=" hover:text-lime-400">Visit Our Store</a></li>
                                <li><a href="#" className=" hover:text-lime-400">Contact Us</a></li>
                                <li><a href="#" className=" hover:text-lime-400">Account</a></li>

                            </ul>
                        </MDBCol>

                        {/* sign up for email*/}

                        {/* <MDBCol md="2" lg="2" className="py-7 mb-4"> */}

                            {/* <h6 className="FooterTitle text-xl text-xl mb-12">Sign Up for Email</h6>
                            <p className="text-gray-500 text-sm  mb-0   mt-0">
                            Sign up to get first dibs on new arrivals, sales, <br /> exclusive content, events and more!

                            </p>
                            <div className="mb-4 relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Email..."
                                    className="relative text-white placeholder-gray-400 mt-4 border-b-2 border-gray-500 h-12 w-full px-3 focus:outline-none"
                                />
                                <button className="absolute mt-4 right-0 top-0 mt-0  hover:bg-gray-700 text-white flex justify-center items-center text-xl w-12 h-12 rounded-full transition duration-300">
                                Subscribe</button>
                            </div> */}
                            <div className="p-5 mt-0">
                                <div className="relative text-xl text-white placeholder-gray-400 mt-4 border-b-2 border-gray-500 h-12 w-full px-3  focus:outline-none">
                                    Sign Up With Email
                                </div>
                                <div class="">
                                    Sign up to get first dibs on new arrivals,
                                    <br /> sales, exclusive content,events and more!
                                </div>
                                <form class="max-w-md mx-auto">
                                    <label
                                        for="default-search"
                                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                                    >
                                        Enter Your Email
                                    </label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg
                                                class="w-6 h-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="search"
                                            id="default-search"
                                            class="block w-[300px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter Your Email"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            class="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 dark:bg-blackdark:hover:bg-blue-700 dark:focus:ring-black"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>

                            </div>

                        {/* </MDBCol> */}

                    </MDBRow>
                </MDBContainer>
            </section>
            <div className="border border-[#fbfafa] opacity-15"></div>

            {/* Footer Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
                <div className="text-base text-white mb-4 md:mb-0">
                    &copy; 2024 Ecomus Store. All Rights Reserved.

                </div>


            </div>
        </MDBFooter>
    );
}

export default Footer;