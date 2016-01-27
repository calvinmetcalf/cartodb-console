import qs from 'querystring';
import Immutable from 'immutable';
import {POPULATE} from './actions';
export default (sql, auth)=> {
  var url = `https://${auth.get('account')}.cartodb.com/api/v2/sql`;
  var query = qs.stringify({
     api_key: auth.get('apikey'),
     q: sql
   });
  var status;
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': query.length
    },
    body: query
  }).then(response=>{
    status = response.status;
    return response.json();
  }).then(json=>{
    json.ourStatus = status;
    json.loaded = true;
    json.rows.forEach((item, i)=> {
      item._key = i;
    })
    return Immutable.fromJS(json);
  });
};
