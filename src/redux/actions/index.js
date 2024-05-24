// ACTION REFERENCES -------------------------------------------------------------------------------------------------------

// export const EXAMPLE_1 = "EXAMPLE_1"
const startingURL = 'http://localhost:3001'

export const ACCESS_TOKEN = 'ACCESS_TOKEN'
export const LOGIN_ERRORS = 'LOGIN_ERRORS'
export const REGISTER_OK = 'REGISTER_OK'
export const REGISTER_ERRORS = 'REGISTER_ERRORS'
export const GET_ME = 'GET_ME'
export const IS_LOADING = 'IS_LOADING'
export const UPDATE_OK = 'UPDATE_OK'
export const UPDATE_ERRORS = 'UPDATE_ERRORS'
export const PASSWORD_OK = 'PASSWORD_OK'
export const PASSWORD_ERRORS = 'PASSWORD_ERRORS'
export const GET_SUB = 'GET_SUB'
export const GET_SUBS = 'GET_SUBS'
export const IS_LOADING_SUB = 'IS_LOADING_SUB'
export const GET_TRAINERS = 'GET_TRAINERS'
export const GET_RESERVATIONS = 'GET_RESERVATIONS'
export const IS_LOADING_RES = 'IS_LOADING_RES'
export const POST_RESERVATION_OK = 'POST_RESERVATION_OK'
export const POST_RESERVATION_ERRORS = 'POST_RESERVATION_ERRORS'
export const GET_MY_RESERVATIONS = 'GET_MY_RESERVATIONS'
export const ASSIGN_SUB_OK = 'ASSIGN_SUB_OK'
export const ASSIGN_SUB_ERRORS = 'ASSIGN_SUB_ERRORS'
export const GET_MY_SUBS = 'GET_MY_SUB'
export const GET_REVIEWS = 'GET_REVIEWS'
export const IS_LOADING_REV = 'IS_LOADING_REV'
export const GET_MY_REVIEWS = 'GET_MY_REVIEWS'
export const POST_REVIEW_OK = 'POST_REVIEW_OK'
export const POST_REVIEW_ERRORS = 'POST_REVIEW_ERRORS'
export const GET_ROLE = 'GET_ROLE'

// ACTION CREATORS --------------------------------------------------------------------------------------------------------
// Per la rimozione degli elementi da un array solitamente si utilizza l'indice dell'elemento come parametro

// export const actionEx1 = (generalParameter) => ({
//   type: EXAMPLE_1,
//   payload: generalParameter,
// });

// ACTION CREATOR CON FETCH
// export const example2 = () => {
//   return async (dispatch, getState) => {
//     try {

//       const response = await fetch(baseEndpoint + query + "&limit=20");
//       if (response.ok) {
//         const data = await response.json();
//         dispatch({
//           type: WHAT_U_NEED,
//           payload: data,
//         });
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//     }
//   };
// };

export const login = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(startingURL + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        const data = await response.json()
        const accessToken = data.accessToken
        dispatch({
          type: ACCESS_TOKEN,
          payload: accessToken,
        })
        dispatch({
          type: LOGIN_ERRORS,
          payload: false,
        })
      } else {
        const data = await response.json()
        dispatch({
          type: LOGIN_ERRORS,
          payload: data.message,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const register = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(startingURL + '/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        dispatch({
          type: REGISTER_ERRORS,
          payload: null,
        })
        dispatch({
          type: REGISTER_OK,
          payload: true,
        })
      } else {
        const data = await response.json()
        dispatch({
          type: REGISTER_ERRORS,
          payload: data.message,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getMe = (accessToken) => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING,
      payload: true,
    })
    try {
      const response = await fetch(startingURL + '/users/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_ME,
          payload: data,
        })
        dispatch({
          type: GET_ROLE,
          payload: data.role,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: IS_LOADING,
        payload: false,
      })
    }
  }
}

export const getTrainers = () => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING,
      payload: true,
    })
    try {
      const response = await fetch(startingURL + '/general/trainers', {
        method: 'GET',
      })
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_TRAINERS,
          payload: data,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: IS_LOADING,
        payload: false,
      })
    }
  }
}

