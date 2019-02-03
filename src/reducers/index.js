import { ADD_AUTH_USER_NAME } from '../constants';

export function mainReducer(state = {}, action) {
  switch (action.type) {
    case ADD_AUTH_USER_NAME:
    console.log('reducer');
      return {...state, userName: action.userName};

    default:
      return state;  
  }
}