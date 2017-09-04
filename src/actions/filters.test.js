import {expect} from 'chai';
import action from './filters';

import {
  ASCENDING_POPULARITY,
  DESCENDINGLY_POPULARITY,
  ASCENDING_DATE,
  DESCENDINGLY_DATE
} from './actions';

describe('filters action', () => {
  it('should return ascending popularity', () => {
    expect(action('ascPopularity')).to.eql(ASCENDING_POPULARITY);
  });

  it('should return descendingly popularity', () => {
    expect(action('descPopularity')).to.eql(DESCENDINGLY_POPULARITY);
  });

  it('should return ascending date', () => {
    expect(action('ascDate')).to.eql(ASCENDING_DATE);
  });

  it('should return descendingly date', () => {
    expect(action('descDate')).to.eql(DESCENDINGLY_DATE);
  });
});
