import React from 'react'
import { add_to_cart, remove_to_cart,empty_cart,cart_to_whishlist } from './Constant'


const CartReducer = (state =[],action) => {
 switch(action.type){
    case add_to_cart:return[...state,  action.payload]
    case remove_to_cart:return{

    }
    case empty_cart:return{

    }
    case cart_to_whishlist:return{

    }

    default: return state
 }
}

export default CartReducer
