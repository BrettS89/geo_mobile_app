import { ON_LOGIN, ON_REGISTER } from './types';

export const onRegister = payload => ({
  type: ON_REGISTER,
  payload,
});

export const onLogin = payload => ({
  type: ON_LOGIN,
  payload,
});
