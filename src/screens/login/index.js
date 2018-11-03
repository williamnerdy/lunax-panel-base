import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '~/components/login-form';
import api from '~/services/api';
import { login } from '~/services/auth';
import { URL_AUTH } from '~/settings';

const auth = (username, password) => {
  api
    .post(URL_AUTH, { username, password })
    .then(res => {
      if (res.token) {
        login(res.token);
        this.props.history.push('/');
      }
    })
    .catch(error => {
      alert('Error!');
      console.error(error);
    });
};

function LoginScreen() {
  return (
    <>
      <h1>Login Screen</h1>
      <LoginForm onSubmit={auth} />
    </>
  );
}

export default withRouter(LoginScreen);
