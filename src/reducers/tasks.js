import * as actionTypes from '../actions/tasks/actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK: return addTask(state, action.payload);
    case actionTypes.REMOVE_TASK: return removeTask(state, action.payload);
    default: return state;
  }
}

function addTask(tasks = [], payload) {
  const ids = tasks.map(task => task.id)
  const maxId = Math.max.apply(null, ids);

  return [
    ...tasks,
    {
      id: maxId + 1,
      name: payload
    }
  ];
}

function removeTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}
