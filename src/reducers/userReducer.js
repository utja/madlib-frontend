// set up types file later so that switch/case checks for variable, not string literal
// import { UPDATE_ANIMAL } from '../types';

const initialUserState = {
  user: null
}

export default function userReducer(state = initialUserState, action) {
  switch(action.type) {
    case 'ADD_USER':
        return { ...state, user: action.payload };
    default:
        return state;
  }
}