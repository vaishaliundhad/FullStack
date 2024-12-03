import React from 'react'
import './Counter.css'
import {useDispatch,useSelector} from react-redux
import { Increment } from './Redux/CounterAction'
import { Decrement } from './Redux/CounterAction'

function Counter () {
  const dispatch = useDispatch()
  const useSelector = useSelector(state => state.counter)
  return (
    <div className='counter_app'>
      <h1>Counter Application</h1>
      <div className='counter'>
        <button className='increment' onclick={()=> dispatch(Increment())}>Increment</button>
          <span>{counter}</span>
         <button className='decrement' onclick={()=>dispatch(Decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
