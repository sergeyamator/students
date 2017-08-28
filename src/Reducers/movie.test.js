import {expect} from 'chai';

import movieReducer from './movie';

describe('Movie reducer', () => {
  let state;

  beforeEach(() => {
    state = {};
  });

  it('should set initial settings', () => {
    state = {any: 'any'};
    expect(movieReducer(state, {})).to.eql({any: 'any'});
  });

  it('should save movie to the state', () => {
    const action = {
      type: 'RECEIVE_MOVIE',
      movie: 'any'
    };

    expect(movieReducer(state, action)).to.eql({
      isFetching: false,
      movie: 'any'
    });
  });

  it('should fetch movie', () => {
    const action = {
      type: 'REQUEST_MOVIE'
    };

    expect(movieReducer(state, action)).to.eql({
      isFetching: true
    });
  });
});
