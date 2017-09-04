import {expect} from 'chai';

import moviesReducer from './movies';
import {RECEIVE_MOVIES, REQUEST_MOVIES} from '../actions/actions';
describe('Movies reducer', () => {
  let state;

  beforeEach(() => {
    state = {};
  });

  it('should set initial settings', () => {
    state = {any: 'any'};
    expect(moviesReducer(state, {})).to.eql({any: 'any'});
  });

  it('should save movies to the state', () => {
    const action = {
      type: RECEIVE_MOVIES,
      movies: 'any'
    };

    expect(moviesReducer(state, action)).to.eql({
      isFetching: false,
      movies: 'any'
    });
  });

  it('should fetch movies', () => {
    const action = {
      type: REQUEST_MOVIES
    };

    expect(moviesReducer(state, action)).to.eql({
      isFetching: true
    });
  });
});
