import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// Routes
import PublicRoute from './public';
import RestrictedRoute from './restricted';

// Screens
import LoginScreen from '~/screens/login';
import HomeScreen from '~/screens/home';
import SettingsScreen from '~/screens/settings';

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <PublicRoute path="/login" component={LoginScreen} />
      <RestrictedRoute exact path="/" component={HomeScreen} />
      <RestrictedRoute path="/settings" component={SettingsScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
