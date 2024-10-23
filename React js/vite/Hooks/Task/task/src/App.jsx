// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App


import react, {createContext, useState } from 'react'

import Card from './components/Card';
import Button from './components/Button';

export const theme = createContext();
export const changeMethod = createContext()
function App() {
  
  const [color1,setColor] = useState()
  const[count,setCount] = useState(true)
 
  const toggle = ()=>{
    if(count === true){
      setColor('bg-black')
      setCount(false)
    }
    else{
      setColor('bg-white')
      setCount(true)
    }
 }
  return (
    <>
    <theme.Provider value={color1}>
    <changeMethod.Provider value={toggle}>

    <Card />
    <Button/>
    </changeMethod.Provider>
    </theme.Provider>

    </>
  )
}

export default App;
