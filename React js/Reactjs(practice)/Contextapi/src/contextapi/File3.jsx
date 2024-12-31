import React from 'react'
import { user } from '../App'


const File3 = () => {
  return (
    <div>
      <user.Consumer>
        {
          (item) => {
            return (
              <span>{item}</span>
            )
          }
        }
      </user.Consumer>
    </div>
  )
}

export default File3