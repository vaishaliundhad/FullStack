import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

const RouteHooks = () => {
    const navigate=useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/')}>Click from Home</button>
    </div>
  )
}

export default RouteHooks
