const { expect } = require('chai'); // chai assertion for unit tests

import tasks from './tasks';
import * as actionTypes from '../actions/tasks/actionTypes';

describe('test', () => {
  let initialState;

  beforeEach(() => {
    initialState = [{
      id: 0,
      name: 'alpha'
    }, {
      id: 1,
      name: 'bravo'
    }]
  });

  it('Correctly adds a task', () => {
    let action = {
      type: actionTypes.ADD_TASK,
      payload: 'charlie'
    }

    let action2 = {
      type: actionTypes.ADD_TASK,
      payload: 'delta'
    }

    let newState1 = tasks(initialState, action);
    let newState2 = tasks(newState1, action2);

    expect(newState1.slice(0, 2)).to.deep.equal(initialState);
    expect(newState1).to.have.lengthOf(3);
    expect(newState1[2].id).to.equal(2);
    expect(newState1[2].name).to.equal('charlie');

    expect(newState2.slice(0, 3)).to.deep.equal(newState1);
    expect(newState2).to.have.lengthOf(4);
    expect(newState2[3].id).to.equal(3);
    expect(newState2[3].name).to.equal('delta');
  });

  it('Correctly removes a task', () => {
    let action = {
      type: actionTypes.REMOVE_TASK,
      payload: 1
    }

    let action2 = {
      type: actionTypes.REMOVE_TASK,
      payload: 'cookies'
    }

    let newState1 = tasks(initialState, action);
    let newState2 = tasks(initialState, action2)

    expect(newState1).to.have.lengthOf(1);
    expect(newState1).to.deep.equal(initialState.slice(0, 1));
    expect(newState2).to.deep.equal(initialState);
  });
});