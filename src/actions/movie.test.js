import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import nock from 'nock';
import {movieActions} from '../actions';
import config from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('async actions', () => {
    let store;
    let currentMovie;
    let id;

    describe('fetch movies by id', () => {
      afterEach(() => {
        nock.cleanAll();
      });

      beforeEach(() => {
        store = mockStore({isFetching: false, movie: null});
        id = 2525;
        currentMovie = {
          'backdrop_path': '/pp0x3oViWtjmb5zcKg1NaMojJQP.jpg',
          'created_by': [
            {
              'id': 190341,
              'name': 'Joe Ahearne',
              'profile_path': null
            }
          ],
          'episode_run_time': [
            60
          ],
          'first_air_date': '1998-09-15',
          'genres': [
            {
              'id': 10765,
              'name': 'Sci-Fi & Fantasy'
            },
            {
              'id': 18,
              'name': 'Drama'
            }
          ],
          'homepage': 'http://www.world-productions.com/wp/content/shows/other/uv/uvhome.htm',
          'id': 232,
          'in_production': false,
          'languages': [
            'en'
          ],
          'last_air_date': '1998-10-20',
          'name': 'Ultraviolet',
          'networks': [
            {
              'id': 26,
              'name': 'Channel 4'
            }
          ],
          'number_of_episodes': 6,
          'number_of_seasons': 1,
          'origin_country': [
            'GB'
          ],
          'original_language': 'en',
          'original_name': 'Ultraviolet',
          'overview': 'Ultraviolet is a 1998 United Kingdom television series written and directed by Joe Ahearne and starring Jack Davenport, Susannah Harker, Idris Elba and Philip Quast. Music was composed and performed by Sue Hewitt. The programme was produced by World Productions for Channel 4.',
          'popularity': 0.523028,
          'poster_path': '/mQVqzFPoHM79gzCvIbuOXE8HPOu.jpg',
          'production_companies': [
            {
              'name': 'World Productions',
              'id': 10532
            }
          ],
          'seasons': [
            {
              'air_date': null,
              'episode_count': 2,
              'id': 746,
              'poster_path': null,
              'season_number': 0
            },
            {
              'air_date': '1998-09-15',
              'episode_count': 6,
              'id': 745,
              'poster_path': '/iVDqMQXhRWYDVOUmSvRI17n9vLD.jpg',
              'season_number': 1
            }
          ],
          'status': 'Ended',
          'type': 'Scripted',
          'vote_average': 0,
          'vote_count': 0
        };
      });

      it('should dispatch RECEIVE_MOVIE when fetching is done', () => {
        nock(config.baseMovieUrl)
          .get(`/${config.queryMovieById}${id}${config.apiKey}`)
          .reply(200, currentMovie);

        const expectedActions = [
          {type: 'REQUEST_MOVIE', isFetching: true},
          {type: 'RECEIVE_MOVIE', currentMovie, isFetching: false}
        ];

        return store.dispatch(movieActions.fetchMovie(id)).then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
      });

      it('should dispatch RECEIVE_FAILED when fetching is failed', () => {
        const expectedActions = [
          {type: 'REQUEST_MOVIE', isFetching: true},
          {
            type: 'RECEIVE_MOVIE_FAILED',
            currentMovie: null,
            isFetching: false,
            error: `request to ${config.baseMovieUrl}/${config.queryMovieById}${id}${config.apiKey} failed, reason: something awful happened`
          }
        ];

        nock(config.baseMovieUrl)
          .get(`/${config.queryMovieById}${id}${config.apiKey}`)
          .replyWithError({'message': 'something awful happened', 'code': 'AWFUL_ERROR'});

        return store.dispatch(movieActions.fetchMovie(id)).then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
      });
    });
  });
});
