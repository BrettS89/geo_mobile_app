import { AsyncStorage } from 'react-native';
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

function * loginHandler({ payload: { form, navigate } }) {
  try {
    const res = yield call(api.apiLogin, form);
    yield AsyncStorage.setItem('token', res.token);
    navigate();
  } catch(e) {
    yield put({ type: actions.SET_LOGIN_ERROR, payload: e.error.message });
    console.log('loginHandler error: ', e.error.message);
  }
}

function * registerHandler({ payload: { form, navigate } }) {
  try {
    const res = yield call(api.apiRegister, form);
    yield AsyncStorage.setItem('token', res.token);
    navigate();
  } catch(e) {
    yield put({ type: actions.SET_REGISTRATION_ERROR, payload: e.error.message });
    console.log('registerHandler error: ', e.error.message);
  }
}
