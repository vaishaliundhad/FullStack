import React, { useState } from 'react'
import Mealcard from './Mealcard'

const Mainpage = () => {

  const [data, setData] = useState()
  const [search, setsearch] = useState()
  const [msg, setMsg] = useState("")

  const handleInput = (event) => {
    setsearch(event.target.value)
  }

  const myFun = async () => {
    if (search == "") {
      setMsg("please enter something")
    }
    else {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      const jsonData = await get.json()
      console.log(jsonData.meals);
      setData(jsonData.meals)
    }


  }
  // console.log(data);

  return (
    <>
      <h1 className='heading'>FOOD RECIPIE APP</h1>
      <div className='container'>
        <div className='searchbar'>
          <input type="text" placeholder='Enter Dishes' onChange={handleInput} />
          <button onClick={myFun}>Search</button>

        </div>
        <h4>{msg}</h4>
        <div>
          <Mealcard detail={data} />
        </div>
      </div>
    </>
  )
}

export default Mainpage
