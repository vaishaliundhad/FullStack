import { BUY_CHOCO } from "./Constant";
import { BUY_CAKE } from "./Constant";

let initialValueChoco={
    numOfChoco:10
}

let initialValueCake={
  numifCake:20
}

// let initialValue = {
//     numOfChoco:10,
//     numOfCake:20
// }

export  const ChocoReducer = (state = initialValueChoco , action) => {
    switch(action.type){
        case BUY_CHOCO: 
        console.log('ChocoReducer Called');
        return{
            ...state,
            numOfChoco:state.numOfChoco - 1
        }

        default:return state
    
    }
}
  
export  const CakeReducer =(state = initialValueCake , action)=>{
    switch(action.type){
       case BUY_CAKE:
        console.log('chocoreduser called');
        return{
            ...state,
            numOfChoco:state.numOfCake - 1
        }
        
        default:return state
        
    }

}