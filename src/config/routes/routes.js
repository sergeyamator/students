import React from 'react';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AuthorizationForm, ProfilePage } from '../../Pages';
import { PrivateRoutes } from './PrivateRoutes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={AuthorizationForm} />

      <PrivateRoutes>
        <Route path="/profile" component={ProfilePage} />
      </PrivateRoutes>

      <Redirect from="*" to="/login" />
    </Switch>
  </BrowserRouter>
);

export { Routes };

