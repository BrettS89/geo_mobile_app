import { GET_CITIES, FIND_HUNTS } from './types';

export const searchCities = payload => ({
  type: GET_CITIES,
  payload,
});

export const findHunts = payload => ({
  type: FIND_HUNTS,
  payload,
});
