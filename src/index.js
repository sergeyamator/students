import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import { routerMiddleware } from 'react-router-redux';

import rootReducer from './Reducers';

import App from './app';

const history = createHistory();
const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];

const devToolsExtension = window.devToolsExtension;

if (devToolsExtension) {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
