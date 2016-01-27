import Immutable from 'immutable';
import {KEY_CHANGE, LOGOUT, LOGIN, ACCOUNT_CHANGE} from '../actions';
const init = Immutable.fromJS({
  authed: false,
  apikey: localStorage.getItem('cartodb_apikey'),
  account: localStorage.getItem('cartodb_account'),
});
export default function (state = init, action){
  switch(action.type) {
    case LOGOUT:
      localStorage.removeItem('cartodb_apikey');
      localStorage.removeItem('cartodb_account');
      return init;
    case LOGIN:
      localStorage.setItem('cartodb_apikey', state.get('apikey'));
      localStorage.setItem('cartodb_account', state.get('account'));
      return state.set('authed', true);
    case KEY_CHANGE:
      return state.set('apikey', action.payload);
    case ACCOUNT_CHANGE:
      return state.set('account', action.payload);
    default:
        return state;
  }
}
