import React from 'react';
import { shallow } from 'enzyme';
import Loading from './loading';

describe('<Loading />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
