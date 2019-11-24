import { combineReducers } from 'redux';
import huntsReducer from './hunts';
import appReducer from './app';
import authReducer from './auth';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  hunts: huntsReducer,
});
