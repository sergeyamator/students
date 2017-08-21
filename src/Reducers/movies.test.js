import { expect } from 'chai';
import moviesReducer from './movies'

describe('Movies reducer', () => {
  it('should set initial settings', () => {
    const data = {any: 'any'}

    expect(moviesReducer(data)).to.deep.equal({any: 'any'})
  })
})
