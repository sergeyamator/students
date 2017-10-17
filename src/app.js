import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Components/Form/index';
import UserForm from './Components/UserForm/index';
import './styles.scss';

import registerRequestAction from './actions/register';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onRegisterSubmit(data) {
      dispatch(registerRequestAction(data));
    },
    onLogin(data) {
      dispatch(registerRequestAction(data));
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
        <UserForm />
      </div>
    );
  }
}
