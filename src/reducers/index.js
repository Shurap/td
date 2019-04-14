import { ADD_AUTH_USER_DATA } from '../constants';
import { USER_OUT } from '../constants';
import { ADD_ALL_EXERCISES_TO_STORE } from '../constants';
import { ADD_SEARCH_LABEL } from '../constants';
import { ADD_TO_SCHEDULE_EXERCISE } from '../constants';

const defaultState = {
  currentUser: {
    email: '',
    username: ''
  }
};

export function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_AUTH_USER_DATA:
      return { ...state, currentUser: action.currentUser };
    case USER_OUT:
      return { ...state, currentUser: action.currentUser };
    case ADD_ALL_EXERCISES_TO_STORE:
      return {
        ...state, currentUser: {
          ...state.currentUser, ...action.exercises
        }
      };
    case ADD_TO_SCHEDULE_EXERCISE: 
      return {
        ...state, currentUser: {
          ...state.currentUser, schedule: {
            ...state.currentUser.schedule, [action.today]: {
              ...state.currentUser.schedule[action.today], ...action.exercise
            }
          }
        }
      };
    default:
      return state;
  }
}

export function searchLabelReduser(state = { searchLabel: '' }, action) {
  switch (action.type) {
    case ADD_SEARCH_LABEL:
      return { ...state, searchLabel: action.label };
    default:
      return state;
  }
}
