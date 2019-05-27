import React from 'react';
import renderer from 'react-test-renderer';

import JokerList from './JokerList';

describe('test the render output', () => {
  it('renders correctly without tasks', () => {
    const tree = renderer
      .create(<JokerList />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with tasks', () => {
    const tree = renderer
      .create(<JokerList tasks={[
        {
          id: 1,
          name: 'capture batman'
        }
      ]}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
