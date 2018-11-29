import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';

class Dashboard extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    return (
      <h1>Dashboard</h1>
    );
  }
}

const mapStateToProps = state => ({

});

function mapDispatchToProps(dispatch) {
  return {

  };
}

const DashboardWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export { DashboardWithConnect };

