import config from '../config';
import fetch from 'isomorphic-fetch';

const receiveMovie = movie => {
  return {
    type: 'RECEIVE_MOVIE',
    movie: movie.result,
    isFetching: false
  };
};

const receiveFailed = error => {
  return {
    type: 'RECEIVE_FAILED',
    movie: null,
    error: error.message,
    isFetching: false
  };
};

const fetchMovie = id => dispatch => {
  dispatch({
    type: 'REQUEST_MOVIE',
    isFetching: true
  });

  const getVideoById = `${config.baseMovieUrl}${config.queryMovieById}${id}${config.apiKey}`;

  return fetch(getVideoById)
    .then(response => response.json())
    .then(res => dispatch(receiveMovie(res)))
    .catch(err => dispatch(receiveFailed(err)));
};

export {fetchMovie};
export {receiveMovie};
export {receiveFailed};