export const updateMe = (accessToken, body) => {
  return async (dispatch) => {
    try {
      const response = await fetch(startingURL + '/users/me', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      if (response.ok) {
        dispatch({
          type: UPDATE_OK,
          payload: true,
        })
        dispatch({
          type: UPDATE_ERRORS,
          payload: null,
        })
      } else {
        const data = await response.json()
        dispatch({
          type: UPDATE_ERRORS,
          payload: data.message,
        })
        dispatch({
          type: UPDATE_OK,
          payload: false,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const updatePassword = (accessToken, body) => {
  return async (dispatch) => {
    try {
      const response = await fetch(startingURL + '/users/me/password', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: PASSWORD_OK,
          payload: data.message,
        })
        dispatch({
          type: PASSWORD_ERRORS,
          payload: null,
        })
      } else {
        const data = await response.json()
        dispatch({
          type: PASSWORD_ERRORS,
          payload: data.message,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSubs = () => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING_SUB,
      payload: true,
    })
    try {
      const response = await fetch(startingURL + '/general/subscriptions', {
        method: 'GET',
      })
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_SUBS,
          payload: data,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: IS_LOADING_SUB,
        payload: false,
      })
    }
  }
}

export const getSub = (id) => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING_SUB,
      payload: true,
    })
    try {
      const response = await fetch(
        startingURL + '/general/subscriptions/' + id,
        {
          method: 'GET',
        }
      )
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_SUB,
          payload: data,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: IS_LOADING_SUB,
        payload: false,
      })
    }
  }
}

export const assignSub = (token, id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        startingURL + '/subscriptions/' + id + '/users/me',
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (response.ok) {
        dispatch({
          type: ASSIGN_SUB_OK,
          payload: true,
        })
      } else {
        const data = await response.json()
        dispatch({
          type: ASSIGN_SUB_ERRORS,
          payload: data.message,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getMySubs = (accessToken) => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING_SUB,
      payload: true,
    })
    try {
      const response = await fetch(startingURL + '/subscriptions/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_MY_SUBS,
          payload: data,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: IS_LOADING_SUB,
        payload: false,
      })
    }
  }
}

export const getReservations = () => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING_RES,
      payload: true,
    })
    try {
      const response = await fetch(startingURL + '/general/reservations', {
        method: 'GET',
      })
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_RESERVATIONS,
          payload: data,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: IS_LOADING_RES,
        payload: false,
      })
    }
  }
}

export const addReservation = (accessToken, payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(startingURL + '/reservations', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        dispatch({
          type: POST_RESERVATION_OK,
          payload: true,
        })
        dispatch({
          type: POST_RESERVATION_ERRORS,
          payload: null,
        })
      } else {
        const data = await response.json()
        dispatch({
          type: POST_RESERVATION_ERRORS,
          payload: data.message,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getMyReservations = (accessToken) => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING_RES,
      payload: true,
    })
    try {
      const response = await fetch(startingURL + '/reservations/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_MY_RESERVATIONS,
          payload: data,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: IS_LOADING_RES,
        payload: false,
      })
    }
  }
}

export const addReview = (accessToken, payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(startingURL + '/reviews', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        dispatch({
          type: POST_REVIEW_OK,
          payload: true,
        })
        dispatch({
          type: POST_REVIEW_ERRORS,
          payload: null,
        })
      } else {
        const data = await response.json()
        dispatch({
          type: POST_REVIEW_ERRORS,
          payload: data.message,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAllReviews = () => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING_REV,
      payload: true,
    })
    try {
      const response = await fetch(startingURL + '/general/reviews', {
        method: 'GET',
      })
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_REVIEWS,
          payload: data,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: IS_LOADING_REV,
        payload: false,
      })
    }
  }
}

export const getMyReviews = (token) => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING_REV,
      payload: true,
    })
    try {
      const response = await fetch(startingURL + '/reviews/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_MY_REVIEWS,
          payload: data,
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: IS_LOADING_REV,
        payload: false,
      })
    }
  }
}
