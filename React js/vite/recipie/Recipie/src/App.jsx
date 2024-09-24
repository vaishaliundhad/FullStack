import './App.css'
// import Home from './components/Home'
// import Recipie from './components/Recipie'
import Mainpage from './components/Mainpage'
import Mealinfo from './components/Mealinfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'





function App() {


  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/:mealid' element={<Mealinfo/>}/>
      </Routes>
    </BrowserRouter>





  )
}

export default App