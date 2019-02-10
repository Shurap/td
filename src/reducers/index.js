import { ADD_AUTH_USER_DATA } from '../constants';
import { USER_OUT } from '../constants';

export function mainReducer(state = {currentUser: {}}, action) {
  switch (action.type) {
    case ADD_AUTH_USER_DATA:
      return {...state, currentUser: action.currentUser};
    case USER_OUT:
      return {...state, currentUser: action.currentUser};
    default:
      return state;  
  }
}