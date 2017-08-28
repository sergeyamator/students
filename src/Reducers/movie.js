const initialState = {currentMovie: null};

export default (state = initialState, action) => {
  if (action.type === 'REQUEST_MOVIE') {
    return {
      ...state,
      isFetching: true
    };
  }

  if (action.type === 'RECEIVE_MOVIE') {
    return {
      ...state,
      isFetching: false,
      movie: action.movie
    };
  }

  return state;
};
