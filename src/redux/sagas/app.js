import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  appLoadWatcher,
];

function * appLoadWatcher() {
  yield takeLatest(actions.ON_APP_LOAD, appLoadHandler);
}

function * appLoadHandler({ payload }) {
  try {
    const { data } = yield call(api.apiIsLoggedIn);
    yield put({ type: actions.SET_USER_DATA, payload: data.user });
    yield put({ type: actions.SET_MY_HUNTS, payload: data.myHunts });
    payload('success');
  } catch(e) {
    payload('failure');
    console.log(e);
  }
}
