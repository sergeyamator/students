import {
  AUTH,
  AUTH_LOGOUT,
} from '../../actions/actions';

const auth = (state = {}, action) => {
  if (action.type === `${AUTH}_SUCCESS`) {
    return {
      loggedIn: true,
    };
  }

  if (action.type === `${AUTH}_FAILED`) {
    return {
      loggedIn: false,
    };
  }

  if (action.type === AUTH_LOGOUT) {
    return {
      ...state,
      loggedIn: false,
      mentor: {},
    };
  }

  return state;
};

export { auth };
