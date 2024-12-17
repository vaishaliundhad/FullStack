import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cart_to_wishlist, remove_to_cart, empty_cart } from '../../Redux/Action'
import jsondata from '../../data.json'

const Cart = () => {

  const CartData = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className=' font-bold text-xl text-center'>This is cart Page</h1>
      <div className="flex flex-wrap justify-between ml-6 mr-6">
        {
          CartData.map(item => {
            return (

              <ul key={item.id} className="bg-slate-100 w-[30%] h-[10%] border-2 border-black mt-4 p-4 flex flex-col items-center " >
                <li className="mb-4"><img src={item.thumbnail} alt="" className="w-40 h-40  rounded-lg" /> </li>
                <li className="text-2xl text-center mb-4">{item.title}</li>
                <li className="text-center">{item.description}</li>
                <li className="font-medium mt-4 text-lg text-green-600"> Price: ${item.price} </li>
                <li className="text-sm text-red-500"> Discount: {item.discountPercentage}% </li>
                <li className="text-sm text-gray-600">Stock: {item.stock}</li>
                <div className='flex gap-4'>
                  <button className=' bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600' onClick={() => dispatch(cart_to_wishlist(item))}>AddtoWhish</button>
                  <button className=' bg-red-400 text-white px-4 py-2 mt-4 rounded hover:bg-red-600' onClick={() => dispatch(remove_to_cart(item))}>Remove</button>
                </div>

              </ul>
            )

          })
        }
      </div>
    </div>
  )
}

export default Cart