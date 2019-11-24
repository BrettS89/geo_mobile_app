import { SET_REGISTRATION_ERROR, SET_LOGIN_ERROR, CLEAR_AUTH_ERRORS } from '../actions/types';

const INITIAL_STATE = {
  loginError: null,
  registrationError: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case SET_REGISTRATION_ERROR:
      return {
        ...state,
        registrationError: payload,
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: payload,
      };

    case CLEAR_AUTH_ERRORS:
      return {
        ...state,
        loginError: null,
        registrationError: null,
      };

    default:
      return state;
  }
};
