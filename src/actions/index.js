import { ADD_AUTH_USER_DATA } from '../constants';
import { USER_OUT } from '../constants';
import { ADD_ALL_EXERCISES_TO_STORE } from '../constants';
import { ADD_SEARCH_LABEL } from '../constants';
import { ADD_TO_SCHEDULE_EXERCISE } from '../constants';
import { ADD_ARRAY_EDITS } from '../constants';
import { ADD_NUMBERS_TO_STORE } from '../constants';
import { CHANGE_AUTH_STATUS } from '../constants'; 
import { CHANGE_SHOW_STATUS_MODAL } from '../constants';
import { ADD_MODAL_INFO_DATA } from '../constants';
import { ADD_MODAL_EXERCISE_NAME } from '../constants';


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

export function addNumbersToStore(value, dateOfDay, exercise, name, count) {
  return {
    type: ADD_NUMBERS_TO_STORE,
    value,
    dateOfDay,
    exercise,
    name,
    count
  }
}

export function changeAuthStatus(status) {
  return {
    type: CHANGE_AUTH_STATUS,
    status
  }
}

export function changeShowStatusModal(status, exerciseName, infoData) {
  return {
    type: CHANGE_SHOW_STATUS_MODAL,
    status,
    exerciseName,
    infoData
  }
}

export function addModalInfoData(infoData) {
  return {
    type: ADD_MODAL_INFO_DATA,
    infoData,
  }
}

export function addModalExerciseName(newExerciseName) {
  return {
    type: ADD_MODAL_EXERCISE_NAME,
    newExerciseName
  }
}