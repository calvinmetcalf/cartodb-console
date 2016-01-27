import React from 'react';
import { connect } from 'react-redux';
import {KEY_CHANGE, ACCOUNT_CHANGE, LOGIN, LOGOUT} from './actions';

class AuthBar extends React.Component {
  render() {
    const {dispatch, auth} = this.props;
    if (auth.get('authed')) {
      return <nav className="navbar navbar-default">
        <div className="container-fluid">
          <p className="navbar-text">Signed in as <span>{auth.get('account')}</span></p>
          <button onClick={
            ()=>{
              dispatch({
                type: LOGOUT
              })
            }
          } className="btn btn-primary navbar-btn">Sign Out</button>
        </div>
      </nav>
    } else {
      return <nav className="navbar navbar-default">
        <div className="container-fluid">
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control" value={auth.get('account')} placeholder="Account Name"  onChange={
            e=>{
              dispatch({
                type: ACCOUNT_CHANGE,
                payload: e.target.value
              });
            }
          }/>
        </div>
        <div className="form-group">
          <input type="text" value={auth.get('apikey')} className="form-control" placeholder="API Key" onChange={
            e=>{
              dispatch({
                type: KEY_CHANGE,
                payload: e.target.value
              });
            }
          } />
        </div>
        <button type="submit" className="btn btn-default" onClick={
          e=>{
            e.preventDefault();
            dispatch({
              type: LOGIN
            });
          }
        }>Submit</button>
      </form>
      </div>
      </nav>
    }
  }
}

export default connect(state => ({
  auth: state.auth
}))(AuthBar);
