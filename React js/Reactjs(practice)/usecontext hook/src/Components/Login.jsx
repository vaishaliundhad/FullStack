import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import Usercontext from '../Context/Usercontext'



const Login = () => {
  
    const [username , setusername]=useState('')
    const [password , setpassword]=useState('')

    const {setUser}=useContext(Usercontext)

    const handlesubmit = (e) => {
      e.prevendefault()
      setUser({username , password})
    }

  return (

    <div>
      <input type="text" placeholder='username' value={username} onChange={(e) => setusername(e.target.value)} />
      <input type="password" placeholder='password' value="password" onChange={(e)=>setpassword(e.target.value)} />
      <button type="button" className='btn' onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login
