import { ADD_AUTH_USER_DATA } from '../constants';
import { USER_OUT } from '../constants';
import { ADD_ALL_EXERCISES_TO_STORE } from '../constants';
import { ADD_SEARCH_LABEL } from '../constants';
import { ADD_TO_SCHEDULE_EXERCISE } from '../constants';
import { ADD_ARRAY_EDITS } from '../constants';
import { ADD_NUMBERS_TO_STORE } from '../constants';
import { CHANGE_AUTH_STATUS } from '../constants';

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
        ...state,
        currentUser: {
          ...state.currentUser,
          schedule: {
            ...state.currentUser.schedule,
            [action.today]: {
              ...state.currentUser.schedule[action.today],
              ...action.exercise
            }
          }
        }
      };
    case ADD_ARRAY_EDITS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          schedule: {
            ...state.currentUser.schedule,
            [action.dateOfDay]: {
              ...state.currentUser.schedule[action.dateOfDay],
              [action.exercise]: action.array,
            }
          }
        }
      };
    case ADD_NUMBERS_TO_STORE:
      const data = { ...state.currentUser.schedule[action.dateOfDay][action.exercise][action.count] }
      const newData = { ...data, [action.name]: action.value };
      const array = state.currentUser.schedule[action.dateOfDay][action.exercise].slice(0, action.count).concat(
        newData,
        state.currentUser.schedule[action.dateOfDay][action.exercise].slice(action.count + 1)
      );
      return {
        ...state, currentUser: {
          ...state.currentUser, schedule: {
            ...state.currentUser.schedule, [action.dateOfDay]: {
              ...state.currentUser.schedule[action.dateOfDay], [action.exercise]: array
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

export function authStatus (state = {authStatus: false}, action) {
  switch (action.type) {
    case CHANGE_AUTH_STATUS:
      return {...state, authStatus: action.status};
    default:
      return state;  
  }
}