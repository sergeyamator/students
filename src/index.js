import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { Routes } from './config';
import { store } from './store';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('#app'),
);
