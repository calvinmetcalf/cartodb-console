import {QUERY_CHANGE} from '../actions';
const init = `select * from pg_catalog.pg_tables where schemaname not in ('pg_catalog', 'information_schema', 'topology', 'public');`
export default function (state = init, action){
  switch(action.type) {
    case QUERY_CHANGE:
      return action.payload;
    default:
        return state;
  }
}
