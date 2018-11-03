import React from 'react';
import { shallow } from 'enzyme';
import SidebarItem from './sidebar-item';

describe('<SidebarItem />', () => {
  let wrapper, link, icon;

  beforeEach(() => {
    wrapper = shallow(
      <SidebarItem url="/test" icon="test">
        Teste
      </SidebarItem>
    );
    link = wrapper.find('Link');
    icon = wrapper.find('Icon');
  });

  it('shoud have "Teste" on text', () => {
    expect(wrapper.contains('Teste')).toBe(true);
  });

  it('shoud have a link', () => {
    expect(link.length).toBe(1);
  });

  it('shoud have "/test" on url', () => {
    expect(link.props().to).toBe('/test');
  });

  it('shoud have a icon', () => {
    expect(icon.length).toBe(1);
  });

  it('shoud have "test" on icon', () => {
    expect(icon.props().type).toBe('test');
  });
});
