import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as types from '../actions/types';
import * as api from '../../lib/api';

export default [
  searchCitiesWatcher,
];

function * searchCitiesWatcher() {
  yield takeLatest(types.GET_CITIES, searchCitiesHandler);
}

function * searchCitiesHandler({ payload }) {
  try {
    const cities = yield call(api.apiGetCities, payload);
    yield put({ type: types.SET_CITIES, payload: { cities, searchTerm: payload } });
  } catch(e) {
    console.log('handle error');
  }
}
