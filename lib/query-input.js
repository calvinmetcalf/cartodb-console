import React from 'react';
import { connect } from 'react-redux';
import {QUERY_CHANGE, LOADING, POPULATE} from './actions';
import runQuery from './runQuery';
class QueryInput extends React.Component {
  render() {
    const { query, dispatch, auth} = this.props;
    return <div className="row">

      <textarea disabled={!auth.get('authed')} className="form-control" name="textarea" rows="10" value={query} onChange={
        e=> {
          dispatch({
            type: QUERY_CHANGE,
            payload: e.target.value
          });
        }
      }></textarea>
      <button disabled={!auth.get('authed')} className="btn btn-primary" onClick={
        ()=>{
          dispatch({
            type: LOADING,
            payload: true
          });
          dispatch({
            type: POPULATE,
            payload: runQuery(query, auth)
          });
        }
      }>Run Query</button>
    </div>
  }
}

export default connect(state => ({
  query: state.query,
  auth: state.auth
}))(QueryInput);
