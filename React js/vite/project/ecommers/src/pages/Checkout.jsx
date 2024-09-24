import React from 'react'
import InnerBanner from '../helpers/InnerBanner'
import asset12 from '../assets/asset12.jpg'
import asset13 from '../assets/asset13.jpg'
import asset14 from '../assets/asset14.jpg'
import asset15 from '../assets/asset15.jpg'

const Checkout = () => {
    return (

        <div>
            <InnerBanner innerBannerTile="Checkout"  innerBannerBreadcrumbs="Checkout"/>


            <div className='flex'>
                {/* Billing Details */}
                
                <div>
                    <h1 className='ml-10 text-4xl'>Billing details</h1>
                    <div className='flex'>
                       <div className='ml-10'>
                            <label for="first_name" class="block text-gray-700 dark:text-black mt-9 ">First Name*</label>
                            <input type="text" id="first_name" className='w-12/12 h-30 rounded border py-2 m-2 px-24 mt-1 ml-1 mt-1' ></input>
                        </div>
                    
                        <div className='md:max-hidden'>
                            <label for="last_name" class="block text-gray-700 dark:text-black mt-9 ml-1">Last Name*</label>
                            <input type="text" id="last_name" className='w-12/12 h-30 rounded border py-2 m-2 px-24 mt-1 ml-1 mt-1' ></input>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div class="mt-1 ml-10" >
                            <label for="city" class="block text-gray-700 dark:text-black mb-1">Country/region*</label>
                            <input type="city" id="city" class="w-full rounded border py-2 px-44 mt-1"></input>
                        </div>
                        <div class="mt-7 ml-10" >
                            <label for="city" class="block text-gray-700 dark:text-black mb-1">Town/City*</label>
                            <input type="city" id="city" class="w-full rounded border py-2 px-3mt-1 "></input>
                        </div>
                        <div class="mt-7 ml-10" >
                            <label for="address" class="block text-gray-700 dark:text-black mb-1">Address*</label>
                            <input type="text" id="address" class="w-full rounded border py-2 px-3 mt-1 "></input>
                        </div>
                        <div class="mt-7 ml-10" >
                            <label for="number" class="block text-gray-700 dark:text-black mb-1">Phone Number*</label>
                            <input type="number" id="number" class="w-full rounded border py-2 px-3 mt-1 "></input>
                        </div>
                        <div class="mt-7 ml-10" >
                            <label for="email" class="block text-gray-700 dark:text-black mb-1">Email*</label>
                            <input type="email" id="email" class="w-full rounded border py-2 px-3 mt-1"></input>
                        </div>
                        <div class="mt-7 ml-10" >
                            <label for="optional" class="block text-gray-700 dark:text-black mb-1">Order notes (optional)*</label>
                            <input type="text" id="optional" class="w-full  rounded border py-9 px-3 mt-1 "></input>
                        </div>

                    </div>

                </div>

            {/* {*your order*} */}

                <div class="py-4 ml-0 px-1 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto order  mt-0 overflow-hidden rounded ">
                    <div class="flex justify-start item-start space-y-2 flex-col ">
                        <h1 class="text-sm text-black lg:text-3xl font-semibold leading-7 lg:leading-9 ">Your Order</h1>

                    </div>
                    <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8  md:space-y-6 xl:space-y-0 mt-2 rounded-lg">
                        <div class="flex flex-col justify-start items-start w-full  md:space-y-6 xl:space-y-8 ">

                            <div class="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">

                                <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                
                                {/* {image1} */}
                                    <div class="pb-4 md:pb-8 w-full md:w-40">
                                        <img class="w-full hidden md:block h-14 w-12 border rounded-s ml-4" src={asset12} alt="tshrt" />
                                    </div>
                                    <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 md:space-y-0 ml-2">
                                        <div class="mr-6">
                                            <p class="text-black xl:text-sm ml-0">Ribbed model T-Shirt</p>
                                            <h5 className='dark:text-gray-400 text-sm mt-2'>Brown/ M </h5>
                                        </div>
                                        <div>
                                            <h6 className='text-xs'>$25.00</h6>
                                        </div>
                                    </div>

                                </div>
                                
                                  {/* {image2} */}

                                <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">

                                    <div class="pb-4 md:pb-8 w-full md:w-40">
                                        <img class="w-full hidden md:block h-14 w-12 border rounded-s ml-4" src={asset13} alt="sweater" />
                                    </div>
                                    <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 md:space-y-0 ml-2">
                                        <div class="mr-6">
                                            <p class="text-black xl:text-sm ml-0">Vanilla White</p>

                                        </div>
                                        <div>
                                            <h6 className='text-xs'>$35.00</h6>
                                        </div>
                                    </div>
                                </div>

                              {/* {image3} */}
                                <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">

                                    <div class="pb-4 md:pb-8 w-full md:w-40 ">
                                        <img class="w-full hidden md:block h-14 w-12 ml-4 border rounded-s" src={asset14} alt="tshrt" />
                                    </div>
                                    <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 md:space-y-0 ml-2">
                                        <div class="mr-6">
                                            <p class="text-black xl:text-sm ml-0">Cotton jersey top</p>
                                            <h5 className='dark:text-gray-400 text-sm mt-2'>Beige / S</h5>
                                        </div>
                                        <div>
                                            <h6 className='text-xs'>$8.00</h6>
                                        </div>
                                    </div>

                                </div>

                              {/* {image4} */}
                                <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">

                                    <div class="pb-4 md:pb-8 w-full md:w-40">
                                        <img class="w-full hidden md:block h-14 w-12 ml-4 border rounded-s" src={asset15} alt="tshir" />
                                    </div>
                                    <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 md:space-y-0 ml-2">
                                        <div class="mr-6">
                                            <p class="text-black xl:text-sm ml-0">Ribbed Tank Top</p>
                                            <h5 className='dark:text-gray-400 text-sm mt-2'>Orange / S</h5>
                                        </div>
                                        <div>
                                            <h6 className='text-xs'>$25.00</h6>
                                        </div>
                                    </div>

                                </div>
                            {/* Discount */}

                                <div className='flex mt-4'>
                                    <div>
                                        <input type="text" className='py-2 px-20 ml-1 border' placeholder='Discount Code' />
                                    </div>
                                    <div>
                                        <input type="button" value="Apply" className='px-4 text-xs py-3 bg-black text-white ml-4 rounded-sm' />
                                    </div>
                                </div>
                            {/* Total */}

                                <div className='flex mt-5 font-semibold'>
                                    <div>
                                        <h3 className='text-lg ml-6'>Total</h3>
                                    </div>
                                    <div className='ml-72 '>
                                        <h1 className='text-lg '>$122.00</h1>
                                    </div>
                                </div>
                            
                            {/* radio btn */}

                                <div className='mt-5'>
                                    <div>
                                        <input type="radio" value="Direct bank transfer" name="bank" id="" className='text-black' />
                                        <label for="html" className='ml-2 text-neutral-500	 text-sm'>Direct bank transfer</label>
                                    </div>
                                    <div className='mt-2'>
                                        <input type="radio" value="Direct bank transfer" name="bank" id="" className='text-black' />
                                        <label for="html" className='ml-2 text-neutral-500	 text-sm'>Cash on delivery</label>
                                    </div>


                                </div>
                            {/* checkout btn */}

                                <div className='flex mt-3'>
                                    <div className='text-neutral-500  text-sm'>
                                        <div className='ml-2'>
                                            <span>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our</span>
                                            <button className='ml-1'> <u>privacy policy</u></button>
                                        </div>
                                        <div className='mt-5'>
                                            <input type="checkbox" name="" id="" />
                                            <label for="html" className='ml-2'>I have read and agree to the website
                                                <button className='ml-1'><u>terms and conditions.</u></button>
                                            </label>
                                        </div>
                                        {/* place order btn */}
                                        
                                        <div>
                                            <input type="button" value="Place order" className='px-44 mt-10 text-xs py-3 bg-black text-white ml-4 rounded-sm mr-16' />
                                            {/* <button className='px-44 mt-10 text-xs py-3 bg-black text-white ml-4 rounded-sm mr-16'>Place  order</button> */}
                                        </div>



                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Checkout
