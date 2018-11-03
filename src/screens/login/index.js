import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '~/components/login-form';
import api from '~/services/api';
import { login } from '~/services/auth';
import { APP_NAME } from '~/settings';
import { AUTH_URL } from '~/api-url';
import Logo from '~/images/logo.png';

const LoginScreen = props => {
  const auth = (username, password) => {
    api
      .post(AUTH_URL, { username, password })
      .then(({ data }) => {
        if (data.key) {
          login(data.key);
          props.history.push('/');
        } else {
          alert('Error');
        }
      })
      .catch(error => {
        alert('Error!');
        console.error(error);
      });
  };

  return (
    <>
      <img style={{ marginBottom: '15px' }} src={Logo} alt={APP_NAME} />
      <LoginForm onSubmit={auth} />
    </>
  );
};

export default withRouter(LoginScreen);
