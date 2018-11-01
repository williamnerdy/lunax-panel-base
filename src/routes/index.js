import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// Routes
import PublicRoute from './public';
import RestrictedRoute from './restricted';

// Screens
import LoginScreen from '~/screens/login';
import HomeScreen from '~/screens/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path="/login" component={LoginScreen} />
      <RestrictedRoute exact path="/" component={HomeScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
