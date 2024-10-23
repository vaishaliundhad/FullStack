import React from 'react'
import { useState } from 'react'

const Task2 = () => {
    const[login,setlogin]=useState(3)
  return (
    <div> 
      {login==1?<h1 className='bg-orange-900 py-4 text-white'>components 1</h1>:login==2?<h1 className='bg-orange-900 py-4 text-white'>Components 2</h1>:<h1 className='bg-orange-900 py-4 text-white'>Components 3</h1>}
    </div>
  )
}

export default Task2
