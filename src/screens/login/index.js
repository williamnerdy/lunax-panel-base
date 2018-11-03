import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '~/components/login-form';
import api from '~/services/api';
import { login } from '~/services/auth';
import { API_DATA, APP_NAME } from '~/settings';
import Logo from '~/images/logo.png';

const LoginScreen = props => {
  const auth = (username, password) => {
    api
      .post(API_DATA.auth, { username, password })
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
