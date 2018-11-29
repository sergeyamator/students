import fetch from 'isomorphic-fetch';
import { url } from '../config';
import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
} from './actions';

const registerSuccess = data => ({
  type: REGISTER_SUCCESS,
  payload: data,
  isFetching: false,
});

const registerFailed = error => ({
  type: REGISTER_FAILED,
  payload: error,
  isFetching: false,
});

const registerRequest = () => ({
  type: REGISTER_REQUEST,
  isFetching: true,
});

const register = data => (dispatch) => {
  dispatch(registerRequest());

  const registerUrl = `${url.api}/register`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(registerUrl, options)
    .then(response => response.json())
    .then(response => dispatch(registerSuccess(response)))
    .catch(error => dispatch(registerFailed(error)));
};

export { register };

