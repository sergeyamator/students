import fetch from 'isomorphic-fetch';
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

export const register = data => (dispatch) => {
  dispatch(registerRequest());

  const registerUrl = '/register';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  };

  return fetch(registerUrl, options)
    .then(response => response.json())
    .then(response => dispatch(registerSuccess(response)))
    .catch(error => dispatch(registerFailed(error)));
};

export default register;

