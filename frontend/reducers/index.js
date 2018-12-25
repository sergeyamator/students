import { combineReducers } from 'redux';
import { students } from './students';
import { student } from './student';
import { mentor } from './mentor';
import { auth } from './auth';
import { loading } from './loading';

export default combineReducers({
  students,
  student,
  auth,
  loading,
  mentor,
});
