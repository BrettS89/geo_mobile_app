import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  enterHuntWatcher,
];

function * enterHuntWatcher() {
  yield takeLatest(actions.ENTER_HUNT, enterHuntHandler);
}

function * enterHuntHandler({ payload: { huntId, navigate } }) {
  try {
    yield put({ type: actions.APP_LOADING });
    const { data } = yield call(api.apiEnterHunt, { huntId });
    yield put({ type: actions.SET_MY_HUNTS, payload: data.myHunts });
    navigate();
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('enterHuntHandler error: ', e);
  }
}
