import {ADD_AUTH_USER_NAME} from '../constants';

export function addAuthUserName(userName) {
  console.log(userName);
  return {
    type: ADD_AUTH_USER_NAME,
    userName
  }
}