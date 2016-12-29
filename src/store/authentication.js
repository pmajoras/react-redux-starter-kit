import authenticationDataService from '../core/authenticationDataService'
import reactRouterHelper from '../core/reactRouterHelper'

// ------------------------------------
// Constants
// ------------------------------------
export const AUTHENTICATION_CHANGE = 'AUTHENTICATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function authenticationChange (authentication = { isAuthenticated: false }) {
  return {
    type: AUTHENTICATION_CHANGE,
    payload: authentication
  }
}

export const authenticate = (username, password) => {
  return (dispatch, getState) => {
    return authenticationDataService.authenticate(username, password)
      .then((authenticationObject) => {
        dispatch(authenticationChange(authenticationObject))
        reactRouterHelper.redirectToHome()
      })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const AUTHENTICATION_STORAGE_STATE = 'DASHBOARD_AUTH_STATE'

let initialState
try {
  let initialStateString = localStorage.getItem(AUTHENTICATION_STORAGE_STATE)
  initialState = initialStateString ? JSON.parse(initialStateString) : { isAuthenticated: false }
} catch (error) {
  console.log('error', error)
  initialState = { isAuthenticated: false }
}

export default function authenticationReducer (state = initialState, action) {
  let newState

  if (action.type === AUTHENTICATION_CHANGE) {
    newState = action.payload
    localStorage.setItem(AUTHENTICATION_STORAGE_STATE, JSON.stringify(newState))
  } else{
    newState = state
  }

  return newState
}
