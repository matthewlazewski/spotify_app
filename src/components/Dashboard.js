import React, { useState } from 'react';

import { initiateGetResult } from '../actions/result';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';
import Header from './Header';
import Loader from './Loader';

const Dashboard = (props) => {
  return (
    <React.Fragment>
        <div>
          <Header />
          <SearchForm />
          <Loader>Loading...</Loader>
          <SearchResult
          />
        </div>  
    </React.Fragment>
  );
};

export default connect()(Dashboard);