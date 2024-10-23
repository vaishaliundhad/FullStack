import React from "react";
import asset1 from '../assets/asset1.jpg'
import { BiLogoBehance } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";
import footer1 from '../assets/footer1.png'
import footer2 from '../assets/footer2.png'
import footer3 from '../assets/footer3.png'
import footer4 from '../assets/footer4.png'
import footer5 from '../assets/footer5.png'

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
import { FaCcVisa } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { LiaCcAmex } from "react-icons/lia";

function Footer() {
    return (
        <MDBFooter bgColor="black" className="text-lg-start text-muted mt-0">
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
                                <li className="flex underline hover:text-lime-400 relative ">
                                    <a href="#" className=" underline ">Get direction </a>
                                    <a href="#"><div className='mt-[6px] pt-[1px] ml-2 absolute'><MdArrowOutward /></div></a>
                                </li>

                                <li className="mt-[30px] ">
                                    <div className="flex space-x-4 text-white text-2xl  mt-4">
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

                        <div className="mt-0">
                            <div className="relative text-xl text-white placeholder-gray-400 ">
                                Sign Up With Email
                            </div>
                            <p className="text-gray-500 text-sm  mb-0 mt-6">
                                Sign up to get first dibs on new arrivals, sales, <br /> exclusive content, events and more!

                            </p>
                            <form class="max-w-md mx-auto mt-4">

                                <div class="relative text-white">

                                    <input
                                        type="email"
                                        id="email"
                                        class="mt-4 text-white w-[300px] p-4 ps-10 text-sm  border  rounded  bg-zinc-800 dark:border-zinc-800 "
                                        placeholder="Enter Your Email.."
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute mr-0 end-2.5 bottom-2.5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium  text-sm px-6 py-2 text-white dark:bg-black "
                                    >
                                        Subscribe
                                        <div className="absolute mt-0 right-2 top-1/2 transform -translate-y-1/2 mr-0">
                                            <MdArrowOutward />
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>


                        {/* </MDBCol> */}

                    </MDBRow>
                </MDBContainer>
            </section>
            <div className="border ml-20 mr-20 border-[#fbfafa] opacity-15"></div>

            {/* Footer Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
                <div className="text-sm text-zinc-500 text-white mb-4 md:mb-0 ml-[44px]">
                    &copy; 2024 Ecomus Store. All Rights Reserved.

                </div>
                <div className="flex gap-2">
                  
                   <div><img src={footer1} alt="" /> </div>
                   <div><img src={footer2} alt="" /> </div>
                   <div><img src={footer3} alt="" /> </div>
                   <div><img src={footer4} alt="" /> </div>
                   <div className="mr-10"><img src={footer5} alt="" /> </div>
                  
                  
                </div>


            </div>
        </MDBFooter>
    );
}

export default Footer;