import { all, fork } from 'redux-saga/effects';
import authSagas from './auth';
import huntsSagas from './hunts';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function * root() {
  yield all([
    ...forkList(authSagas),
    ...forkList(huntsSagas),
  ]);
}
