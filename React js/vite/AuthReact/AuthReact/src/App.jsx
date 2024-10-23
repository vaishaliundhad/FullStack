import './App.css'
import { BrowserRouter as  Router, Routes, Route  } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
    <Router>
     <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        
      </Routes>
    </Router>
  
    </>
  )
}

export default App
