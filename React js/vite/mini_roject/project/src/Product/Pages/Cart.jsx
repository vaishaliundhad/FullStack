import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const CartData = useSelector((state) => state.cart)

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

export default Cart