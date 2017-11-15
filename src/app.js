import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Components/Form/index';
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
  static propTypes = {
    onRegisterSubmit: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="container">
        <Form onRegister={this.props.onRegisterSubmit} onLogin={this.props.onLogin} />
      </div>
    );
  }
}
