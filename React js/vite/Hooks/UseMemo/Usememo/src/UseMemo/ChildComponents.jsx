import React from 'react'
import { memo } from 'react'

const ChildComponents = ({add}) => {
    console.log('Childcomponents Re-Rendering');
    
  return (
    <div>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default memo(ChildComponents)
