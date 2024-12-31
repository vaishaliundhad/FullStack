import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {

  const { id } = useParams()

  const career = useLoaderData()

  return (
    <div>
      <h1 className='heading text-xl'>This is Details Page {id}</h1>
      <div className='container'>
        <h2 className='text-center'>{career.title}</h2>
        <h1><img src={career.image} className="h-56 flext ml-[420px] mt-2 " alt="" /></h1>

      </div>
    </div>
  )
}

export const CareerDetailsData = async ({ params }) => {
  const { id } = params
  const res = await fetch("https://fakestoreapi.com/products/" + id)

  if (!res.ok) {
    throw Error('Data Not Available!!!!!!!')
  }


  return res.json()
}

export default CareerDetails
