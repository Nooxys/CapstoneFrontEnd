// N.B.
// Se devi modificare un elemento dello state senza sovrascrivere l'intero stato,
// NON PUOI USARE I METODI MUTATIVI DEGLI ARRAY,
// negli altri casi basta fare un semplice "override"

import { LOGIN, IS_LOADING } from '../actions'

const initialState = {
  accessToken: '',
  isLoading: false,
}

const ex1 = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AN_ELEMENT_IN_ARRAY':
      return {
        ...state,
        property1: [...state.property1, action.payload],
      }

    case 'REMOVE_AN_ELEMENT_FROM_ARRAY':
      return {
        ...state,
        property1: state.property1.filter((name, i) => {
          return i !== action.payload
        }),
      }

    case LOGIN:
      return {
        ...state,
        accessToken: action.payload,
      }

    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    default:
      return state
  }
}
export default ex1
