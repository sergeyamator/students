import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from '../../actions/actions';

const initState = {
  mentor: null,
};

export default (state = initState, action) => {
  if (action.type === REGISTER_SUCCESS) {
    return {
      ...state,
      mentor: action.payload,
    };
  }

  if (action.type === REGISTER_FAILED) {
    return {
      ...state,
      errors: {
        registerError: action.payload,
      },
    };
  }

  return initState;
};
