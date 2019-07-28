import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {mainReducer, searchLabelReduser, authStatus, showModal} from "./reducers";
import createSagaMiddleware from 'redux-saga'
import { mainSaga } from './saga';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => (noop) => noop );
const sagaMiddleware = createSagaMiddleware();
const enhancers = [
  applyMiddleware(sagaMiddleware),
  devtools(),
];

const reducers = combineReducers({
  main: mainReducer, 
  search: searchLabelReduser, 
  authStatus: authStatus,
  showModal: showModal
});

const store = createStore(reducers, {}, compose(...enhancers));
sagaMiddleware.run(mainSaga);

export default store;