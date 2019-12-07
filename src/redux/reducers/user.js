import { SET_USER_DATA } from '../actions/types';

const INITIAL_STATE = {
  user: {
    tokens: 0,
  },
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_USER_DATA:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  } 
};
