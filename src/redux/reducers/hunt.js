import { OPEN_INSUFFICIENT_TOKENS_MODAL, CLOSE_INSUFFICIENT_TOKENS_MODAL, SET_CURRENTLY_HUNTING } from '../actions/types';

const INITIAL_STATE = {
  insufficientTokensModal: false,
  currentlyHunting: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case OPEN_INSUFFICIENT_TOKENS_MODAL:
      return {
        ...state,
        insufficientTokensModal: true,
      };

    case CLOSE_INSUFFICIENT_TOKENS_MODAL:
      return {
        ...state,
        insufficientTokensModal: false,
      };

    case SET_CURRENTLY_HUNTING:
      return {
        ...state,
        currentlyHunting: payload,
      };

    default:
      return state;
  }
};