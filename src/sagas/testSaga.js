import { takeEvery, take, put } from 'redux-saga/effects';
import { ADD_AUTH_USER_DATA } from '../constants';
import app from 'firebase/app';
import { addAuthUserData } from '../actions';

function* addUserSaga() {
  const db = app.database();
  const auth = app.auth();
  const ref = db.ref(`user/${auth.currentUser.uid}`);
  const snapshot = yield ref.once('value');
  const result = snapshot.val();
  console.log(result);
  yield put(addAuthUserData(result));
}

export function* testSaga() {
  console.log('testSaga')
  yield take(ADD_AUTH_USER_DATA);
  yield addUserSaga();
}