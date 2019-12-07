import { ENTER_HUNT, CLOSE_INSUFFICIENT_TOKENS_MODAL, START_HUNTING } from './types';

export const enterHunt = payload => ({
  type: ENTER_HUNT,
  payload,
});

export const closeInsufficientTokensModal = () => ({
  type: CLOSE_INSUFFICIENT_TOKENS_MODAL,
});

export const startHunting = payload => ({
  type: START_HUNTING,
  payload,
});
