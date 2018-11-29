import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { isLoggedIn } from '../../../helpers';

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
  };
}

@connect(mapStateToProps)
class PrivateRoutes extends Component {
  static propTypes = {
    children: PropTypes.shape().isRequired,
    isLoggedIn: PropTypes.bool,
  }

  static defaultProps = {
    isLoggedIn: false,
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children;
    }

    return <Redirect to="/login" />;
  }
}

export { PrivateRoutes };

