import React from 'react'
import {data,data1} from './Main'
import { useContext } from 'react'

const ComD = () => {
    const profile= useContext(data)
    const age = useContext(data1)
  return (
    <div>
      <h1 className='heading'>This is a Components D{profile.firstName}{profile.lastName }</h1>
    </div>
  )
}

export default ComD
