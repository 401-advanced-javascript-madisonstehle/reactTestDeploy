import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount } from 'enzyme';
import Counter from '../components/Counter.js';

// When the state count variable changes, the HTML should update and match that change

describe('functionality', () => {
  it('has initial state values', () => {
    let component = shallow(<Counter />);
    expect(component.state('count')).toBe(0);
  });

  it('add', () => {
    let component = shallow(<Counter />);
    let fakeEvent = {};
    component.find('span.up.clicker').simulate('click', fakeEvent);
    expect(component.state('count')).toBe(1);
    expect(component.state('polarity')).toBe('positive');
  });

  it('subtract', () => {
    let component = shallow(<Counter />);
    let fakeEvent = {};
    component.find('span.down.clicker').simulate('click', fakeEvent);
    expect(component.state('count')).toBe(-1);
    expect(component.state('polarity')).toBe('negative');
  });

  it('toggle between positive and negative', () => {
    let component = shallow(<Counter />);
    let fakeEvent = {};

    component.find('span.down.clicker').simulate('click', fakeEvent);
    expect(component.state('count')).toBe(-1);
    expect(component.state('polarity')).toBe('negative');

    component.find('span.up.clicker').simulate('click', fakeEvent);
    expect(component.state('count')).toBe(0);
    expect(component.state('polarity')).toBe('');

    component.find('span.up.clicker').simulate('click', fakeEvent);
    expect(component.state('count')).toBe(1);
    expect(component.state('polarity')).toBe('positive');
  });
});

// describe('aesthetics', () => {

// });
