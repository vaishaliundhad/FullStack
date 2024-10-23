import React from 'react'
import { useState } from 'react'

const Condition1 = () => {

    const[login, setlogin] = useState(3)
  return (
    <div>
      {login==1?<h1>User1</h1>:login==2?<h1>user2</h1>:<h1>User3</h1>}
    </div>
  )
}

export default Condition1
