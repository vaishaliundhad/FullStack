import React, { createContext } from 'react'
import './App.css'
import Layout from './components/Layout'

export const data= createContext('skillquode')

const obj={
    fullname:'bansi',
    age:20
}

const App = () => {
  return (
    <div>
      <data.Provider value={obj}>
        <Layout/>
      </data.Provider>
    </div>
  )
}

export default App
