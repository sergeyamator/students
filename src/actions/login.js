import fetch from 'isomorphic-fetch';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
} from './actions';

const registerSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
  isFetching: false,
});

const registerFailed = error => ({
  type: LOGIN_FAILED,
  payload: error,
  isFetching: false,
});

const registerRequest = () => ({
  type: LOGIN_REQUEST,
  isFetching: true,
});

export const login = data => (dispatch) => {
  dispatch(registerRequest());

  const registerUrl = '/api/login';
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

export default login;

