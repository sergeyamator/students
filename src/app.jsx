import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesActions } from './actions';

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: searchText => {
      dispatch(requestMovie(searchText))
    }
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}
