import {
  REQUEST_START,
  REQUEST_FINISH,
} from '../../actions/actions';

const loading = (state = false, action) => {
  if (action.type === REQUEST_START) {
    return true;
  }

  if (action.type === REQUEST_FINISH) {
    return false;
  }

  return state;
};

export { loading };
