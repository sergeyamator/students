import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import { getToken } from '../services';

const enhancers = [];
const devToolsExtension = window.devToolsExtension;

if (devToolsExtension) {
  enhancers.push(devToolsExtension());
}
const history = createHistory();

const initialState = {
  auth: {
    loggedIn: !!getToken(),
  },
};

const middleware = [
  thunk,
  routerMiddleware(history),
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);
