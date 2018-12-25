import { GET_STUDENTS, GET_STUDENT } from '../actions';
import { get } from '../helpers';

// import { requestStart, requestFinish } from '../request';

const fetchStudents = () => dispatch => get('/students', dispatch, GET_STUDENTS);
const fetchStudent = id => dispatch => get(`/students/${id}`, dispatch, GET_STUDENT);

export { fetchStudents, fetchStudent };
