import { url } from '../../config/url';
import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_LOGOUT,
} from '../actions';
import { request } from '../request';
import { finishAuthentication } from '../../services';
import { fetchMentor } from '../fetchMentor';
import { authService } from '../../services/authService';

const authSuccess = (token) => {
  request(false);
  finishAuthentication(token);

  return {
    type: AUTH_SUCCESS,
  };
};

const authFailed = error => ({
  type: AUTH_FAILED,
  payload: error,
});

const logout = () => {
  authService.logout();

  return {
    type: AUTH_LOGOUT,
  };
};

const auth = (authUrl, data) => (dispatch) => {
  dispatch(request(true));

  const requestUrl = `${url.api}/${authUrl}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(requestUrl, options)
    .then(response => response.json())
    .then(response => dispatch(authSuccess(response)))
    .then(() => dispatch(fetchMentor()))
    .catch(error => dispatch(authFailed(error)));
};

export { auth, logout };

