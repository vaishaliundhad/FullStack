import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { PiExport } from "react-icons/pi";

// import './styles.css'

const Home = () => {
    return (
        <div class="overflow-x-auto overflow-y-scroll">
            <div class="">
                <header class="bg-gradient-to-r from-sky-500 to-indigo-500">
                    <nav class="navbar flex ">
                        <div class="navdiv flex justify-between ">
                            <div class="logo">

                                <h1 class="font-awesome font-serif text-3xl mt-8 mb-6 ml-6 ">Record</h1>

                            </div>
                            <ul class="flex gap-14 justify-between mt-10 ml-60 mb-6 item-center">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Contactus</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>





                <div class="container mx-auto mt-10 ">

                    <h1 class="text-3xl font-bold text-center mb-6 py-9 w-full  ">Read Records</h1>

                    <div class="flex  mb-4">
                        <input type="text" placeholder="Type a name..." class="border border-gray-300 px-4 py-2 " />
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  rounded-r">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>

                    </div>

                    <div class="flex justify-end mb-4">
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md relative">
                        <CgCloseO  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl" />
                        <span className="pl-4"> Delete Selected</span>
                 
                        </button>
                        <button class=" relative bg-cyan-500  hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-md mx-2">
                        <PiExport className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl" />
                        <span className="pl-4">Export CSV</span>
                        
                        </button>
                        <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md relative">
                        <FaPlus className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                        <span className="pl-4">Create Record</span>
                        </button>
                    </div>

                    <table class="w-full border border-gray-300">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="px-4 py-2 text-left border border-gray-300">
                                    <input type="checkbox" class="m-1" />
                                </th>
                                <th class="px-4 py-2 text-left border border-gray-300">Name</th>
                                <th class="px-4 py-2 text-left border border-gray-300">Description</th>
                                <th class="px-4 py-2 text-left border border-gray-300">Price</th>
                                <th class="px-4 py-2 text-left border border-gray-300">Category</th>
                                <th class="px-4 py-2 text-left border border-gray-300">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover:bg-gray-100">
                                <td class="px-4 py-2 text-left border border-gray-300">
                                    <input type="checkbox" class="m-1" />
                                </td>
                                <td class="px-4 py-2 text-left border border-gray-300">Pillow</td>
                                <td class="px-4 py-2 text-left border border-gray-300">Sleeping well is important.</td>
                                <td class="px-4 py-2 text-left border border-gray-300">$8.99</td>
                                <td class="px-4 py-2 text-left border border-gray-300">Personal</td>
                                <td class="px-4 py-2 text-left border border-gray-300">
                            
                                    <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                        <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                        <span className="pl-1">Edit</span>
                                    </button>

                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                        <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                        <span className="pl-6">Delete</span>

                                    </button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="px-4 py-2 text-left border border-gray-300">
                                    <input type="checkbox" class="m-1" />
                                </td>
                                <td class="px-4 py-2 text-left border border-gray-300">Earphone</td>
                                <td class="px-4 py-2 text-left border border-gray-300 ">You need this one if you love music.
                                </td>
                                <td class="px-4 py-2 text-left border border-gray-300">$9.00</td>
                                <td class="px-4 py-2 text-left border border-gray-300">Personal</td>
                                <td class="px-4 py-2 text-left border border-gray-300">
                                    <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                        <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                        <span className="pl-1">Edit</span>
                                    </button>
                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                        <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                        <span className="pl-6">Delete</span>

                                    </button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="px-4 py-2 text-left border border-gray-300">
                                    <input type="checkbox" class="m-1" />
                                </td>
                                <td class="px-4 py-2 text-left border border-gray-300">Mouse</td>
                                <td class="px-4 py-2 text-left border border-gray-300 ">Very useful if you love your
                                    computer.</td>
                                <td class="px-4 py-2 text-left border border-gray-300">$11.35</td>
                                <td class="px-4 py-2 text-left border border-gray-300">Personal</td>
                                <td class="px-4 py-2 text-left border border-gray-300">
                                    <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                        <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                        <span className="pl-1">Edit</span>
                                    </button>
                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                        <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                        <span className="pl-6">Delete</span>

                                    </button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="px-4 py-2 text-left border border-gray-300">
                                    <input type="checkbox" class="m-1" />
                                </td>
                                <td class="px-4 py-2 text-left border border-gray-300">Trash Can</td>
                                <td class="px-4 py-2 text-left border border-gray-300 ">It will help you maintain
                                    cleanliness.</td>
                                <td class="px-4 py-2 text-left border border-gray-300">$3.95</td>
                                <td class="px-4 py-2 text-left border border-gray-300">Sports</td>
                                <td class="px-4 py-2 text-left border border-gray-300">
                                    <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                        <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                        <span className="pl-1">Edit</span>
                                    </button>
                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                        <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                        <span className="pl-6">Delete</span>

                                    </button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="px-4 py-2 text-left border border-gray-300">
                                    <input type="checkbox" class="m-1" />
                                </td>
                                <td class="px-4 py-2 text-left border border-gray-300">Eye Glasses</td>
                                <td class="px-4 py-2 text-left border border-gray-300 ">It will make you read better.</td>
                                <td class="px-4 py-2 text-left border border-gray-300">$6.00</td>
                                <td class="px-4 py-2 text-left border border-gray-300">Sports</td>
                                <td class="px-4 py-2 text-left border border-gray-300">
                                    <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-md relative mt-2 mr-2 pr-3">
                                        <FaRegEdit className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                                        <span className="pl-1">Edit</span>
                                    </button>
                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md relative mt-2 mr-2 mr-3">
                                        <IoClose className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl" />
                                        <span className="pl-6">Delete</span>

                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex  mt-4">
                        <div class="pagination">
                            <button class="bg-blue-400 hover:bg-blue-500 text-white font-bold ml-0 py-2 px-4  ">
                                1
                            </button>
                            <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 ml-0 px-4 ">
                                2
                            </button>
                            <button
                                class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r ml-0  ">
                                &gt;&gt;
                            </button>
                        </div>
                    </div>


                    <div class="flex justify-end mb-4">
                        <input type="text" placeholder="Type page number..." class="border border-gray-300 px-4 py-2 " />
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  rounded-r">
                            Go
                        </button>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Home