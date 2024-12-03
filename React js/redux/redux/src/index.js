const redux= require('redux')
const createStore=redux.createStore

// constant
const BUY_CHOCOLATE = 'BUY_CHOCOLATE'


// Redux action

function buy_chocolate(){
    return{
        type:BUY_CHOCOLATE,
        info:'first redux action'
    }
}

// intialstate for redux 

const intialState={
    NumOfChocolate:20,

}

// redux reducer

const ChocoReducer = (state= intialState, action)=>{
    switch(action.type)
    {
        case BUY_CHOCOLATE:return{
            NumOfChocolate:state.NumOfChocolate-1
        }
    }
}

// redux store

const store=createStore(ChocoReducer)
console.log(store.getState());

const unsubscribe = store.subscribe(()=>console.log(store.getState()));

store.dispatch(buy_chocolate())
unsubscribe()