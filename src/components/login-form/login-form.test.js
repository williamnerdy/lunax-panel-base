import React from 'react';
import LoginForm from './login-form';
import { mount } from 'enzyme';

describe('<LoginForm />', () => {
  let mock, wrapper, userInput, passInput;

  beforeEach(() => {
    mock = jest.fn();
    wrapper = mount(<LoginForm onSubmit={mock} />);
    userInput = wrapper.find('Input').at(0);
    passInput = wrapper.find('Input').at(1);
  });

  it('should have a input to username', () => {
    expect(userInput.props().id).toBe('username');
  });

  it('should have a input to password', () => {
    expect(passInput.props().id).toBe('password');
  });

  it('should have a Button', () => {
    expect(wrapper.find('Button').length).toBe(1);
  });
});
