import React from 'react'
import {useState} from 'react'

const Usestate3 = () => {
    const [count, setCount]=useState(0)

    const handleIncrease =()=>{
        console.log('call incremet');
        return setTimeout(()=> setCount(state => state+1),2000)
        
    }

    const handleDecrease=()=>{
        if(count > 0){
            console.log('call decrement');
            return setTimeout(()=>setCount(state=> state-1),2000)
        }
        else{
            setCount(count)
        }
        
    }
    
  return (
    <div className='heading'>
      <p >count={count}</p>
      <button className='btn' onClick={handleIncrease}>Increment </button>
      <button className='btn' onClick={handleDecrease}>Decrement</button>
    </div>
  )
}

export default Usestate3
