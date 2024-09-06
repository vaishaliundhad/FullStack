import React from 'react'
import { useState } from 'react'

const Usestate2 = () => {
    const [count, setCount] = useState(0)

    const handleIncrease=()=>{
        console.log('call increment');
        return setTimeout(()=>setCount(count+1),2000)
        
    }

    const handleDecrease =()=>{
        console.log('call Decrement');
        return setTimeout(()=>setCount(count-1),2000)
        
    }
  return (
    <div className='heading'>
      <p >count={count}</p>
      <button className='btn' onClick={handleIncrease}>Increment </button>
      <button className='btn' onClick={handleDecrease}>Decrement</button>
    </div>
  )
}

export default Usestate2
