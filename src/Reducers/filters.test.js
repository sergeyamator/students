import {expect} from 'chai';
import filtersAction from './filters';

describe('filters', () => {
  let initState;

  beforeEach(() => {
    initState = 'any';
  });

  it('should return init state', () => {
    expect(filtersAction(initState, {})).to.eql(initState);
  });

  it('should return ascending popularity filter', () => {
    const filter = 'ASCENDING_POPULARITY';

    expect(filtersAction(initState, {type: 'ASCENDING_POPULARITY'})).to.eql(filter);
  });

  it('should return descendingly popularity filter', () => {
    const filter = 'DESCENDINGLY_POPULARITY';

    expect(filtersAction(initState, {type: 'DESCENDINGLY_POPULARITY'})).to.eql(filter);
  });

  it('should return ascending date filter', () => {
    const filter = 'ASCENDING_DATE';

    expect(filtersAction(initState, {type: 'ASCENDING_DATE'})).to.eql(filter);
  });

  it('should return descendingly date filter', () => {
    const filter = 'DESCENDINGLY_DATE';

    expect(filtersAction(initState, {type: 'DESCENDINGLY_DATE'})).to.eql(filter);
  });
})
