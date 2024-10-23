import React from 'react'
import Reducer from './Reducer'
import { useReducer } from 'react'

const UseReducer = () => {

    const [state, dispatch] = useReducer(Reducer, { age: 20, count: 40 })
    console.log('useReducer', state.age);


    return (
        <div className='text-center'>
            <h1 className=' py-6 bg-cyan-200 text-3xl'>This is useReducer Hook In React</h1>
            <p className='mt-2 ml-6'>Age: {state.age}</p>
            <p className='mt-2 mb-2'>Count : {state.count}</p>
            <button className='px-6 py-4 bg-sky-300 border rounded-full' onClick={() => dispatch('IncrementAge')}>Age Increment</button>
            <button className='px-6 py-4 bg-sky-300 border rounded-full ml-6 ' onClick={() => dispatch('DecrementAge')}>Age Decrement</button>
            <button className='px-6 py-4 bg-sky-300 border rounded-full ml-6' onClick={() => dispatch('IncrementCount')}>Count Increment</button>
            <button className='px-6 py-4 bg-sky-300 border rounded-full ml-6' onClick={() => dispatch('DecrementCount')}>Count Decrement</button>
        </div>
    )
}

export default UseReducer
