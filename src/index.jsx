import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import App from './app.jsx';


const history = createHistory();
const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

const devToolsExtension = window.devToolsExtension;
enhancers.push(devToolsExtension());

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

const Home = () => (
  <h1>hi</h1>
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
          <Route exact path='/' component={App} />
          <Route exact path='/hi' component={Home} />
        </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
