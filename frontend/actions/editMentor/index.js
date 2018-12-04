import { url } from '../../config/url';
import { getToken } from '../../services';

import {
  EDIT_MENTOR_SUCCESS,
  EDIT_MENTOR_FAILED,
} from '../actions';

import { requestStart, requestFinish } from '../request';

const fetchSuccess = data => ({
  type: EDIT_MENTOR_SUCCESS,
  payload: data,
});

const fetchFailed = error => ({
  type: EDIT_MENTOR_FAILED,
  payload: error,
});

const editMentor = data => (dispatch) => {
  dispatch(requestStart());
  const requestUrl = `${url.api}/mentor`;
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: data,
  };

  return fetch(requestUrl, options)
    .then(response => response.json())
    .then(response => dispatch(fetchSuccess(response)))
    .then(() => dispatch(requestFinish()))
    .catch(error => dispatch(fetchFailed(error)));
};

export { editMentor };
