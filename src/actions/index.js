import {ADD_AUTH_USER_DATA} from '../constants';
import {USER_OUT} from '../constants';

export function addAuthUserData(currentUser) {
  return {
    type: ADD_AUTH_USER_DATA,
    currentUser
  }
}

export function userOut() {
  return {
    type: USER_OUT,
    currentUser: {}
  }
}