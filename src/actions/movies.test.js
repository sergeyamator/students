import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import nock from 'nock';
import {moviesActions} from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let movies;

  describe('fetchMovies', () => {
    beforeEach(() => {
      movies = {
        'results': [
          {
            "original_name": "Vamp",
            "id": 36951,
            "media_type": "tv",
            "name": "Vamp",
            "vote_count": 0,
            "vote_average": 0,
            "poster_path": null,
            "first_air_date": "",
            "popularity": 1.115845,
            "genre_ids": [],
            "original_language": "en",
            "backdrop_path": null,
            "overview": "Vamp is a Brazilian telenovela produced and displayed at the time of 19 hours by Rede Globo, July 15, 1991 to February 8, 1992 in 179 chapters.",
            "origin_country": [
              "BR"
            ]
          },
          {
            "vote_average": 5.8,
            "vote_count": 37,
            "id": 34223,
            "video": false,
            "media_type": "movie",
            "title": "Vamp",
            "popularity": 1.406536,
            "poster_path": "/1FwNTDIAVyZy83esTsDVuL1xwIo.jpg",
            "original_language": "en",
            "original_title": "Vamp",
            "genre_ids": [
              35,
              27
            ],
            "backdrop_path": "/iHZgOAXu9vRkagvmbtc1jTDUpqs.jpg",
            "adult": false,
            "overview": "Two fraternity pledges go to a sleazy bar looking for strippers to entertain their college friends.",
            "release_date": "1986-07-18"
          }
        ]
      }
    });

    it('should dispatch RECEIVE_MOVIE when fetching is done', () => {
      const query = 'vamp';

      nock('https://api.themoviedb.org/3')
        .get('/search/multi?api_key=3d34828e5c71c80272fde06fbd627191&query=vamp')
        .reply(200, movies);

      const store = mockStore({isFetching: false, items: []});
      const expectedActions = [
        {type: 'REQUEST_MOVIE'},
        {type: 'RECEIVE_MOVIE', movies}
      ];

      store.dispatch(moviesActions.fetchMovies(query)).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
    });
  });
});
