import './App.css'
import UsercontextProvider from './Context/UsercontextProvider'
// import Login from './components/login';
// import Profile from './components/Profile';
import Card from './Components/Card'
import ThemeButton from './Components/ThemeButton'


function App() {


  return (
    <>
      <h1 className='heading'>This is a React Context Api</h1>
      <UsercontextProvider >
        {/* <Login />
        <Profile /> */}
        <Card/>
        <ThemeButton/>
      </UsercontextProvider>
    </>
  )
}

export default App