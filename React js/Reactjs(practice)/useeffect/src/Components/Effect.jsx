import React from 'react'
import { useState , useEffect } from 'react'

const Effect = () => {

    const [count , setCount] = useState(0)
    const [name , setName] = useState('')


    const handleState = () => {
        setCount(prev => prev + 1)
    }

    // useEffect(() => {
    //     alert(`click for ${count}`)
    // })

    // useEffect(() => {
    //     alert(`click for ${count}`)
    // } , [])

    // useEffect(() => {
    //     alert(`click for ${count}`)
    // } , [count])

    // useEffect(() => {
    //     alert(`click for ${count}`)
    // } , [count])

    // useEffect(() => {
    //     alert(`click for ${count}`)
    // } , [count , name])

    // const handleChange = (e) => {
    //     setName(e.target.value)
    // }

  //   useEffect(() => {
  //     setCount(prev => prev + 1)
  //     return () => {
  //         alert (`click ${count}`)
  //     }
  // },[])

  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={handleState}>Click</button>

        <p>Name : </p>
        <input type="text" onChange={handleChange} className='border-2 border-black' />
    </div>
  )
}

export default Effect