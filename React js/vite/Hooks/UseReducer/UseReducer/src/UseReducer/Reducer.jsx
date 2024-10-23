import React from 'react'

const Reducer = (state, action) => {
    switch (action) {
        case 'IncrementAge': return {
            ...state,
            age: state.age + 1
        }
        case 'DecrementAge':return{
            ...state,
            age: state.age-1
        }
        case 'IncrementCount':return{
            ...state,
            count:state.count+1
        }
        case 'DecrementCount':return{
            ...state,
            count:state.count-1
        }
        default: return state
    }
}

export default Reducer
