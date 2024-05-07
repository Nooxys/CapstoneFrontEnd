import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ex1 from '../reducers/ex1'

const globalReducer = combineReducers({
  ex1: ex1,
})

const store = configureStore({
  reducer: globalReducer,
})

export default store
