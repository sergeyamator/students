import { GET_STUDENT } from '../../actions';

const student = (state = {}, action) => {
  if (action.type === `${GET_STUDENT}_SUCCESS`) {
    return action.payload;
  }

  return state;
};
export { student };
