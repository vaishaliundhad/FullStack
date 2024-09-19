import React, { useState } from 'react'

function Fun({fun,children,setMethod}) {
    const handleClick = (event)=>{
      console.log(event);
    }
    return (
  <>
    <h1>this is fun component</h1>
    {children}
    <p onClick={handleClick}>{fun}</p>
  </>
  )
}

export default Fun
