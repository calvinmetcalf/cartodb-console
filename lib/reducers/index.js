import { combineReducers } from 'redux';
import query from './query';
import table from './table';
import auth from './auth';
export default combineReducers({
  query,
  table,
  auth
})
