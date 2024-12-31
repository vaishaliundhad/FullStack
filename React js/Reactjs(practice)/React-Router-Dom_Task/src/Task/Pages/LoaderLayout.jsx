import React from 'react'
import { Outlet } from 'react-router-dom'

const LoaderLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default LoaderLayout
