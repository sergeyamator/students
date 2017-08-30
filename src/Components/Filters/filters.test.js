import {expect} from 'chai';
import filter from './filters';

describe ('filters', () => {
  let data;

  beforeEach(() => {
    data = [
      {
        'original_name': 'Vamp',
        'id': 36951,
        'popularity': 1.115845,
        'release_date': '1986-07-18'
      },
      {
        'title': 'Vamp d',
        'popularity': 2.406536,
        'release_date': '2015-07-18'
      },
      {
        'title': 'Vamfd df d p d',
        'popularity': 2.5406536,
        'release_date': '2020-07-18'
      },
      {
        'title': 'Vamp',
        'popularity': 1.406536,
        'release_date': '1990-07-18'
      }
    ];
  });

  it('should return data filtered by ascending popularity', () => {
    const expectedData = [
      {
        'original_name': 'Vamp',
        'id': 36951,
        'popularity': 1.115845,
        'release_date': '1986-07-18'
      },
      {
        'title': 'Vamp',
        'popularity': 1.406536,
        'release_date': '1990-07-18'
      },
      {
        'title': 'Vamp d',
        'popularity': 2.406536,
        'release_date': '2015-07-18'
      },
      {
        'title': 'Vamfd df d p d',
        'popularity': 2.5406536,
        'release_date': '2020-07-18'
      },
    ];
    expect(filter.byAscPopularity(data)).to.eql(expectedData);
  });

  it('should return data filtered by descendingly popularity', () => {
    const expectedData = [
      {
        'title': 'Vamfd df d p d',
        'popularity': 2.5406536,
        'release_date': '2020-07-18'
      },
      {
        'title': 'Vamp d',
        'popularity': 2.406536,
        'release_date': '2015-07-18'
      },
      {
        'title': 'Vamp',
        'popularity': 1.406536,
        'release_date': '1990-07-18'
      },
      {
        'original_name': 'Vamp',
        'id': 36951,
        'popularity': 1.115845,
        'release_date': '1986-07-18'
      }
    ];
    expect(filter.byDescPopularity(data)).to.eql(expectedData);
  });

  it('should return data filtered by ascending date', () => {
    const expectedData = [
      {
        'original_name': 'Vamp',
        'id': 36951,
        'popularity': 1.115845,
        'release_date': '1986-07-18'
      },
      {
        'title': 'Vamp',
        'popularity': 1.406536,
        'release_date': '1990-07-18'
      },
      {
        'title': 'Vamp d',
        'popularity': 2.406536,
        'release_date': '2015-07-18'
      },
      {
        'title': 'Vamfd df d p d',
        'popularity': 2.5406536,
        'release_date': '2020-07-18'
      },
    ];

    expect(filter.byAscDate(data)).to.eql(expectedData);
  });

  it('should return data filtered by descendingly date', () => {
    const expectedData = [
      {
        'title': 'Vamfd df d p d',
        'popularity': 2.5406536,
        'release_date': '2020-07-18'
      },
      {
        'title': 'Vamp d',
        'popularity': 2.406536,
        'release_date': '2015-07-18'
      },
      {
        'title': 'Vamp',
        'popularity': 1.406536,
        'release_date': '1990-07-18'
      },
      {
        'original_name': 'Vamp',
        'id': 36951,
        'popularity': 1.115845,
        'release_date': '1986-07-18'
      }
    ];

    expect(filter.byDescDate(data)).to.eql(expectedData);
  });
});
