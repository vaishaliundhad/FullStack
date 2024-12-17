import React from 'react'
import { ADD_TO_WISHLIST , REMOVE_TO_WISHLIST , EMPTY_WISHLIST , WISHLIST_TO_CART, CART_TO_WISHLIST } from './Constatnt'



const WishlistReducer = (state = [] , action) => {
 switch(action.type){
    case ADD_TO_WISHLIST:{
      console.log('wishlistRducers called');
      

    }

    // case REMOVE_TO_CART:

     
    // const removeCartData = state.filter((state) => state.id !== action.payload.id);
    // console.log(removeCartData);

    // return [...removeCartData]

    case REMOVE_TO_WISHLIST:{
      const removewishlist = state.filter((item)=>(item.id !== action.payload))
      console.log('removewhishlist',removewishlist);
      return removewishlist;
    }
    
    case EMPTY_WISHLIST:{
      console.log('wishlistRducers called');

    }
    case WISHLIST_TO_CART:{
       console.log('wishlistReducer called');
       return [...state, action.payload]
       

    }

    case CART_TO_WISHLIST:{
          console.log('card to wish called');
          return(
            [...state,action.payload]
          )
          
    }


    default:return state
 }
}

export default WishlistReducer