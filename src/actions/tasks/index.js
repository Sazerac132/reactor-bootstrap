import * as actionTypes from './actionTypes';

export function addTask(task) {
  return {
    type: actionTypes.ADD_TASK,
    payload: task
  }
}

export function removeTask(id) {
  return {
    type: actionTypes.REMOVE_TASK,
    payload: id
  }
}
