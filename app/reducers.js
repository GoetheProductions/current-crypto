import { combineReducers } from 'redux';
import fetchReducer from './containers/redux/reducer/fetch';

export default combineReducers({
  fetch: fetchReducer,
});
