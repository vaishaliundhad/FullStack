import React from 'react'
import { IoHome } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import InnerBanner from '../helpers/InnerBanner'

// const Error = () => {
//   return (
   
//   )
// }

const Error = () => {
  const navigate=useNavigate()
return (
  <div className='text-center '>
      <div className='p-20'>
        <h1 className='text-5xl mt-20'>🤷‍♀️Page Not Found!!!😢</h1>
      </div>
      <div className=''>
   
        <button onClick={() => navigate('/')} className='w-40  h-16 rounded-full text-white bg-fuchsia-950'>Back to Home</button>
      </div>

    </div>
)
}

export default Error
