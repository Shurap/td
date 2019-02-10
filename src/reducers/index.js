import { ADD_AUTH_USER_NAME } from '../constants';

export function mainReducer(state = {}, action) {
  switch (action.type) {
    case ADD_AUTH_USER_NAME:
      return {...state, userName: action.userName};
    default:
      return state;  
  }
}