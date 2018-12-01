import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';


const mapStateToProps = () => ({

});

function mapDispatchToProps() {
  return {

  };
}

@connect(mapStateToProps, mapDispatchToProps)
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


export { Dashboard };
