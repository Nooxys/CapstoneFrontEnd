import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer'
import userReducer from '../reducers/userReducer'
import subReducer from '../reducers/subReducer'
import reservationReducer from '../reducers/reservationReducer'
import reviewReducer from '../reducers/reviewReducer'

const globalReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
  subReducer: subReducer,
  reservationReducer: reservationReducer,
  reviewReducer: reviewReducer,
})

const store = configureStore({
  reducer: globalReducer,
})

export default store
