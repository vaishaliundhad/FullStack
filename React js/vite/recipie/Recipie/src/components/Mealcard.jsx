import React from 'react'
import { NavLink } from 'react-router-dom';

const Mealcard = ({detail}) => {
    console.log(detail);

    return (
        <div className='meals'>
            {!detail ? "" : detail.map((curItem) => {
                return (

                    <div className='mealimg'>
                        <img src={curItem.strMealThumb} />
                        <p>{curItem.strMeal}</p>
                        <NavLink to={`/${curItem.idMeal}`}><button>Recipie</button></NavLink>
                    
                    </div>
                )


            })


            }
        </div>
    )
}

export default Mealcard