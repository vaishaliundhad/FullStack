import React from 'react'
// import { add_to_whishlist, remove_to_whishlist,empty_whishlist,whishlist_to_cart } from './Constant'
import { add_to_whishlist, remove_to_whishlist,empty_whishlist, whishlist_to_cart } from './Constant'

const WhishlistReduser = (state=[],action) => {
 switch(action.type){
    case add_to_whishlist:return{

    }
    case remove_to_whishlist:return{

    }
    case empty_whishlist:return{

    }
    case whishlist_to_cart:return{

    }

    default: return state
 }
}

export default WhishlistReduser

