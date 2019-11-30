import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import { hunts } from '../selectors';

export default [
  searchCitiesWatcher,
  findHuntsWatcher,
  selectHuntWatcher,
];

function * searchCitiesWatcher() {
  yield takeLatest(actions.GET_CITIES, searchCitiesHandler);
}

function * findHuntsWatcher() {
  yield takeLatest(actions.FIND_HUNTS, findHuntsHandler);
}

function * selectHuntWatcher() {
  yield takeLatest(actions.SELECT_HUNT, selectHuntHandler);
}

function * searchCitiesHandler({ payload }) {
  try {
    let res = yield call(api.apiGetCities, payload);
    cities = res.data;
    yield put({ type: actions.SET_CITIES, payload: { cities, searchTerm: payload } });
  } catch(e) {
    console.log('search cities handler error', e);
  }
}

function * findHuntsHandler({ payload }) {
  try {
    yield put({ type: actions.APP_LOADING });
    const { lat, lon } = payload;
    const res = yield call(api.apiFindHunts, lat, lon);
    yield put({ type: actions.SET_HUNTS, payload: res.data });
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('find hunts handler error', e);
  }
}

function * selectHuntHandler({ payload: { hunt, navigate } }) {
  try {
    yield put({ type: actions.APP_LOADING });
    const huntsState = yield select(hunts);
    const selectedHunt = huntsState.find(h => h._id === hunt);
    yield put({ type: actions.SET_HUNT, payload: selectedHunt });
    yield put({ type: actions.APP_NOT_LOADING });
    navigate();
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('selectHuntHandler error: ', e);
  }
}
