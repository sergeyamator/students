import {
  AUTH_SUCCESS,
  AUTH_FAILED,
} from '../../actions/actions';

const auth = (state = {}, action) => {
  if (action.type === AUTH_SUCCESS) {
    return {
      loggedIn: true,
    };
  }

  if (action.type === AUTH_FAILED) {
    return {
      loggedIn: false,
    };
  }

  return state;
};

export { auth };
