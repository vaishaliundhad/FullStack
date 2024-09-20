// import React from 'react'
// import asset9 from '../assets/asset9.jpg'
// import asset10 from '../assets/asset10.jpg'

// const Card = () => {
//   return (
//     <div className='grid grid-cols-2 gap-5 m-10 rounded-3xl'>
//     <div className='h-full relative'>
//         <img src={asset10} className='h-full' alt="" />
//         <div className='absolute left-0 botton-3 left-1/4 right-1/4 text-center'>
//            <h4>HOT ACCESSORIES</h4>
//            <h1>Smart Assistant</h1>
//         </div>

//       </div>

//       <div className='h-full'>
//         <img src={asset9} className='h-full' alt="" />
//       </div>
//     </div>
//   )
// }

// export default Card


import React from 'react';
import asset9 from '../assets/asset9.jpg'
import asset10 from '../assets/asset10.jpg'

const Card = () => {
  return (
    <div className='flex container-section gap-7 max-md:block m-10 overflow-hidden'>
        <div className='relative'>
          <img src={asset10} className="h-[649px] w-[683px] rounded-2xl" alt="" />
          <div className='absolute bottom-3 left-1/4 right-1/4 text-center'>
            <span className='text-xs font-bold'>HOT ACCESSORIES</span>
            <h4 className='text-2xl font-extrabold mb-5 max-lg:text-xl'>Smart Assistant</h4>
            <button className='mb-5 rounded-full py-2 px-6' style={{backgroundColor: "var(--primary-color)"}}>Shop now</button>
          </div>
        </div>
        <div className='relative'>
          <img src={asset9} className="h-[649px] w-[683px] rounded-2xl" alt="" />
          <div className='absolute bottom-3 left-1/4 right-1/4 text-center'>
            <span className='text-xs font-bold'>FAST AND FREE SHIPPING</span>
            <h4 className='text-2xl font-extrabold mb-5 max-lg:text-xl'>True Earbuds</h4>
            <button className='mb-5 rounded-full py-2 px-6' style={{backgroundColor: "var(--primary-color)"}}>Shop now</button>
          </div>
        </div>
      </div>
      )
}

      export default Card