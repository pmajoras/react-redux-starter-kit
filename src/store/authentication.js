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
const initialState = { isAuthenticated: false }
export default function authenticationReducer (state = initialState, action) {
  return action.type === AUTHENTICATION_CHANGE
    ? action.payload
    : state
}
