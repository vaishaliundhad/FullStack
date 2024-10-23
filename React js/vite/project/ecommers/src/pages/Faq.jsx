


// import React from 'react'
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import { GoChevronDown } from "react-icons/go";
// import { GoArrowUpRight } from "react-icons/go";
// import InnerBanner from '../helpers/InnerBanner'
// import FaqAccordian from '../helpers/FaqAccordian'
// import { NavLink} from 'react-router-dom';

// const Faq = () => {
//   return (
//     <div>
//       <InnerBanner innerBannerTile="FAQ" innerBannerBreadcrumbs = "FAQ"/>
      
//       <div className='containerSection block lg:flex gap-5 py-10'>
//         {/* Accordian */}
//         <div className='lg:pr-10 xl:pr-24 lg:w-[65%] xl:w-[70%]'>
//           <h1 className='text-3xl mb-8'>Shopping Information</h1>
//           <Accordion  className='accordian' defaultExpanded>
//             <AccordionSummary expandIcon={<GoChevronDown className='text-2xl text-black' />} aria-controls="panel1-content" id="panel1-header" className='font-semibold hover:text-red-500'>Pellentesque habitant morbi tristique senectus et netus?</AccordionSummary>
//             <AccordionDetails className='text-sm tracking-wider px-0'>
//               The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//             </AccordionDetails>
//           </Accordion>
//           <FaqAccordian FaqTitle="How much is shipping and how long will it take?" />
//           <FaqAccordian FaqTitle="How long will it take to get my package?" />
//           <FaqAccordian FaqTitle="Branding is simply a more efficient way to sell things?" />

//           <h1 className='text-3xl my-8'>Payment Information</h1>
//           <FaqAccordian FaqTitle="Pellentesque habitant morbi tristique senectus et netus?" />
//           <FaqAccordian FaqTitle="How much is shipping and how long will it take?" />
//           <FaqAccordian FaqTitle="How long will it take to get my package?" />
//           <FaqAccordian FaqTitle="Branding is simply a more efficient way to sell things?" />

//           <h1 className='text-3xl my-8'>Order Returns</h1>
//           <FaqAccordian FaqTitle="Pellentesque habitant morbi tristique senectus et netus?" />
//           <FaqAccordian FaqTitle="How much is shipping and how long will it take?" />
//           <FaqAccordian FaqTitle="How long will it take to get my package?" />
//           <FaqAccordian FaqTitle="Branding is simply a more efficient way to sell things?" />
//         </div>
//         <div className='bg-[#f2f2f2] lg:w-[40%] xl:w-[35%] h-fit p-6 md:p-14 lg:p-8 xl:p-12 rounded-lg mt-8'>
//           <h1 className='text-3xl mb-4 md:mb-6'>Have a question</h1>
//           <p className='text-sm tracking-wider text-gray-500'>If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative.</p>
//           <p className='text-sm tracking-wider text-gray-500 my-4 md:my-8'>Please allow 06 - 12 business days from the time your package arrives back to us for a refund to be issued.</p>
//           <div className='flex items-center gap-5'>
//             <NavLink to="/contact" className='btn btnDark rounded'>Contact Us</NavLink>
//             <div className='flex items-center underline underline-offset-8 hover:text-red-500'>
//               <a href="" className='text-sm'>Live Chat</a>
//               <GoArrowUpRight className='ml-1' />
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>

//   )
// }

// export default Faq