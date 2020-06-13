import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.js';

describe('Snapshot test', () => {
  it('Matches the snapshot', () => {
    const currentHTML = renderer.create(<App />).toJSON();
  expect(currentHTML).toMatchSnapshot();
  })
})