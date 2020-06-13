// In this file, you should implement a snapshot test that asserts that the page looks as expected. Be sure that once you generate a snapshot, you are not changing the HTML of the application. If you do change the HTML, you will need to generate a new snapshot.

import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.js';

describe('Snapshot test', () => {
  it('Matches the snapshot', () => {
    const currentHTML = renderer.create(<App />).toJSON();
  // copypaste the html page
  expect(currentHTML).toMatchSnapshot();
  })
})