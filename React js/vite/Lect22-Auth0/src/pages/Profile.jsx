import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const {user}=useAuth0()
  return (
    <div>
      <h1>This is React User Page</h1>
      {
        user.name
      }
      {
          
      }
        <img src={user.picture} alt="" />
    </div>
  )
}

export default Profile
