import {
  FETCH_MENTOR_SUCCESS,
  FETCH_MENTOR_FAILED,
  EDIT_MENTOR_SUCCESS,
} from '../../actions';

const mentor = (state = {}, action) => {
  if (action.type === FETCH_MENTOR_SUCCESS || action.type === EDIT_MENTOR_SUCCESS) {
    return {
      id: action.payload.id,
      username: action.payload.username,
      email: action.payload.email,
      createdAt: action.payload.createdAt,
      avatar: action.payload.avatar,
      technologies: action.payload.technologies,
    };
  }

  if (action.type === FETCH_MENTOR_FAILED) {
    return {};
  }

  return state;
};
export { mentor };
