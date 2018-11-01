import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PublicLayout from '~/layouts/public';
import { isAuth } from '~/services/auth';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps =>
        !isAuth() ? (
          <PublicLayout>
            <Component {...matchProps} />
          </PublicLayout>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: rest.location } }} />
        )
      }
    />
  );
};

export default PublicRoute;
