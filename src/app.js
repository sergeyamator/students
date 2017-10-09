import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentsList from './Components/List';
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
        <StudentsList />
      </div>
    );
  }
}
