import {combineReducers} from 'redux';
import movies from './movies';
import movie from './movie';
import filter from './filters';

export default combineReducers({
  movies,
  movie,
  filter
});
