import {
  REQUEST,
} from '../../actions/actions';

const initState = false;

const loading = (state = initState, action) => {
  if (action.type === REQUEST) {
    return {
      loading: true,
    };
  }

  return state;
};

export { loading };
