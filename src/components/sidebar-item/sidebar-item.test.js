import React from 'react';
import SidebarItem from './sidebar-item';
import { shallow } from 'enzyme';

describe('<SidebarItem />', () => {
  let wrapper, link, icon;

  beforeEach(() => {
    wrapper = shallow(
      <SidebarItem url="/test" icon="test">
        Teste
      </SidebarItem>
    );
    link = wrapper.find('Link').at(0);
    icon = wrapper.find('Icon').at(0);
  });

  it('shoud have "Teste" on text', () => {
    expect(wrapper.contains('Teste')).toBe(true);
  });

  it('shoud have a link', () => {
    expect(wrapper.find('Link').length).toBe(1);
  });

  it('shoud have "/test" on url', () => {
    expect(link.props().to).toBe('/test');
  });

  it('shoud have a icon', () => {
    expect(wrapper.find('Icon').length).toBe(1);
  });

  it('shoud have "test" on icon', () => {
    expect(icon.props().type).toBe('test');
  });
});
