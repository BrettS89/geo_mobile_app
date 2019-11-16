import { SET_CITIES } from '../actions/types';

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

    default:
      return state;
  }
};
