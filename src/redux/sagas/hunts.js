import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as types from '../actions/types';
import * as api from '../../lib/api';

export default [
  searchCitiesWatcher,
  findHuntsWatcher,
];

function * searchCitiesWatcher() {
  yield takeLatest(types.GET_CITIES, searchCitiesHandler);
}

function * findHuntsWatcher() {
  yield takeLatest(types.FIND_HUNTS, findHuntsHandler);
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
