import {combineReducers} from 'redux';
import movies from './movies';
import movie from './movie';
import filters from './filters';

export default combineReducers({
  movies,
  movie,
  filters
});
