import config from '../config';
import fetch from 'isomorphic-fetch';

const fetchMovies = movie => dispatch => {
  dispatch({
    type: 'REQUEST_MOVIE',
    isFetching: true
  });

  return fetch(config.searchMovieUrl + movie)
    .then(response => response.json())
    .then(res => dispatch(receiveMovies(res)))
    .catch(err => console.log(err));
};

const receiveMovies = movies => {
  return {
    type: 'RECEIVE_MOVIE',
    movies: movies.results
  };
};

export {fetchMovies};
export {receiveMovies};
