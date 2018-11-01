import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

import Input from '~/components/input';

import api from '~/services/api';
import { login } from '~/services/auth';

import { URL_AUTH } from '~/settings';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    api
      .post(URL_AUTH, { username, password })
      .then(res => {
        if (res.token) {
          login('teste');
          this.props.history.push('/');
        }
      })
      .catch(error => {
        alert('Error!');
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Login Screen</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
          </div>
          <Button>Entrar</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginScreen);
