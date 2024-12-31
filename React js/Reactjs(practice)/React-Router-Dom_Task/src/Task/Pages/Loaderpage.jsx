import React from 'react'
import { useLoaderData , useParams } from 'react-router-dom';


const Loaderpage = () => {
    
  const {id} = useParams ()
  const loader = useLoaderData()
    
  return (
    <div>
      <h1 className='heading'>This is Loader page</h1>
       <div>
        <h2 className='text-center'>{loader.title}</h2>
        <h1><img src={loader.image}className='h-56 flex ml-[420px] mt-2' alt="" /></h1>
        <h2 className='text-center line-clamp-2'>{loader.description}</h2>
       </div>
    </div>
  )
}

export const LoaderpageData = async ({ params })=>{
  const { id } = params
  const res= await fetch("https://fakestoreapi.com/products/" + id)

  return res.json()
}
export default Loaderpage


