import CartReducer from "./CartReducer";
import WishlistReducer from "./WishlistReducer";
import ProductReducer from "./ProductReducer";
import { cartToWishReducer } from "./CartReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    cart:CartReducer,
    cartToWish:cartToWishReducer,
    wishlist:WishlistReducer,
    product:ProductReducer
})

export default RootReducer