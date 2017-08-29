import React from 'react';
import {render} from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';

import App from './app.js';
import Movie from './Components/MovieCard';

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

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/movie/:id' component={Movie} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
