import {
  FETCH_MENTOR,
  EDIT_MENTOR,
} from '../../actions';

const mentor = (state = {}, action) => {
  if (action.type === `${FETCH_MENTOR}_SUCCESS` || action.type === `${EDIT_MENTOR}_SUCCESS`) {
    return {
      id: action.payload.id,
      username: action.payload.username,
      email: action.payload.email,
      createdAt: action.payload.createdAt,
      avatar: action.payload.avatar,
      technologies: action.payload.technologies,
    };
  }

  if (action.type === `${FETCH_MENTOR}_FAILED`) {
    return {};
  }

  return state;
};
export { mentor };
