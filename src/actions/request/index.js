import { REQUEST_START, REQUEST_FINISH } from '../actions';

export const requestStart = () => ({
  type: REQUEST_START,
});

export const requestFinish = () => ({
  type: REQUEST_FINISH,
});
