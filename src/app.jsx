import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesActions } from './actions';

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: searchText => {
      dispatch(moviesActions.fetchMovies(searchText));
    }
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  componentDidMount() {
    this.props.getMovies('movie');
  }
  render() {
    return (
      <div>
        hi
      </div>
    );
  }
}
