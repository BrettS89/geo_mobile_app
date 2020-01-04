import { PURCHASE_TOKENS, ADD_CREDIT_CARD } from './types';

export const purchaseTokens = payload => ({
  type: PURCHASE_TOKENS,
  payload,
});

export const addCreditCard = payload => ({
  type: ADD_CREDIT_CARD,
  payload,
});
