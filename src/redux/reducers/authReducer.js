import {
  ACCESS_TOKEN,
  LOGIN_ERRORS,
  REGISTER_ERRORS,
  REGISTER_OK,
} from '../actions'

const initialState = {
  accessToken: '',
  loginErrors: null,
  registerOk: false,
  registerErrors: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      }

    case LOGIN_ERRORS:
      return {
        ...state,
        loginErrors: action.payload,
      }

    case REGISTER_OK:
      return {
        ...state,
        registerOk: action.payload,
      }

    case REGISTER_ERRORS:
      return {
        ...state,
        registerErrors: action.payload,
      }

    default:
      return state
  }
}
export default authReducer
