import { get, post } from '../helpers';

import {
  FETCH_MENTOR,
  EDIT_MENTOR,
} from '../actions';

// import { requestStart, requestFinish } from '../request';
const fetchMentor = () => dispatch => get('mentor', dispatch, FETCH_MENTOR);
const editMentor = data => dispatch => post('mentor', data, dispatch, EDIT_MENTOR);

export { editMentor, fetchMentor };
