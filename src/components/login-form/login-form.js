// @flow
import React, { Component } from 'react';
import { Button } from 'antd';

type Props = {
  onSubmit: Function
};

type State = {
  username: string,
  password: string
};

class LoginForm extends Component<Props, State> {
  state = {
    username: '',
    password: ''
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.onSubmit(username, password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            autoCorrect="off"
            required
          />
        </div>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            autoComplete="off"
            autoCorrect="off"
            required
          />
        </div>
        <div>
          <Button>Entrar</Button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
