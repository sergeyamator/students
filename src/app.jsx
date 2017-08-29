import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesActions } from './actions';

import Movies from './Components/Movies';
import SearchBar from './Components/SearchBar';
import Filters from './Components/Filters';

function mapStateToProps(state) {
  return {
    movies: state.movies.movies,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: searchText => {
      dispatch(moviesActions.fetchMovies(searchText));
    },
    setVisibleFilter: filter => {
      dispatch({
        type: filter
      })
    }
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar onSearch={this.props.getMovies} />
        <Filters setFilter={this.props.setVisibleFilter} />
        <Movies movies={this.props.movies} visibleFilter={this.props.filter} />
      </div>
    );
  }
}
