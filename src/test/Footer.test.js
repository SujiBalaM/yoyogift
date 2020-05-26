import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../modules/common/components/Footer';

describe('Footer tests', () => {
  it('renders Footer', () => {
    shallow(<Footer />);

      // Expect the wrapper object to be defined
      // expect(wrapper.find('.list-items')).toBeDefined();
  });
});
