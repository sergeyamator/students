import { combineReducers } from 'redux';
import { students } from './students';
import { mentor } from './mentor';
import { auth } from './auth';
import { loading } from './loading';

export default combineReducers({
  students,
  auth,
  loading,
  mentor,
});
