import { combineReducers } from 'redux';
// import citySearchReducer './citySearchReducer';
import citySearchReducer from './citySearch';

export default combineReducers({
  citySearch: citySearchReducer,
});
