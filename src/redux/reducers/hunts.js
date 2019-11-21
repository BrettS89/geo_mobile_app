import { SET_CITIES, SET_HUNTS, SET_HUNT } from '../actions/types';

const INITIAL_STATE = {
  searchTerm: null,
  cities: [],
  hunts: [],
  hunt: {},
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

    case SET_HUNT:
      return {
        ...state,
        hunt: payload,
      };

    default:
      return state;
  }
};
