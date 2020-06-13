import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';
import Counter from '../components/Counter.js';

// On clicking the - button, the state count variable should be decreased by 1
// On clicking the + button, the state count variable should be increased by 1
// When the state count variable changes, the HTML should update and match that change

describe('functionality', () => {
  it('has initial state values', () => {
    let component = shallow(<Counter />);
    expect(component.state('count')).toBe(0);
  });

  it('add', () => {
    let component = shallow(<Counter />);
    let fakeEvent = { target: { count: 0 } };
    component.find('.up clicker').simulate('click', fakeEvent);
    expect(component.state('count')).toBe(1);
  });
});

// describe('aesthetics', () => {

// });
