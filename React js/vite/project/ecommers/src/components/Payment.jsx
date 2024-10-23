// import React from 'react'
// import { IoMdReturnLeft } from "react-icons/io";
// import { MdOutlinePayment } from "react-icons/md";
// import { PiShippingContainer } from "react-icons/pi";
// import { BiSupport } from "react-icons/bi";


// const Payment = () => {
//     return (

//         <div className='flex text-4xl'>
//           <div><IoMdReturnLeft/></div>
//           <div><MdOutlinePayment/></div>
//           <div><PiShippingContainer/></div>
//           <div><BiSupport/></div>
//         </div>
//     )
// }

// export default Payment
import React from 'react';
import { IoMdReturnLeft } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { PiShippingContainer } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";

const Payment = () => {
  return (
    <div className='py-14 bg-slate-100 mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-4xl mt-8 ml-20  '>

        <div className="flex items-start mt-0">
          <div className="flex items-center">
            <IoMdReturnLeft className="border rounded-full text-7xl p-2 bg-white" />
            <div className="ml-4">
              <p className="text-xl mr-16">Free Shipping</p>
              <p className="text-sm ml-2 mt-2">Free Shipping over orders $120</p>
            </div>
          </div>
        </div>

        <div className="flex items-start mt-0">
          <div className="flex items-center">
            <MdOutlinePayment className="border rounded-full text-7xl p-2 bg-white" />
            <div className="ml-4">
              <p className="text-xl mr-16">Flexible Payment</p>
              <p className="text-sm mr-8 mt-2 ">Pay with Multiple Credit Card</p>
            </div>
          </div>
        </div>

        <div className="flex items-start mt-0">
          <div className="flex items-center">
          <IoMdReturnLeft className="border rounded-full text-7xl p-2 bg-white" />
            <div className="ml-4">
              <p className="text-xl mr-16">14 Day Returns</p>
              <p className="text-sm ml-2 mt-2">Within 30 days for an exchange</p>
            </div>
          </div>
        </div>

        <div className="flex items-start mt-0">
          <div className="flex items-center">
            <BiSupport className="border rounded-full text-7xl p-2 bg-white" />
            <div className="ml-4">
              <p className="text-xl mr-16">Premium Support</p>
              <p className="text-sm mr-8 mt-2">Outstanding premium support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
