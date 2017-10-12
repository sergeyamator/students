import { combineReducers } from 'redux';
import students from './students';
import mentor from './register';

export default combineReducers({
  students,
  mentor,
});
