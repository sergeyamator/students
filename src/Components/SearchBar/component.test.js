import React from 'react';
import {shallow} from 'enzyme';

import Component from './index';

test('changes text after input', () => {
  // Render a checkbox with label in the document
  const input = shallow(
    <Component />
  );

  expect(input.value).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
