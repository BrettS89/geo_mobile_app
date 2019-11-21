import { GET_CITIES, FIND_HUNTS, SELECT_HUNT } from './types';

export const searchCities = payload => ({
  type: GET_CITIES,
  payload,
});

export const findHunts = payload => ({
  type: FIND_HUNTS,
  payload,
});

export const selectHunt = payload => ({
  type: SELECT_HUNT,
  payload,
});
