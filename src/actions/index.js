import { ADD_AUTH_USER_DATA } from '../constants';
import { USER_OUT } from '../constants';
import { ADD_NEW_EXERCISE } from '../constants';
import {ADD_TO_TODAY_EXERCISES} from '../constants';
import {ADD_EXERCISE_TO_STORE_EXERCISE} from '../constants';

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

export function addNewExercise(label) {
  return {
    type: ADD_NEW_EXERCISE,
    label
  }
}

export function addToTodayExercises(exercise) {
  return {
    type: ADD_TO_TODAY_EXERCISES,
    exercise
  }
}

export function addExerciseToStoreExercise(data) {
  return {
    type: ADD_EXERCISE_TO_STORE_EXERCISE,
    data
  }
}
