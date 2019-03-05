import { ADD_AUTH_USER_DATA } from '../constants';
import { USER_OUT } from '../constants';

const defaultState = {currentUser:{
  email: '',
  exercises: [],
  username: ''
}};

// export function mainReducer(state = {currentUser: {}}, action) {
export function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_AUTH_USER_DATA:
      return {...state, currentUser: action.currentUser};
    case USER_OUT:
      return {...state, currentUser: action.currentUser};
    default:
      return state;  
  }
}

export function exercisesReducer(state = [1,2,3], action) {
  return state;
}