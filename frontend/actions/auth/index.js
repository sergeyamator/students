import { url } from '../../config/url';
import {
  AUTH,
  AUTH_LOGOUT,
} from '../actions';
import { requestFinish, requestStart } from '../request';
import { finishAuthentication } from '../../services';
import { fetchMentor } from '../mentor';
import { authService } from '../../services/authService';

const authSuccess = (token) => {
  finishAuthentication(token);

  return {
    type: `${AUTH}_SUCCESS`,
  };
};

const authFailed = error => ({
  type: `${AUTH}_FAILED`,
  payload: error,
});

const logout = () => {
  authService.logout();

  return {
    type: AUTH_LOGOUT,
  };
};

const auth = (authUrl, data) => (dispatch) => {
  dispatch(requestStart());
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
    .then(() => dispatch(requestFinish()))
    .catch(error => dispatch(authFailed(error)));
};

export { auth, logout };
