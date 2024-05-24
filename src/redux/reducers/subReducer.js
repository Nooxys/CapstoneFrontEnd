import {
  ASSIGN_SUB_ERRORS,
  ASSIGN_SUB_OK,
  GET_MY_SUBS,
  GET_SUB,
  GET_SUBS,
  IS_LOADING_SUB,
  POST_SUB_ERRORS,
  POST_SUB_OK,
} from '../actions'

const initialState = {
  subs: null,
  isLoading: false,
  singleSub: null,
  assignOK: false,
  assignErrors: null,
  mySubs: null,
  newSubOk: false,
  newSubErrors: null,
}

const subReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBS:
      return {
        ...state,
        subs: action.payload,
      }

    case IS_LOADING_SUB:
      return {
        ...state,
        isLoading: action.payload,
      }

    case GET_SUB:
      return {
        ...state,
        singleSub: action.payload,
      }

    case ASSIGN_SUB_OK:
      return {
        ...state,
        assignOK: action.payload,
      }

    case ASSIGN_SUB_ERRORS:
      return {
        ...state,
        assignErrors: action.payload,
      }

    case GET_MY_SUBS:
      return {
        ...state,
        mySubs: action.payload,
      }

    case POST_SUB_OK:
      return {
        ...state,
        newSubOk: action.payload,
      }

    case POST_SUB_ERRORS:
      return {
        ...state,
        newSubErrors: action.payload,
      }

    default:
      return state
  }
}
export default subReducer
