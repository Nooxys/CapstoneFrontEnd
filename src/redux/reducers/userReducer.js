import {
  GET_ME,
  IS_LOADING,
  PASSWORD_ERRORS,
  PASSWORD_OK,
  UPDATE_ERRORS,
  UPDATE_OK,
} from '../actions'

const initialState = {
  user: null,
  isLoading: false,
  udpateOk: false,
  updateErrors: null,
  passwordOk: null,
  passwordErrors: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ME:
      return {
        ...state,
        user: action.payload,
      }

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }

    case UPDATE_OK:
      return {
        ...state,
        updateOk: action.payload,
      }

    case UPDATE_ERRORS:
      return {
        ...state,
        updateErrors: action.payload,
      }

    case PASSWORD_OK:
      return {
        ...state,
        passwordOk: action.payload,
      }

    case PASSWORD_ERRORS:
      return {
        ...state,
        passwordErrors: action.payload,
      }

    default:
      return state
  }
}
export default userReducer
