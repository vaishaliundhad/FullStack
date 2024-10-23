import React from 'react'
import ComD from './ComD'

const ComC = (props) => {
  return (
    <div>
         <h1>This is a Components B{props.name}</h1>
         <ComD name={props.name}/>
    </div>
  )
}

export default ComC
