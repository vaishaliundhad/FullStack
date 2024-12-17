import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart, remove_to_wishlist } from '../../Redux/Action'

const Wishlist = () => {

  const wishData = useSelector((state) => state.cartToWish)
 
  const dispatch = useDispatch()

  console.log('wishData', wishData);


  return (
    <div>
      <h1 className=' font-bold text-xl text-center'>This is wishlist Page</h1>
      {
        wishData.map(item => {
          return (

            <ul key={item.id} className="bg-slate-100 w-[30%] h-[10%] border-2 border-black mt-4 p-4 flex flex-col items-center " >
              <li className="mb-4"><img src={item.thumbnail} alt="" className="w-40 h-40  rounded-lg" /> </li>
              <li className="text-2xl text-center mb-4">{item.title}</li>
              <li className="text-center">{item.description}</li>
              <li className="font-medium mt-4 text-lg text-green-600"> Price: ${item.price} </li>
              <li className="text-sm text-red-500"> Discount: {item.discountPercentage}% </li>
              <li className="text-sm text-gray-600">Stock: {item.stock}</li>
              <div className='flex gap-4'>
                <button  className=' bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600'  onClick={() => dispatch(add_to_cart(item))}>AddToCart</button>
                <button className=' bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600' onClick={() => dispatch(remove_to_wishlist(item.id))}>Remove</button>
              </div>

            </ul>





          )
        })
      }
    </div>
  )
}

export default Wishlist