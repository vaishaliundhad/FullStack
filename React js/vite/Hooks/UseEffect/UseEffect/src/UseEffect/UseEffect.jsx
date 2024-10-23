import React from 'react'
import { useEffect , useState } from 'react'

const UseEffect= () => {

    const [count , setCount] = useState(0)

    useEffect(() => {
        console.log('This is React Hooks');
    } , [count])

  return (
    <div className='text-center'>
      <h1 className='text-4xl bg-fuchsia-800 py-4'>This is react useEffect Hook</h1>
        <p className='mt-2 text-2xl'>Count : {count}</p>
        <button className='text-2xl py-2 px-10 mt-4 bg-fuchsia-400 border rounded-lg' onClick={() => setCount(count  +  1)}>click</button>
    </div>
  )
}

export default UseEffect