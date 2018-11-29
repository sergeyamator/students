import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routes } from './config';
import './styles.scss';

import registerRequestAction from './actions/register';
import loginRequestAction from './actions/login';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onRegisterSubmit(data) {
      dispatch(registerRequestAction(data));
    },
    onLogin(data) {
      dispatch(loginRequestAction(data));
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Routes />
      </div>
    );
  }
}
