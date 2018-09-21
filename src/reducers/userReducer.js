// set up types file later so that switch/case checks for variable, not string literal
// import { UPDATE_ANIMAL } from '../types';

const initialUserState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
}

export default function userReducer(state = initialUserState, action) {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }
    case 'AUTHENTICATING_USER':
      return { ...state, authenticatingUser: true }
    case 'AUTHENTICATED_USER':
      return { ...state, authenticatingUser: false }
    case 'FAILED_LOGIN':
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
      }
    default:
      return state
  }
}