import React from 'react'
import Usercontext from './Usercontext'
import { useState } from 'react'

const UsercontextProvider = ({children}) => {
    const [user , setuser]=useState({});
  return (
    <div>
     <Usercontext.Provider value={{user,setuser}}>
             {children}
     </Usercontext.Provider>
    </div>

  )
}

export default UsercontextProvider
