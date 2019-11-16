import { combineReducers } from 'redux';
import huntsReducer from './hunts';

export default combineReducers({
  hunts: huntsReducer,
});
