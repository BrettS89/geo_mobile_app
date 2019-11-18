import { SET_CITIES, SET_HUNTS } from '../actions/types';

const INITIAL_STATE = {
  searchTerm: null,
  cities: [],
  hunts: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case SET_CITIES:
      return {
        ...state,
        cities: payload.cities,
        searchTerm: payload.searchTerm,
      };

    case SET_HUNTS:
      return {
        ...state,
        hunts: payload,
      };

    default:
      return state;
  }
};
