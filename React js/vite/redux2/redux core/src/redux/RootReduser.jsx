import { ChocoReducer  , CakeReducer  } from "./Reducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    choco:ChocoReducer,
    cake:CakeReducer
})

export default RootReducer