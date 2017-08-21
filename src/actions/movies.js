import config from '../config';

export const requestMovies = movie => dispatch => {
  dispatch({
    type: 'REQUEST_MOVIE'
  });

  fetch(config.movieApiUrl + movie)
    .then(response => response.json())
    .then(res => dispatch(receiveMovies(res)))
    .catch(err => console.log(err))
}

export const receiveMovies = movies => {
  return {
    type: 'RECEIVE_MOVIE',
    movies
  }
}
