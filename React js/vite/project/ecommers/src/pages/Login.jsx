// import React from 'react'
// import { MdArrowOutward } from "react-icons/md";

// const Login = () => {
//     return (
//         <main class="container mx-auto p-4 mt-12  flex flex-col items-center justify-center text-black-200">
//             <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
//                 <h1 class="text-4xl font-semibold">Log in</h1>
//             </div>-
//             <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
//                 <input className='login w-full mb-4 p-2 appearance-none block  bg-white-200 text-black-500 placeholder-gray-500 rounded border focus:border-teal-500' type="email" placeholder="Email *" />
//                 <input class="mb-4 p-2 appearance-none block w-full login bg-white-200 placeholder-gray-500 rounded border focus:border-teal-500" type="password" placeholder="Password *" />
//                 <div class=" items-center ">
//                     <div class="w-1/2  items-center">
//                         {/* <input id="remember-me" type="checkbox" class="m1 mr-2" /> */}
//                         <label for="remember-me" className='hover:text-lime-500'><u> Forgot your password? </u></label>
//                     </div>
//                     {/* <button class="ml-auto w-4/6  bg-gray-800  text-white p-2 rounded font-semibold hover:bg-gray-900 mt-6" type="submit">Log In</button> */}
//                 </div>
//                 <div className='flex items-center mt-2'>

//                     <button className='ml-auto w-4/6  bg-gray-800  text-white p-2 rounded font-semibold hover:bg-gray-900 mt-6' type="submit">Log In</button>

//                     <button className=' ml-2 hover:text-lime-500'><u>New Customer? Create Your account <div className='m-0 pl-40 mt-1'>< MdArrowOutward /></div></u>  </button>
//                     {/* <button className='bg-black text-white rounded-full p-3 px-6 text-lg flex mt-10  '>Shop collection <div className='pl-3 pt-2'><MdKeyboardArrowRight /></div></button> */}
//                 </div>

//             </div>
//         </main>
//     )
// }

// export default Login


import React from "react";

const Login = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-full max-w-lg mx-4 p-8  rounded-lg shadow-lg relative">
                <button className="absolute top-4 right-4 text-black text-2xl font-bold">
                    &times;
                </button>

                <h2 className="text-2xl font-semibold mb-6">Log in</h2>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email *
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Password *
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500"
                        />
                    </div>

                    <div className="mb-6">
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-700 underline hover:text-lime-500">
                            Forgot your password?
                        </a>
                    </div>

                    <div className=" flex  gap-x-3 text justify-around">
                        <button className="px-10 h-12  w-52 text-sm bg-black text-white py-4 rounded font-semibold hover:bg-gray-800">
                            Login
                        </button>
                        {/* <button className='ml-auto w-4/6  bg-gray-800  text-white p-2 rounded font-semibold hover:bg-gray-900 mt-6' type="submit">Log In</button> */}


                        <div className="flex justify-between items-center underline gap-x-0 ">
                            <a href="#" className="text-sm text-gray-700 hover:text-gray-900 font-semibold hover:text-lime-500">New customer?
                            <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-gray-900 font-semibold hover:text-lime-500"
                            >
                                Create your account
                               
                            </a></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;