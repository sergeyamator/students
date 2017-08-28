import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesActions } from './actions';

import Movies from './Components/Movies';
import SearchBar from './Components/SearchBar';

function mapStateToProps(state) {
  return {
    movies: state.movies.movies
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
  render() {
    return (
      <div>
        <SearchBar onSearch={this.props.getMovies} />
        <Movies movies={this.props.movies} />
      </div>
    );
  }
}
