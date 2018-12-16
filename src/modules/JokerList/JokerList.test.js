import React from 'react';
import renderer from 'react-test-renderer';

import JokerList from './JokerList';

it('renders correctly', () => {
  const tree = renderer
    .create(<JokerList />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});