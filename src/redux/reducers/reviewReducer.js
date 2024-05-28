import {
  GET_MY_REVIEWS,
  GET_REVIEWS,
  IS_LOADING_REV,
  POST_REVIEW_ERRORS,
  POST_REVIEW_OK,
} from '../actions'

const initialState = {
  reviews: null,
  myReviews: null,
  isLoading: false,
  newReviewOk: false,
  newReviewErrors: null,
}

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      }

    case GET_MY_REVIEWS:
      return {
        ...state,
        myReviews: action.payload,
      }

    case IS_LOADING_REV:
      return {
        ...state,
        isLoading: action.payload,
      }

    case POST_REVIEW_OK:
      return {
        ...state,
        newReviewOk: action.payload,
      }

    case POST_REVIEW_ERRORS:
      return {
        ...state,
        newReviewErrors: action.payload,
      }

    default:
      return state
  }
}
export default reviewReducer
