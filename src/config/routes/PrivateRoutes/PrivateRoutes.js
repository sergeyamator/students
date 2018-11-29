import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

class PrivateRoutes extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    children: PropTypes.shape().isRequired,
  }

  static defaultProps = {
    isAuthenticated: true,
  }

  render() {
    if (this.props.isAuthenticated) {
      return this.props.children;
    }

    return <Redirect to="/login" />;
  }
}

export { PrivateRoutes };

