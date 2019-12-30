import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import { hunt, hunts, myHunts, user, activeHuntState } from '../selectors';

export default [
  enterHuntWatcher,
  startHuntingWatcher,
];

function * enterHuntWatcher() {
  yield takeLatest(actions.ENTER_HUNT, enterHuntHandler);
}

function * startHuntingWatcher() {
  yield takeLatest(actions.START_HUNTING, startHuntingHandler);
}

function * youWonWatcher() {
  yield takeLatest(actions.YOU_WON, youWonHandler);
}

function * enterHuntHandler({ payload: { huntId, navigate } }) {
  try {
    const userData = yield select(user);
    const selectedHunt = yield select(hunt);
    const searchedHunts = yield select(hunts);
    if (userData.tokens < selectedHunt.tokens) {
      return yield put({ type: actions.OPEN_INSUFFICIENT_TOKENS_MODAL });
    }
    yield put({ type: actions.APP_LOADING });
    const { data } = yield call(api.apiEnterHunt, { huntId });
    const filteredHunts = searchedHunts.filter(h => h._id !== huntId);
    yield put({ type: actions.SET_MY_HUNTS, payload: data.myHunts });
    yield put({ type: actions.SET_HUNTS, payload: filteredHunts });
    yield put({ type: actions.SET_USER_DATA, payload: data.userData });
    navigate();
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('enterHuntHandler error: ', e);
  }
}

function * startHuntingHandler({ payload: { huntId, navigate } }) {
  try {
    yield put({ type: actions.APP_LOADING });
    const hunts = yield select(myHunts);
    const activeHunt = hunts.find(h => h._id === huntId);
    if (!activeHunt) throw new Error('Could not start hunting');
    yield put({ type: actions.SET_CURRENTLY_HUNTING, payload: activeHunt });
    navigate();
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('startHuntingHandler error: ', e);
  }
}

function * youWonHandler() {
  try {
    const hunt = yield select(activeHuntState);
    const body = { hunt: hunt._id };
    yield call(api.youWon, huntId);
    yield put({ type: actions.SET_WON });
  } catch(e) {
    console.log('youWonHandler error: ', e);
  }
}