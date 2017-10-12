import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from '../../actions/actions';

const initState = null;

export default (state = initState, action) => {
  if (action.type === REGISTER_SUCCESS) {
    return action.payload.email;
  }

  if (action.type === REGISTER_FAILED) {
    return {
      mentor: null,
      error: action.payload,
    };
  }

  return state;
};
