import React, { Component } from 'react';

import './style.scss';

export default class JokerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskName: 'Plot evil deeds'
    };

    this.addTask = this.addTask.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
  }

  render() {
    const { addTask } = this;
    const { tasks = [], removeTask } = this.props;
    const { newTaskName } = this.state;

    return (
      <div>
        <input className='input' value={newTaskName} onChange={this.changeInputValue} />
        <button onClick={() => addTask(newTaskName)}>New task</button>
        <ul>
          {tasks.length === 0
            ? <li>No tasks.</li>
            : tasks.map(task => {
              const { name, id } = task;
              return (
                <li key={id}>
                  {name} ...
                  <button onClick={() => removeTask(id)}>
                    Remove
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }

  addTask() {
    const { changeInputValue } = this;
    const { addTask } = this.props;
    const { newTaskName } = this.state;

    if (!newTaskName) return;

    addTask(newTaskName);
    changeInputValue('');
  }

  changeInputValue(e) {
    this.setState({
      newTaskName: (typeof e === 'string') ? e : e.target.value
    });
  }
}
