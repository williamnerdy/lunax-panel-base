import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Sidebar from './sidebar';
import SidebarItem from '../sidebar-item';

describe('<Sidebar />', () => {
  let wrapper, items;

  beforeEach(() => {
    items = [
      { name: 'test name 1', icon: 'test-icon-1', url: '/test-url-1' },
      { name: 'test name 2', icon: 'test-icon-2', url: '/test-url-2' },
      { name: 'test name 3', icon: 'test-icon-3', url: '/test-url-3' },
      { name: 'test name 4', icon: 'test-icon-4', url: '/test-url-4' }
    ];

    wrapper = mount(
      <MemoryRouter>
        <Sidebar items={items} />
      </MemoryRouter>
    );
  });

  it('shoud find a ul', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('shoud find the items', () => {
    expect(wrapper.find(SidebarItem).length).toBe(items.length);
  });
});
