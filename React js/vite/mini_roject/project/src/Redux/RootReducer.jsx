import CartReducer from "./CartReducer";
import WhishlistReduser from "./WhishlistReducer";

import ProductReducer from "./ProductReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    cart:CartReducer,
    wishlist:WhishlistReduser,
    product:ProductReducer
})

export default RootReducer