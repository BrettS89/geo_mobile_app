import { ENTER_HUNT, CLOSE_INSUFFICIENT_TOKENS_MODAL, START_HUNTING, YOU_WON, CONFIRM_WON } from './types';

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

export const youWon = () => ({
  type: YOU_WON,
});

export const confirmWon = payload => ({
  type: CONFIRM_WON,
  payload,
});
