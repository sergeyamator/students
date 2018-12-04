import { url } from '../../config/url';
import { getToken } from '../../services';

import {
  FETCH_MENTOR_SUCCESS,
  FETCH_MENTOR_FAILED,
} from '../actions';

import { requestStart, requestFinish } from '../request';

const fetchSuccess = data => ({
  type: FETCH_MENTOR_SUCCESS,
  payload: data,
});

const fetchFailed = error => ({
  type: FETCH_MENTOR_FAILED,
  payload: error,
});

const fetchMentor = () => (dispatch) => {
  dispatch(requestStart());
  const requestUrl = `${url.api}/mentor`;
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
    .then(() => dispatch(requestFinish()))
    .catch(error => dispatch(fetchFailed(error)));
};

export { fetchMentor };
