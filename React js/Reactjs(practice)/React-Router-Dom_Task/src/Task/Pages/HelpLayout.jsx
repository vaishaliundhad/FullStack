import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-center text-xl font-bold'>helplayout</h1>
      <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus consequatur pariatur modi necessitatibus dolorum magni minima accusamus nostrum nesciunt doloribus quia, ullam iste consequuntur possimus obcaecati assumenda commodi fuga non.</p>
      <nav className='mt-10 text-center mb-4'>
        <Link to="faq" className='btn bg-black p-2'>Faq</Link>
        <Link to="contact" className='btn bg-black  p-2'>Contactus</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default HelpLayout
