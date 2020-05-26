import React from 'react';
import { shallow } from 'enzyme';

import Header from '../modules/header/components/Header';

describe('Header tests', () => {
  it('renders Header', () => {
    const wrapper = shallow(<Header />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
  });
});
