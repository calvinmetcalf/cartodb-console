import Immutable from 'immutable';
import {LOADING, POPULATE} from '../actions';
const init = Immutable.fromJS({
  loading: false,
  data: {}
});
export default function (state = init, action){
  switch(action.type) {
    case LOADING:
      return state.set('loading', action.payload);
    case POPULATE:
      if (action.error) {
        return state.set('loading', false);
      }
      return state.set('loading', false).set('data', action.payload);
    default:
        return state;
  }
}
