import { GET_STUDENTS } from '../actions';
import { get } from '../helpers';

// import { requestStart, requestFinish } from '../request';

const fetchStudents = () => dispatch => get('/students', dispatch, GET_STUDENTS);

export { fetchStudents };
