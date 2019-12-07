import { SET_CITIES, SET_HUNTS, SET_HUNT, SET_MY_HUNTS } from '../actions/types';

const INITIAL_STATE = {
  searchTerm: null,
  cities: [],
  hunts: [],
  hunt: {},
  myHunts: [],
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

    case SET_MY_HUNTS:
      return {
        ...state,
        myHunts: payload,
      };

    default:
      return state;
  }
};
