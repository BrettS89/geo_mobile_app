import { GET_CITIES } from './types';

export const searchCities = payload => ({
  type: GET_CITIES,
  payload,
});
