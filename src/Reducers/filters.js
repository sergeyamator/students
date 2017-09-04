const initialState = 'ALL';

import {
  ASCENDING_POPULARITY,
  DESCENDINGLY_POPULARITY,
  ASCENDING_DATE,
  DESCENDINGLY_DATE
} from '../actions/actions';

export default (state = initialState, action) => {
  if (action.type === ASCENDING_POPULARITY) {
    return ASCENDING_POPULARITY;
  }

  if (action.type === DESCENDINGLY_POPULARITY) {
    return DESCENDINGLY_POPULARITY;
  }

  if (action.type === ASCENDING_DATE) {
    return ASCENDING_DATE;
  }

  if (action.type === DESCENDINGLY_DATE) {
    return DESCENDINGLY_DATE;
  }

  return state;
};
