import {createStore, combineReducers, compose} from 'redux';
import {mainReducer} from "./reducers";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => (noop) => noop );
const enhancers = [devtools()];

const reducers = combineReducers({main: mainReducer});
const store = createStore(reducers, {}, compose(...enhancers));

export default store;