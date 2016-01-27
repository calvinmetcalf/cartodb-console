import React from 'react';
import QueryInput from './query-input';
import MainTable from './main-table';
import AuthBar from './auth-bar';
export default () =>

<div className='container'>
      <AuthBar />
      <QueryInput />
      <MainTable />
    </div>;
