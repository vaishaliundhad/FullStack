import React from 'react'

const LogoutUser =()=>{
  localStorage.removeItem('users')
}

const Home = () => {
  return (
    <div >
      <h1 className='heading text-3xl'>🤷welcome to home page🤷‍♀️</h1>
    </div>
  )
}

export default Home
