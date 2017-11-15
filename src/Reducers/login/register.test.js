import reducer from './index';
import { LOGIN_SUCCESS, LOGIN_FAILED } from '../../actions/actions';

describe('Login reducer', () => {
  it('should set user data after login', () => {
    const initState = null;

    const user = {
      name: 'Dima',
      email: 'dmitry@gmail.com',
    };
    const expectedState = {
      email: user.email,
      name: user.name,
    };

    expect(reducer(initState, { type: LOGIN_SUCCESS, payload: user })).toEqual(expectedState);
  });

  it('should set error if register is failed', () => {
    const initState = null;

    const error = 'Some error during fetch from server';
    const expectedData = {
      mentor: null,
      error,
    };

    expect(reducer(initState, { type: LOGIN_FAILED, payload: error })).toEqual(expectedData);
  });
});
