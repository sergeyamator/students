import { GET_STUDENTS_SUCCESS, GET_STUDENT_FAILED } from '../actions';

import { url } from '../../config/url';
import { getToken } from '../../services';

// import { requestStart, requestFinish } from '../request';

const fetchSuccess = data => ({
  type: GET_STUDENTS_SUCCESS,
  payload: data,
});

const fetchFailed = error => ({
  type: GET_STUDENT_FAILED,
  payload: error,
});

const fetchStudents = () => (dispatch) => {
  // dispatch(requestStart());
  const requestUrl = `${url.api}/students`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  };

  return fetch(requestUrl, options)
    .then(response => response.json())
    .then(response => dispatch(fetchSuccess(response)))
    // .then(() => dispatch(requestFinish()))
    .catch(error => dispatch(fetchFailed(error)));
};

export { fetchStudents };
