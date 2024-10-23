import React from 'react'
import ComA from './ComA'
import { createContext } from 'react'

export const data =createContext()
export const data1 = createContext()

let firstName = "undhad"
let lastName="bansi"
let age=21
const Main = () => {
  return (
    <div>
        <data.Provider value={profile}>
            {children}
        </data.Provider>
      
    </div>
  )
}

export default Main
