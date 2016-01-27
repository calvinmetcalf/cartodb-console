import React from 'react';
import TableHead from './table-head';
import TableBody from './table-body';
import { connect } from 'react-redux';
import guessSchema from './guessSchema';
class MainTable extends React.Component {
  render() {
    const {dispatch, table, auth} = this.props;
    if (!auth.get('authed')) {
      return <div/>;
    }
    if (table.get('loading')) {
      return <div className="col-sm-12 col-lg-10 center-text"><i className="fa fa-spinner fa-spin fa-5x"></i></div>;
    }
    const data = table.get('data');
    if (!data.get( 'loaded')) {
      return <div/>;
    }
    var schema = guessSchema(data);

    return <table className="table table-striped table-bordered">
      <TableHead schema={schema} />
      <TableBody rows={data.get('rows')} schema={schema} />
    </table>;
  }
}

export default connect(state => ({
  table: state.table,
  auth: state.auth
}))(MainTable);
