import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Components/Form/index';
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
        <Form />
      </div>
    );
  }
}
