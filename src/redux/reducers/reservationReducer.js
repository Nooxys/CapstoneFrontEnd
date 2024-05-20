import {
  GET_RESERVATIONS,
  IS_LOADING_RES,
  POST_RESERVATION_ERRORS,
  POST_RESERVATION_OK,
} from '../actions'

const initialState = {
  reservations: null,
  isLoading: false,
  newReservationOk: false,
  newReservationErrors: null,
}

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
      }

    case IS_LOADING_RES:
      return {
        ...state,
        isLoading: action.payload,
      }

    case POST_RESERVATION_OK:
      return {
        ...state,
        newReservationOk: action.payload,
      }

    case POST_RESERVATION_ERRORS:
      return {
        ...state,
        newReservationErrors: action.payload,
      }

    default:
      return state
  }
}
export default reservationReducer
