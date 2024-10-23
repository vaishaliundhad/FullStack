import React from 'react'
import { useState } from 'react'


const Usestate4 = () => {
    const [count, setCount] = useState(0)

    const incre = () => {
        setCount(count + 1)

    }
    const decre = () => {
        setCount(count - 1)

    }
    return (
        <div>
            <h1 className='py-6 bg-fuchsia-700 text-center text-white text-xl'>Button Clicked {count} times</h1>
            <div className='text-center'>
                <button className='btn' onClick={incre}>Increment</button>
                <button className='btn' onClick={decre}>Decrement</button>
            </div>
        </div>
    )
}

export default Usestate4
