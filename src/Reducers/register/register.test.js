import reducer from './index';
import { REGISTER_SUCCESS, REGISTER_FAILED } from '../../actions/actions';

describe('Register reducer', () => {
  it('should set user data after register', () => {
    const initState = {
      mentor: null,
    };

    const user = {
      name: 'Dima',
      email: 'dmitry@gmail.com',
    };
    const expectedState = {
      mentor: {
        name: user.name,
        email: user.email,
      },
    };

    expect(reducer(initState, { type: REGISTER_SUCCESS, payload: user })).toEqual(expectedState);
  });

  it('should set error if register is failed', () => {
    const initState = {
      mentor: null,
    };

    const error = 'Some error during fetch from server';
    const expectedData = {
      ...initState,
      errors: {
        registerError: error,
      },
    };

    expect(reducer(initState, { type: REGISTER_FAILED, payload: error })).toEqual(expectedData);
  });
});
