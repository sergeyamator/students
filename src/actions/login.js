import fetch from 'isomorphic-fetch';
import { url } from '../config/url';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
} from './actions';

const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
  isFetching: false,
});

const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: error,
  isFetching: false,
});

const loginRequest = () => ({
  type: LOGIN_REQUEST,
  isFetching: true,
});

const login = data => (dispatch) => {
  dispatch(loginRequest());

  const registerUrl = `${url.api}/login`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(registerUrl, options)
    .then(response => response.json())
    .then(response => dispatch(loginSuccess(response)))
    .catch(error => dispatch(loginFailed(error)));
};

export { login };

