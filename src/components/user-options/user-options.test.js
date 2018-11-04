import React from 'react';
import { shallow } from 'enzyme';
import UserOptions from './user-options';

describe('<UserOptions />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<UserOptions />);
    expect(wrapper).toMatchSnapshot();
  });
});
