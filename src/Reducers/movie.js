const initialState = {currentMovie: null};

import {
  REQUEST_MOVIE,
  RECEIVE_MOVIE
} from '../actions/actions';

export default (state = initialState, action) => {
  if (action.type === REQUEST_MOVIE) {
    return {
      ...state,
      isFetching: true
    };
  }

  if (action.type === RECEIVE_MOVIE) {
    return {
      ...state,
      isFetching: false,
      currentMovie: action.currentMovie
    };
  }

  return state;
};
