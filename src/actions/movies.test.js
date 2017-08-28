import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import nock from 'nock';
import {moviesActions} from '../actions';
import config from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  let results;

  describe('async actions', () => {
    let store;

    describe('fetch movies by query', () => {
      afterEach(() => {
        nock.cleanAll();
      });

      beforeEach(() => {
        store = mockStore({isFetching: false, items: []});
        results = [
          {
            'original_name': 'Vamp',
            'id': 36951,
            'media_type': 'tv',
            'name': 'Vamp',
            'vote_count': 0,
            'vote_average': 0,
            'poster_path': null,
            'first_air_date': '',
            'popularity': 1.115845,
            'genre_ids': [],
            'original_language': 'en',
            'backdrop_path': null,
            'overview': 'Vamp is a Brazilian telenovela produced and displayed at the time of 19 hours by Rede Globo, July 15, 1991 to February 8, 1992 in 179 chapters.',
            'origin_country': [
              'BR'
            ]
          },
          {
            'vote_average': 5.8,
            'vote_count': 37,
            'id': 34223,
            'video': false,
            'media_type': 'movie',
            'title': 'Vamp',
            'popularity': 1.406536,
            'poster_path': '/1FwNTDIAVyZy83esTsDVuL1xwIo.jpg',
            'original_language': 'en',
            'original_title': 'Vamp',
            'genre_ids': [
              35,
              27
            ],
            'backdrop_path': '/iHZgOAXu9vRkagvmbtc1jTDUpqs.jpg',
            'adult': false,
            'overview': 'Two fraternity pledges go to a sleazy bar looking for strippers to entertain their college friends.',
            'release_date': '1986-07-18'
          }
        ];
      });

      it('should dispatch RECEIVE_MOVIE when fetching is done', () => {
        const query = 'vamp';

        nock(config.baseMovieUrl)
          .get(`${config.multiSearchUrl}${query}`)
          .reply(200, {results});

        const expectedActions = [
          {type: 'REQUEST_MOVIES', isFetching: true},
          {type: 'RECEIVE_MOVIES', movies: results, isFetching: false}
        ];

        return store.dispatch(moviesActions.fetchMovies(query)).then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
      });

      it('should dispatch RECEIVE_FAILED when fetching is failed', () => {
        const query = 'vamp';
        const expectedActions = [
          {type: 'REQUEST_MOVIES', isFetching: true},
          {type: 'RECEIVE_FAILED', movies: [], isFetching: false, error: `request to ${config.baseMovieUrl}${config.multiSearchUrl}${query} failed, reason: something awful happened`}
        ];

        nock(config.baseMovieUrl)
          .get(`${config.multiSearchUrl}${query}`)
          .replyWithError({'message': 'something awful happened', 'code': 'AWFUL_ERROR'});

        return store.dispatch(moviesActions.fetchMovies(query)).then(() => {

          expect(store.getActions()).to.eql(expectedActions);
        });
      });
    });
  });

  describe('sync actions', () => {
    it('should return receive error action', () => {
      const error = {message: 'error'};

      expect(moviesActions.receiveFailed(error)).to.eql({
        type: 'RECEIVE_FAILED',
        movies: [],
        error: 'error',
        isFetching: false
      });
    });
  });
});
