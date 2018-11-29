import {
  LOAD,
} from '../../actions/actions';

const initState = false;

const loading = (state = initState, action) => {
  if (action.type === LOAD) {
    return {
      loading: true,
    };
  }

  return state;
};

export { loading };
