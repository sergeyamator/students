import { expect } from 'chai';

import moviesReducer from './movies'
import {moviesActions} from '../actions'

describe('Movies reducer', () => {
  let state;

  beforeEach(() => {
    state = {any: 'any'}
  })

  it('should set initial settings', () => {
    expect(moviesReducer(state, {})).to.deep.equal({any: 'any'})
  })

  it('should enable isfetching state', () => {
    expect(moviesReducer(state, moviesActions.requestMovies())).to.deep.equal({any: 'any', isFetching: true})
  })

  it('should disable isfetching state', () => {
    const movies = 'any'
    expect(moviesReducer(state, moviesActions.receiveMovies(movies))).to.deep.equal({any: 'any', isFetching: false, movies})
  })
})
