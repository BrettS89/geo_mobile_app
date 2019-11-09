import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';

export default [
  loginWatcher,
];

function * loginWatcher() {
  yield takeLatest(actions.ON_LOGIN, loginHandler);
}

function * loginHandler({ payload }) {
  try {
    yield console.log('in');
  } catch(e) {
    console.log('handle error');
  }
}
