import React, { useState } from 'react'

const Condition = () => {
    const [login,setlogin]=useState(false)
  return (
    <div className='text-end'>
      {login?<h1>welcome bansi</h1>:<h1>welcome guest</h1>}
    </div>
  )
}

export default Condition
