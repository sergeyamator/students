import { url } from '../../config/url';
import { getToken } from '../../services';

const fetchSuccess = (type, data) => ({
  type: `${type}_SUCCESS`,
  payload: data,
});

const fetchFailed = (type, error) => ({
  type: `${type}_FAILED`,
  payload: error,
});

const request = (requestUrl, options, dispatch, type) => fetch(requestUrl, options)
  .then(response => response.json())
  .then(response => dispatch(fetchSuccess(type, response)))
  // .then(() => dispatch(requestFinish()))
  .catch(error => dispatch(fetchFailed(type, error)));

export const get = (endpoint, dispatch, type) => {
  const requestUrl = `${url.api}/${endpoint}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  };

  return request(requestUrl, options, dispatch, type);
};

export const post = (endpoint, data, dispatch, type) => {
  const requestUrl = `${url.api}/${endpoint}`;
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: data,
  };

  return request(requestUrl, options, dispatch, type);
};
