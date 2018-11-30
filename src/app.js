import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Routes } from './config';
import { isLoggedIn } from './helpers';
import { Header } from './components';

const mapStateToProps = state => ({
  loggedIn: isLoggedIn(state),
});

@connect(mapStateToProps)
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routes />
      </Fragment>
    );
  }
}

export { App };
