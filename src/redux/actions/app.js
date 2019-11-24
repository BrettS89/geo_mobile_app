import { ON_APP_LOAD } from './types';

export const onAppLoad = payload => ({
  type: ON_APP_LOAD,
  payload,
});
