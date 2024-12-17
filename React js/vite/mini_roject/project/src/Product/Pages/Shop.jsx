import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { product_set } from '../../Redux/ProductAction'
import { add_to_cart } from '../../Redux/Action'
import jsondata from '../../data.json'

const Shop = () => {

  const ProductData = useSelector((state) => state.product)
  const cartData = useSelector((state) => state.cart)

  console.log('ProductData', ProductData);
  console.log('cartData', cartData);

  const product = [
    {
      id: 1,
      name: 'Mobile',
      color: 'black',
      price: 50000
    },
    {
      id: 2,
      name: 'Television',
      color: 'black',
      price: 50000
    },
    {
      id: 3,
      name: 'Laptop',
      color: 'black',
      price: 50000
    },
    {
      id: 4,
      name: 'Desktop',
      color: 'black',
      price: 50000
    }

  ]

  const dispatch = useDispatch()

  return (
    <div>
      <h1 className=' font-bold text-xl text-center'>This is Product Page</h1>
      <button className='btn' onClick={() => dispatch(product_set(product))}>Click For Action</button>


      {/* {
        ProductData.flat().map(item => {
          return (
            <ul key={item.id} className='bg-gray-500 border-2 '>
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
              <button className='btn' onClick={() => dispatch(add_to_cart(item))}>ADDTOCART</button>
            
            </ul>
          )
        })
      } */}
{/* 
{
  jsondata.products.map(item => {
    return (
      <div className="flex flex-wrap justify-center">
        <ul key={item.id} className="bg-slate-10 w-[30%] border-2 border-black mt-4 p-4 flex flex-col items-center">
          <li className="mb-4">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-40 h-40 object-cover rounded-lg"
            />
          </li>
          <li className="text-2xl text-center mb-4">{item.title}</li>
          <li className="text-center">{item.description}</li>
          <li className="font-medium mt-4 text-lg text-green-600">Price: ${item.price}</li>
          <li className="text-sm text-red-500">Discount: {item.discountPercentage}%</li>
          <li className="text-sm text-gray-600">Stock: {item.stock}</li>
          <button
            className="btn bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
            onClick={() => dispatch(add_to_cart(item))}
          >
            ADD TO CART
          </button>
        </ul>
      </div>
    );
  })
} */}

<div className="flex flex-wrap ml-6 mr-6 justify-between">
  {jsondata.products.map((item) => {
    return (
      <ul key={item.id}  className="bg-slate-100 w-[30%] border-2 border-black mt-4 p-4 flex flex-col items-center " >
        <li className="mb-4"><img src={item.thumbnail}  alt="" className="w-40 h-40  rounded-lg"/> </li>
        <li className="text-2xl text-center mb-4">{item.title}</li>
        <li className="text-center">{item.description}</li>
        <li className="font-medium mt-4 text-lg text-green-600"> Price: ${item.price} </li>
        <li className="text-sm text-red-500"> Discount: {item.discountPercentage}% </li>
        <li className="text-sm text-gray-600">Stock: {item.stock}</li>
        <button className="btn bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600" onClick={() => dispatch(add_to_cart(item))}> ADD TO CART</button>
      </ul>
    );
  })}
</div>





    </div>
  )
}

export default Shop