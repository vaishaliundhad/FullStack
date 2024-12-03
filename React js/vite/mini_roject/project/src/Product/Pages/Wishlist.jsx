// import React from 'react'

// const Wishlist = () => {
//   return (
//     <div>
//       <h1>This is wishlist Page</h1>
//     </div>
//   )
// }

// export default Wishlist

import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {

  const Wishlist= useSelector((state) => state.cart)

  return (
    <div>
      <h1>This is cart Page</h1>
      {
          CartData.map(item => {
            return (
              <ul key={item.id} className='bg-gray-500 border-2 '>
                <li>{item.name}</li>
                <li>{item.color}</li>
                <li>{item.price}</li>
              </ul>
            )
          })
        }
    </div>
  )
}

export default Wishlist