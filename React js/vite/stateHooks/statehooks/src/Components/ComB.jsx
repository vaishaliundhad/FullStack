import React from 'react'
import ComC from './ComC'

const ComB = () => {
  return (
    <div>
         <h1>This is a Components B{props.name}</h1>
         <ComC name={props.name}/>
    </div>
  )
}

export default ComB
