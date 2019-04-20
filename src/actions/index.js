import { ADD_AUTH_USER_DATA } from '../constants';
import { USER_OUT } from '../constants';
import {ADD_ALL_EXERCISES_TO_STORE} from '../constants';
import {ADD_SEARCH_LABEL} from '../constants';
import {ADD_TO_SCHEDULE_EXERCISE} from '../constants';
import {ADD_ARRAY_EDITS} from '../constants';

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

export function addAllExercisesToStore(exercises) {
  return {
    type: ADD_ALL_EXERCISES_TO_STORE,
    exercises
  }
}

export function addSearchLabel(label) {
  return {
    type: ADD_SEARCH_LABEL,
    label
  }
}

export function addToScheduleExercise(exercise, today) {
  return {
    type: ADD_TO_SCHEDULE_EXERCISE,
    exercise,
    today
  }
}

export function addArrayEdits(dateOfDay, exercise, array) {
  return {
    type: ADD_ARRAY_EDITS,
    dateOfDay,
    exercise,
    array
  }
}

