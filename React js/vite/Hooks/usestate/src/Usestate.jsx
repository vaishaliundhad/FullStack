import React from 'react'
import { useState } from 'react'

const Usestate = () => {
    const [count, setCount]=useState(0)

    const handleIncrease=()=>{
        setCount(count+1)
    }
    const handleDecrease=()=>{
        setCount(count-1)
    }
  return (
    <div className='heading'>
      <p>Count ={count}</p>
      <button className='btn' onClick={handleIncrease}>Increment</button>
      <button className='btn' onClick={handleDecrease}>Decrement</button>
    </div>
  )
}

export default Usestate
