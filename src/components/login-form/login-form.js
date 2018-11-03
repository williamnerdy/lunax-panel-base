// @flow
import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

type Props = {
  form: object,
  onSubmit: Function
};

function LoginForm(props: Props) {
  const handleSubmit = event => {
    event.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        props.onSubmit(username, password);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <Form onSubmit={handleSubmit} className="login-form">
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Entrar
        </Button>
      </FormItem>
    </Form>
  );
}

export default Form.create()(LoginForm);
