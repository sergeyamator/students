import {expect} from 'chai';

import moviesReducer from './movies';
import {moviesActions} from '../actions';

describe('Movies reducer', () => {
  let state;

  beforeEach(() => {
    state = {any: 'any'};
  });

  it('should set initial settings', () => {
    expect(moviesReducer(state, {})).to.deep.equal({any: 'any'});
  });

  it('should save movies to the state', () => {
    expect(moviesReducer(state, moviesActions.fetchMovies('vamp'))).to.deep.equal({any: 'any'});
  });

  it('should disable isfetching state', () => {
    const movies = 'any';
    expect(moviesReducer(state, moviesActions.receiveMovies(movies))).to.deep.equal({
      isFetching: false,
    });
  });
});
