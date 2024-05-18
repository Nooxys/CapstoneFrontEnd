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
