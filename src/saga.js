import {all, fork} from 'redux-saga/effects';
import { testSaga } from './sagas/testSaga';

export function* mainSaga() {
  yield all([
    fork(testSaga),
  ])
}