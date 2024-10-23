import React from 'react'

const Nesting_components = () => {
    return (
        <div>
            <Dish />
            <Dish />
            <Dish />
        </div>
    )
}

const Dish = () => {
    return (
        <>
            <Image />
            <Heading />
            <Price />
        </>
    )

}

const Image = () => {
    return (
        <div className='w-[100%] inline-block'>
            <img className='float-left w-[50%]' src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" alt="" />

        </div>

    )
}

const Heading = () => {
    return (
        <div>
            <h1 className='mr-[1100px] text-2xl '>Full Dishes</h1>
        </div>
    )
}

const Price = () => {
    return (
        <div>
            <p className='mr-[1160px] text-md  text-blue-800'>Rs.325</p>
        </div>
    )
}

export default Nesting_components
