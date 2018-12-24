import { GET_STUDENTS_SUCCESS } from '../../actions';

const students = (state = [], action) => {
  if (action.type === GET_STUDENTS_SUCCESS) {
    return action.payload;
  }

  return state;
};
export { students };
