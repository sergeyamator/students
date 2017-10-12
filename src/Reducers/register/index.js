import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from '../../actions/actions';

const initState = null;

export default (state = initState, action) => {
  if (action.type === REGISTER_SUCCESS) {
    return action.payload;
  }

  if (action.type === REGISTER_FAILED) {
    return {
      errors: {
        registerError: action.payload,
      },
    };
  }

  return state;
};
