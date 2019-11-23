import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  loginWatcher,
  registerWatcher,
];

function * registerWatcher() {
  yield takeLatest(actions.ON_REGISTER, registerHandler);
}

function * loginWatcher() {
  yield takeLatest(actions.ON_LOGIN, loginHandler);
}

function * loginHandler({ payload }) {
  try {
    yield console.log('in');
    const res = yield call(api.apiLogin, payload);
    console.log(res);
  } catch(e) {
    console.log('handle error');
  }
}

function * registerHandler({ payload }) {
  try {
    yield console.log('in');
    const res = yield call(api.apiRegister, payload);
    console.log(res);
  } catch(e) {
    console.log('handle error');
  }
}
