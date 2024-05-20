import { GET_SUB, GET_SUBS, IS_LOADING_SUB } from '../actions'

const initialState = {
  subs: null,
  isLoading: false,
  singleSub: null,
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

    default:
      return state
  }
}
export default subReducer
