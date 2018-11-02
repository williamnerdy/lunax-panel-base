import React from 'react';
import LoginForm from './login-form';
import { shallow } from 'enzyme';

describe('<LoginForm />', () => {
  let mock, wrapper, userInput, passInput;

  beforeEach(() => {
    mock = jest.fn();
    wrapper = shallow(<LoginForm onSubmit={mock} />);
    userInput = wrapper.find('#username');
    passInput = wrapper.find('#password');
  });

  it('should have a input to username', () => {
    expect(userInput.length).toBe(1);
  });

  it('shoud change username value to "test"', () => {
    const event = { target: { name: 'username', value: 'test' } };
    userInput.simulate('change', event);
    expect(wrapper.find('#username').prop('value')).toBe('test');
  });

  it('should have a input to password', () => {
    expect(passInput.length).toBe(1);
  });

  it('shoud change password value to "test"', () => {
    const event = { target: { name: 'password', value: 'test' } };
    passInput.simulate('change', event);
    expect(wrapper.find('#password').prop('value')).toBe('test');
  });

  it('should have a Button', () => {
    expect(wrapper.find('Button').length).toBe(1);
  });

  it('should call function on submit form', () => {
    wrapper.simulate('submit', { preventDefault: () => {} });
    expect(mock).toBeCalled();
  });

  it('should call onSubmit with correct param ', () => {
    const userEvent = { target: { name: 'username', value: 'testuser' } };
    userInput.simulate('change', userEvent);

    const passEvent = { target: { name: 'password', value: 'testpass' } };
    passInput.simulate('change', passEvent);

    wrapper.simulate('submit', { preventDefault: () => {} });
    expect(mock).toBeCalledWith('testuser', 'testpass');
  });
});
