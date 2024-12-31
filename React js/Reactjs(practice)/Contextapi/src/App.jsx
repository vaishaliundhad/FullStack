import './App.css'
import File1 from './contextapi/File1'
import { createContext } from 'react'

export const user = createContext()

function App() {

  let users = "bansi"
  return (
    <>
      <user.Provider value={users}>
        <h1 className='heading'>This is a React Context Api</h1>
        <File1/>
      </user.Provider>
    </>
  )
}

export default App