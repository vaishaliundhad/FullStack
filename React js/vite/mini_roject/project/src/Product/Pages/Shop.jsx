import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductReducer from '../../Redux/ProductReducer'
import { add_to_cart } from '../../Redux/Constant'

const Shop = () => {

  const ProductData = useSelector((state) => state.product)
  const cartData = useSelector((state) => state.cart)

  console.log('ProductData', ProductData);
  console.log('cartData', cartData);

  const product = {
    id: 1,
    name: 'Mobile',
    color: 'black',
    price: 50000
  }

  const dispatch = useDispatch()


  return (
    <div>
      <h1>This is Product Page</h1>
      <button onClick={() => dispatch(ProductReducer(product))}>Click For Action</button>
      {
        ProductData.map(item => {
          return (
            <ul key={item.id} className='bg-gray-500 border-2 '>
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
              <button onClick={() => dispatch(add_to_cart(item))}>ADDTOCART</button>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Shop