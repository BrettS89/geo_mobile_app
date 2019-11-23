import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as types from '../actions/types';
import * as api from '../../lib/api';
import { hunts } from '../selectors';

export default [
  searchCitiesWatcher,
  findHuntsWatcher,
  selectHuntWatcher,
];

function * searchCitiesWatcher() {
  yield takeLatest(types.GET_CITIES, searchCitiesHandler);
}

function * findHuntsWatcher() {
  yield takeLatest(types.FIND_HUNTS, findHuntsHandler);
}

function * selectHuntWatcher() {
  yield takeLatest(types.SELECT_HUNT, selectHuntHandler);
}

function * searchCitiesHandler({ payload }) {
  try {
    let res = yield call(api.apiGetCities, payload);
    cities = res.data;
    yield put({ type: types.SET_CITIES, payload: { cities, searchTerm: payload } });
  } catch(e) {
    console.log('search cities handler error', e);
  }
}

function * findHuntsHandler({ payload }) {
  try {
    const { lat, lon } = payload;
    const res = yield call(api.apiFindHunts, lat, lon);
    yield put({ type: types.SET_HUNTS, payload: res.data });
  } catch(e) {
    console.log('find hunts handler error', e);
  }
}

function * selectHuntHandler({ payload: { hunt, navigate } }) {
  try {
    const huntsState = yield select(hunts);
    const selectedHunt = huntsState.find(h => h._id === hunt);
    yield put({ type: types.SET_HUNT, payload: selectedHunt });
    navigate();
  } catch(e) {
    console.log('selectHuntHandler error: ', e);
  }
}
