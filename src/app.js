import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps())
export default class App extends Component {
  render() {
    return (
      <div className="container">
        Starting App
      </div>
    );
  }
}
