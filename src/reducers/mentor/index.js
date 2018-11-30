import {
  FETCH_MENTOR_SUCCESS,
  FETCH_MENTOR_FAILED,
} from '../../actions';

const mentor = (state = {}, action) => {
  if (action.type === FETCH_MENTOR_SUCCESS) {
    return {
      username: action.payload.name,
      email: action.payload.email,
    };
  }

  if (action.type === FETCH_MENTOR_FAILED) {
    return {};
  }

  return state;
};
export { mentor };
