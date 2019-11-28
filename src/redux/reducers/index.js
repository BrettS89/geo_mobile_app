import { combineReducers } from 'redux';
import huntsReducer from './hunts';
import appReducer from './app';
import userReducer from './user';
import authReducer from './auth';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  hunts: huntsReducer,
});
