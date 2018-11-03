// @flow
import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

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
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Por favor, digite o usuário!' }]
          })(
            <Input
              id="user"
              prefix={<Icon type="user" />}
              placeholder="Usuário"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Por favor, digite a senha!' }]
          })(
            <Input
              id="pass"
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Senha"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Entrar
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
