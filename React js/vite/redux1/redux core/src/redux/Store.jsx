import {createStore} from 'redux'
import ChocoReducer from './Reducer'


const Store = createStore(ChocoReducer)

export default Store