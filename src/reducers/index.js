import { ADD_AUTH_USER_DATA } from '../constants';
import { USER_OUT } from '../constants';
import { ADD_TO_TODAY_EXERCISES } from '../constants';
import { ADD_EXERCISE_TO_STORE_EXERCISE } from '../constants';
import { ADD_ALL_EXERCISES_TO_STORE } from '../constants';

const defaultState = {
  currentUser: {
    email: '',
    /*exercises: [],*/
    username: ''
  }
};

const defaultStateExercises = {
  todayExercises: []
}

export function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_AUTH_USER_DATA:
      return { ...state, currentUser: action.currentUser };
    case USER_OUT:
      return { ...state, currentUser: action.currentUser };
    case ADD_EXERCISE_TO_STORE_EXERCISE:
      return {
        ...state, currentUser: {
          ...state.currentUser, exercises: {
            ...state.currentUser.exercises, ...action.data
          }
        }
      };

    case ADD_ALL_EXERCISES_TO_STORE:
      return {
        ...state, currentUser: {
          ...state.currentUser, ...action.exercises 
        }
      };

    default:
      return state;
  }
}

export function exercisesReducer(state = defaultStateExercises, action) {
  switch (action.type) {
    case ADD_TO_TODAY_EXERCISES:
      return { ...state, todayExercises: action.exercise };
    default:
      return state;
  }
}
