import { all, fork } from 'redux-saga/effects';
import appSagas from './app';
import authSagas from './auth';
import huntsSagas from './hunts';
import huntSagas from './hunt';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function * root() {
  yield all([
    ...forkList(appSagas),
    ...forkList(authSagas),
    ...forkList(huntsSagas),
    ...forkList(huntSagas),
  ]);
}
