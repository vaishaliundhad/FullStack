import RootReduser from './RootReduser'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'

const Store = configureStore({
    reducer:RootReduser
})

export default Store