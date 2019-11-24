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
    yield put({ type: actions.APP_LOADING });
    const userData = yield call(api.apiIsLoggedIn);
    payload('success');
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    payload('failure');
    console.log(e);
  }
}
