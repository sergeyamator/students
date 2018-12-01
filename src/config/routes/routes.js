import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import {
  AuthorizationForm, ProfilePage, Dashboard, MainLayout,
} from '../../pages';
import { PrivateRoutes } from './privateRoutes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={AuthorizationForm} />
      <MainLayout>
        <PrivateRoutes>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/dashboard" component={Dashboard} />
        </PrivateRoutes>
      </MainLayout>
      <Redirect from="*" to="/login" />
    </Switch>
  </BrowserRouter>
);

export { Routes };
