import React from 'react';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AuthorizationForm, ProfilePage, Dashboard } from '../../pages';
import { PrivateRoutes } from './privateRoutes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={AuthorizationForm} />

      <PrivateRoutes>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/dashboard" component={Dashboard} />
      </PrivateRoutes>

      <Redirect from="*" to="/login" />
    </Switch>
  </BrowserRouter>
);

export { Routes };

