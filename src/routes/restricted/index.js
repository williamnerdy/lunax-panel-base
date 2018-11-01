import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import RestrictedLayout from '~/layouts/restricted';
import { isAuth } from '~/services/auth';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps =>
        isAuth() ? (
          <RestrictedLayout>
            <Component {...matchProps} />
          </RestrictedLayout>
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: rest.location } }}
          />
        )
      }
    />
  );
};

export default RestrictedRoute;
