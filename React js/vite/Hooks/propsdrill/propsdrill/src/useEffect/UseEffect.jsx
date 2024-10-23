import React, { Component } from 'react'
import { useState } from 'react'

function  App(){
    const[count, useEffect, setCounter]=useState(0)
    useEffect(()=>{
        console.log("components mounted");
        
    })

    function updateCount(){
        setCounter(count+1)
    }
}

const UseEffect = () => {
  return (
    <div>
      <h1>Button clicked {count}times</h1>
      <button onClick={updateCount}>Click</button>
    </div>
  )
}

export default UseEffect
