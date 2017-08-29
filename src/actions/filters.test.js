import {expect} from 'chai';
import action from './filters';

describe('filters action', () => {
  it('should return ascending popularity', () => {
    expect(action('ascPopularity')).to.eql('ASCENDING_POPULARITY');
  });

  it('should return descendingly popularity', () => {
    expect(action('descPopularity')).to.eql('DESCENDINGLY_POPULARITY');
  });

  it('should return ascending date', () => {
    expect(action('ascDate')).to.eql('ASCENDING_DATE');
  });

  it('should return descendingly popularity', () => {
    expect(action('descPopularity')).to.eql('DESCENDINGLY_POPULARITY');
  });
});
