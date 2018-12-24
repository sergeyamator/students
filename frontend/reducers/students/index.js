import { GET_STUDENTS } from '../../actions';

const students = (state = [], action) => {
  if (action.type === `${GET_STUDENTS}_SUCCESS`) {
    return action.payload;
  }

  return state;
};
export { students };
