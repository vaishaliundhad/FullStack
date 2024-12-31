
// import { useState } from "react";
// import { AnimalList } from "./Data";
// import { GrPrevious } from "react-icons/gr";
// import { GrNext } from "react-icons/gr";

// // import 'bootstrap/dist/css/bootstrap.min.css';


// const State = () => {
//     const [index, setIndex] = useState(0);
//     const [add,setadd]=useState(false)

//     console.log(index);

//     // button hide & show

//     const [toggle, settoggle] = useState(false);

//     // const [show, setshow]=useState(true);

//     console.log(AnimalList);

//     const List = [AnimalList[index]];

//     const Next = () => {
//         if (index == 9) {
//             setIndex(0);
//             setadd(!true)
//             setTimeout(() => {
//                 setadd(true)
//             },100);

//         } else {
//             setIndex((NextState) => NextState + 1);
//         }
//     };

//     const Prev = () => {
//         if (index > 0) {
//             setIndex((PrevState) => PrevState - 1);
//         } else {
//             setIndex((PrevState) => PrevState = 0)
//         }
//     }


//     // const Read = () => {
//     //     if (toggle == true) {
//     //         settoggle((toggleState) => toggleState = false);
//     //     }
//     //     else {
//     //         settoggle((toggleState) => toggleState = true);
//     //     }
//     // }

//     return (
//         <>
//             <h1 className="heading">This is State Memory Components</h1>
//             <div className="flex justify-around mt-4">
//                 <div className="self-center">
//                     <button className="bg-blue-500 px-4 py-2 rounded-md flex align-bottom text-white text-lg" onClick={Prev}>
//                     <GrPrevious className="mt-[6px] mr-2"/>  Prev
//                     </button>
//                 </div>
//                 <div className="">
//                     {List.map((item) => {
//                         return (
//                             <>
//                                 <div className=" {`${add? 'animate-slide':''}max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-900 object-cover w-[320px]`}">
//                                     <a href="#">
//                                         <img className="rounded-t-lg h-48 w-full " src={item.image} alt="" />
//                                     </a>
//                                     <div className="p-5">
//                                         <a href="#">
//                                             <h5 className="mb-2 text-xl font-bold text-center  tracking-tight text-gray-900 dark:text-white">
//                                                 {item.name}
//                                             </h5>
//                                         </a>
//                                         {
//                                             toggle  && (<p className="mb-3 font-normal text-gray-200 text-[12px] mt-7 ">
//                                                 {item.description}
//                                             </p>
//                                             )
//                                         }

//                                         <div className="flex justify-center">
//                                             <button className="inline-flex   px-2 py-2 text-sm font-medium text-white bg-blue-500 mt-[20px] rounded-lg hover:bg-blue-400 focus:ring-4 line-clamp-2"
//                                                 onClick={()=>{settoggle((toggle)=> ! toggle)}}>
//                                                     {
//                                                         toggle ? 'hide':'show more'
//                                                     }


//                                             </button>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </>
//                         );
//                     })}
//                 </div>
//                 <div className="self-center">
//                     <button
//                         className="bg-blue-500  px-4 py-2 rounded-md flex align-bottom text-white text-lg"
//                         onClick={Next}
//                     >
//                         Next <GrNext className="mt-[6px] ml-2" />
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default State;


// ****************************************************

// import React, { useState } from 'react'
// import { AnimalList } from './Data'
// import { GrPrevious } from "react-icons/gr";
// import { GrNext } from "react-icons/gr";
// import 'aos/dist/aos.css'

// const State = () => {
//     const [index, setIndex] = useState(0)
//     const [animationDirection, setAnimationDirection] = useState('slideleft');
//     const [toggle, settoggle] = useState(false);

//     const handleClick = () => {
//         if (index < AnimalList.length - 1) {
//             setAnimationDirection('slideright');
//             setIndex(index + 1);
//         } else {
//             setIndex(0);  // Reset to first item when reaching the end
//         }
//     }

//     const handlePrevious = () => {
//         if (index > 0) {
//             setAnimationDirection('slideleft');
//             setIndex(index - 1);
//         } else {
//             setIndex(AnimalList.length - 1); // Go to the last item when at the first item
//         }
//     };

//     const List = [AnimalList[index]];

//     return (
//         <div>
//             <h1 className='heading'>This is State Memory Components</h1>
//             <div className='flex justify-around'>
//                 <div className='ltr'>
//                     <button
//                         className="bg-blue-500 px-4 py-2 flex items-center mt-6 text-white text-lg"
//                         onClick={handlePrevious}
//                     >
//                         <GrPrevious className="mt-[6px] mr-2" /> Prev
//                     </button>
//                 </div>
//                 <button
//                     className="bg-blue-500 px-4 py-2 flex items-center mt-6 text-white text-lg"
//                     onClick={handleClick}
//                 >
//                     Next <GrNext className="mt-[6px] ml-2" />
//                 </button>
//             </div>

//             <div className='flex flex-wrap justify-around gap-y-4'>
//                 {List.map((item) => {
//                     return (
//                         <div
//                             className={`scale-75 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-900 object-cover w-[320px] h-auto ${animationDirection === 'slideright' ? 'animate-slideright' : 'animate-slideleft'}`}
//                         >
//                             <a href="#">
//                                 <img
//                                     className="rounded-t-lg h-52 w-full object-cover object-top"
//                                     src={item.image}
//                                     alt=""
//                                 />
//                             </a>
//                             <div className="p-5">
//                                 <a href="#">
//                                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                                         {item.name}
//                                     </h5>
//                                 </a>
//                                 {toggle && <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                                     {item.description}
//                                 </p>}
//                                 <div className="flex justify-center">
//                                     <button
//                                         className="inline-flex px-2 py-2 text-sm font-medium text-white bg-blue-500 mt-[20px] rounded-lg hover:bg-blue-400 focus:ring-4 line-clamp-2"
//                                         onClick={() => { settoggle((prev) => !prev) }}
//                                     >
//                                         {toggle ? 'hide' : 'show more'}
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     )
// }

// export default State;