const initialState = {isFetching: false, movies: [], currentMovie: null};

import {RECEIVE_MOVIES, REQUEST_MOVIES} from '../actions/actions';

export default (state = initialState, action) => {
  if (action.type === REQUEST_MOVIES) {
    return {
      ...state,
      isFetching: true
    };
  }

  if (action.type === RECEIVE_MOVIES) {
    return {
      ...state,
      isFetching: false,
      movies: action.movies
    };
  }

  return state;
};
