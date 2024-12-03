import { BUY_CHOCO } from "./Constant";
import { BUY_CAKE } from "./Constant";


let initialValue = {
    numOfChoco:10,
    numOfCake:20
}

const ChocoReducer = (state = initialValue , action) => {
    switch(action.type){
        case BUY_CHOCO: 
        console.log('ChocoReducer Called');
        return{
            ...state,
            numOfChoco:state.numOfChoco - 1
        }
        case BUY_CAKE: 
        console.log('ChocoReducer Called');
        return{
            ...state,
            numOfCake:state.numOfCake - 1
        }
        default:return state
    }
}

export default ChocoReducer