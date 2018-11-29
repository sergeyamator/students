import { REQUEST } from '../actions';

export const request = status => ({
  type: REQUEST,
  isFetching: status,
});
