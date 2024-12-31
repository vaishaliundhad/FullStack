import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div>
      <h1>Help Layout</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat repellendus deleniti itaque aut recusandae praesentium ut ratione maiores eligendi, laborum veniam alias enim necessitatibus hic excepturi illum atque quaerat?</p>
      <nav>
        <Link to="faq">Faq</Link>
        <Link to="contact">ContactUs</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default HelpLayout
