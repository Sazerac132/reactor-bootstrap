import React from 'react';
import TodoTable from './TodoTable';

const styles = require('./style.scss');

export default class TodoList extends React.Component {

  constructor() {
    super();

    this.state = {
      nextId: 4,
      tasks: [
        {
          id: 0,
          name: 'Prepare React demo',
          done: false
        },
        {
          id: 1,
          name: 'Eat lunch',
          done: true
        },
        {
          id: 2,
          name: 'Study French',
          done: false
        },
        {
          id: 3,
          name: 'Clean fish tank',
          done: true
        }
      ]
    };

    this.render = this.render.bind(this);
    this.updateText = this.updateText.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.removeTask = this.removeTask.bind(this);

  }

  render() {
    let {tasks} = this.state;

    let numTasks = tasks.length;
    let completedTasks = tasks.filter(task => task.done).length;

    return (
      <div className={styles.wrapper}>
        <TodoTable tasks={tasks} />
        <div className={styles.announcer}>I have completed {completedTasks} out of {numTasks} tasks. {
          completedTasks >= numTasks && 'Yay!'
        }</div>
      </div>
    );
  }

  updateText() {

  }

  addTask() {
    // add a task to the tasks array and call setState
  }

  toggleTask() {
    // toggle the 'done' property on an existing task and call setState
  }

  removeTask() {
    // remove a task from the array and call setState
  }

}